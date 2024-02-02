<template>
  <div id="app" class="bg-white p-4 flex flex-col items-end">
    <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mb-4 outline-none w-60 right" @change="handleChangePrice">
      <option value="" selected>Theo thứ tự phổ biến</option>
      <option value="asc">Thứ tự theo giá: thấp đến cao</option>
      <option value="desc">Thứ tự theo giá: cao xuống thấp</option>
    </select>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      <div
        v-for="product in products"
        :key="product._id"
        class="border border-red-500 p-2 cursor-pointer"
        @click="redirectToProductDetail(product._id)"
      >
        <div class="bg-white p-2">
          <img
            :src="getImageUrl(product.images[0])"
            class="w-full h-48 object-contain"
            alt="Product Image"
          />
        </div>
        <div class="text-red-600 mt-2">
          <p class="text-sm">{{ product.name }}</p>
          <p class="font-bold">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSearch",
  data() {
    return {
      products: null,
    };
  },
  computed: {
    routeQuery() {
      return this.$route.query;
    },
  },
  created() {
    this.fetchProducts();
  },
  watch: {
    routeQuery: {
      handler: "fetchProducts",
      deep: true,
    },
  },
  methods: {
    
    async handleChangePrice(e) {
      let selectedValue = e.target.value;
      console.log(this.routeQuery);
      if(selectedValue === "asc") {
        this.routeQuery.sort = "asc"
      }else if(selectedValue === "desc") {
        this.routeQuery.sort = "desc"
      }else {
        delete this.routeQuery.sort;
      }
      const { data } = await this.$store.dispatch(
        "paginateProducts",
        this.routeQuery
      );
      this.products = data.products;
    },

    async fetchProducts() {
      console.log("routeQuery", this.routeQuery);
      try {
        const { data } = await this.$store.dispatch(
          "paginateProducts",
          this.routeQuery
        );
        this.products = data.products;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    getImageUrl(imageName) {
      return `${this.$config.apiUrl}/${imageName}`;
    },
    redirectToProductDetail(_id) {
      this.$router.replace(`/product/${_id}`);
    },
  },
};
</script>
