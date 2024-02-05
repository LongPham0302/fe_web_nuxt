<template>
  <div class="col-span-3 grid grid-cols-3 gap-4">
    <!-- Main banner -->
    <div class="col-span-2">
      <img :src="mainBanner.src" :alt="mainBanner.alt" class="w-full h-auto" />
    </div>
    <!-- Side banners -->
    <div class="flex flex-col space-y-2">
      <div v-for="banner in sideBanners" :key="banner.alt" class="">
        <img :src="banner.src" :alt="banner.alt" class="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mainBannerComponents",
  data() {
    return {
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
    };
  },
};
</script>
