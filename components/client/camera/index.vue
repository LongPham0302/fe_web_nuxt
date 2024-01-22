<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">CAMERA</h2>

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="product in getListProduct"
          :key="product._id"
          class="group relative"
          @click="goToInfoProduct(product._id)"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="
                product.images && product.images.length > 0
                  ? `http://localhost:4000/${product.images[0]}`
                  : 'https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2023/6/13/03-16866569815101672545124-16-10-534-1000-crop-16866570358101851702408.jpg'
              "
              :alt="product.imageAlt"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "CameraComponent",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        // More products...
      ],
    };
  },
  created() {
    this.$store.dispatch("getlistProducts");
  },
  computed: {
    ...mapGetters(["getListProduct"]),
  },
  methods: {
    goToInfoProduct(id) {
        console.log(id);
      this.$router.replace(`/camera/${id}`);
    },
  },
};
</script>
