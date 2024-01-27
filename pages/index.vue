<!-- components/MyComponent.vue -->
<template>
  <div class="layout min-h-screen">
    <div class="container w-3/4 bg-white mx-auto">
      <div class="grid grid-cols-4 gap-4 p-4">
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
            <div class="flex mt-5">
              <div v-for="banner in sideBanners" :key="banner.alt" class="">
                <img :src="banner.src" :alt="banner.alt" class="" />
              </div>
            </div>
          </div>
          <!-- Side banners -->
          <div class="flex flex-col mb-2">
            <div v-for="banner in sideBanners" :key="banner.alt" class="mb-5">
              <img :src="banner.src" :alt="banner.alt" class="" />
            </div>
          </div>
        </div>
      </div>
      <div class="p-3 mt-5">
        <img :src="imgBanner" alt="" />
      </div>
      <div>
        <ProductHome />
      </div>
    </div>
  </div>
</template>

<script>
import ProductHome from "@pages/product";
import sideBar from "@components/SideBar";
export default {
  name: "MyComponent",
  components: {
    ProductHome,
    sideBar,
  },

  data() {
    return {
      id: null,
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
        {
          id: 3,
          src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/samsung-s23-th1-right.png",
          alt: "Promotional banner for iPad The 9 with discounted price ",
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
  background-color: rgb(255, 244, 214);
  padding-bottom: 50px;
}
</style>
