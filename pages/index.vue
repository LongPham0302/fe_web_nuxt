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
        <div
          v-for="(item, index) in getListCategories"
          :key="index"
          class="px-4 py-2 flex items-center"
        >
          <span>{{ item.name }}</span>
          <i class="fas fa-chevron-right ml-2 mt-1"></i>
        </div>
      </div>
    </div>
    <div class="container w-3/4 bg-white mx-auto">
      <div class="grid grid-cols-4 gap-4 mt-2">
        <!-- Sidebar -->
        <sideBar />
        <div class="col-span-3 grid grid-cols-3 gap-4">
          <!-- Main banner -->
          <div class="col-span-2">
            <img
              :src="mainBanner.src"
              :alt="mainBanner.alt"
              class="w-full h-auto"
            />
          </div>
          <!-- Side banners -->
          <div class="flex flex-col space-y-2">
            <div v-for="banner in sideBanners" :key="banner.alt" class="">
              <img :src="banner.src" :alt="banner.alt" class="" />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <ProductHome />
      </div>
    </div>
  </div>
</template>

<script>
import ProductHome from "@pages/product";
import sideBar from "@components/sideBar";
import { mapGetters } from "vuex";

export default {
  name: "MyComponent",
  components: {
    ProductHome,
    sideBar,
  },
  computed: {
    ...mapGetters(["getListCategories"]),
  },
  data() {
    return {
      id: null,
      sidebarItems: [{ id: 1, text: "product", icon: "fas fa-mobile-alt" }],
      mainBanner: {
        id: 1,
        src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/samsung-s23-th1-right.png",
        alt: "Man wearing a watch, promotional banner for HUAWEI WATCH Ultimate",
      },
      sideBanners: [
        {
          id: 1,
          src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/samsung-s23-th1-right.png",
          alt: "Promotional banner for GALAXY S24 SERIES",
        },
        {
          id: 2,
          src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/samsung-s23-th1-right.png",
          alt: "Promotional banner for iPad The 9 with discounted price",
        },
      ],
      imgBanner:
        "https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:80/plain/https://dashboard.cellphones.com.vn/storage/special-cho-tet-new-desk.gif",
    };
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
