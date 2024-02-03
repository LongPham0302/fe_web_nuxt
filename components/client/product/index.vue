<template>
  <div class="bg-white">
    <div class="box flex border-b mt-2">
      <div class="bg-red-600 w-1/5">
        <h1 class="pl-5 text-white font-bold uppercase text-2xl">{{ name }}</h1>
      </div>
      <div class="triangle-right"></div>
    </div>
    <div class="mx-auto w-3/4 mt-5 mb-5">
      <VueSlickCarousel v-if="this.productData.length > 0" v-bind="settings">
        <div 
          v-for="product in this.productData" 
          :key="product._id"
          @click="goToInfoProduct(product._id)"
          class="p-3"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="
                product.images && product.images.length > 0
                  ? getImageUrl(product.images[0])
                  : 'https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2023/6/13/03-16866569815101672545124-16-10-534-1000-crop-16866570358101851702408.jpg'
              "
              :alt="product.imageAlt"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4">
            <div>
              <span class="text-center font-bold uppercase">
                {{ product.name }}
              </span>
            </div>
            <p v-if="product.price" class="text-center text-red-600 font-bold">
              {{ product.price.toLocaleString("vi-VN") }} _đ
            </p>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "ProductComponent",
  components: {
    VueSlickCarousel,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  created() {
    this.$store.dispatch("getListProductsByIdCategory", this.id).then(data => {
      this.productData = data;
    });
  },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
      },
      productData: []
    };
  },
  methods: {
    goToInfoProduct(id) {
      this.$router.replace(`/product/${id}`);
    },
    getImageUrl(imageName) {
      return `${this.$config.apiUrl}/${imageName}`;
    },
  },
};
</script>
<style>
.triangle-right {
  width: 0;
  height: 0;
  border-top: 18px solid transparent;
  border-left: 30px solid rgb(220 38 38);
  border-bottom: 18px solid transparent;
}
.box {
  background-color: #ebebeb;
  border-bottom: 2px solid rgb(220 38 38);
}
</style>
