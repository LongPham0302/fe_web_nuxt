<!-- components/MyComponent.vue -->
<template>
  <div class="layout min-h-screen">
    <div class="mt-5">
      <div
        class="flex w-3/4 mx-auto items-center text-white text-sm bg-red-600 rounded"
      >
        <div class="px-4 py-2 flex items-center">
          <i class="fas fa-bars"></i>
          <span class="ml-2"> TẤT CẢ DANH MỤC</span>
        </div>
        <button
          v-for="(item, index) in getListCategory"
          :key="index"
          class="px-4 py-2 flex items-center"
          @click="goToListProduct(item)"
        >
          <span>{{ item.name }}</span>
          <i class="fas fa-chevron-right ml-2 mt-1"></i>
        </button>
      </div>
    </div>
    <div class="container w-3/4 bg-white mx-auto">
        <mainBanner />
      </div>
      <div class="mt-5">
        <ProductHome />
      </div>
    <Loading />
  </div>
</template>

<script>
import ProductHome from "@pages/product";
import { mapGetters } from "vuex";
import mainBanner from "@components/mainBanner";
import Loading from "@pages/loading/index.vue";

export default {
  name: "MyComponent",
  components: {
    ProductHome,
    mainBanner,
    Loading,
  },
  computed: {
    ...mapGetters(["getListCategory"]),
  },
  methods: {
    goToListProduct(item) {
      this.$router.push({
        path: "/productSearch",
        query: { category: item.name },
      });
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

body {
  height: 100%;
}

.layout {
  padding-bottom: 50px;
}
</style>
