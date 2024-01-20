<!-- components/MyComponent.vue -->
<template>
  <div class="layout min-h-screen">
    <div id="topBarHeader" class="container	flex justify-center">
      <p class="text">
        Chợ Tết 'Ant' - Deal siêu hot từ 10K!</p>
    </div>
    <div class="bg-red-600">
      <div class="max-w-screen-xl mx-auto py-2 px-4 flex items-center justify-between">
        <div class="flex items-center">
          <img alt="Company logo placeholder" class="mr-4" height="40"
            src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Desktop-Logo-tet2024.gif" width="100" />
          <div class="text-white text-sm">
            <i class="fas fa-shield-alt mr-1">
            </i>
            Chính sách Bảo hành - Đổi trả tốt nhất
          </div>
        </div>
        <div class="flex items-center">
          <div class="text-white text-sm mr-6">
            <i class="fas fa-map-marker-alt mr-1">
            </i>
            Xem giá tại
            <span class="font-semibold">
              Hồ Chí Minh
            </span>
          </div>
          <div class="flex items-center  px-4 py-2 rounded-full">
            <i class="fas fa-search text-gray-400 mr-2">
            </i>
            <input class="outline-none text-sm" placeholder="Bạn cần tìm gì?" type="text" />
          </div>
          <div class="text-white text-sm ml-6">
            <i class="fas fa-phone-alt mr-1">
            </i>
            Gọi mua hàng
            <span class="font-semibold">
              1800.2097
            </span>
          </div>
        </div>
        <div class="flex items-center">
          <div class="text-white text-sm mr-6">
            <i class="fas fa-store mr-1">
            </i>
            Cửa hàng
            <span class="font-semibold">
              gần bạn
            </span>
          </div>
          <div class="text-white text-sm mr-6">
            <i class="fas fa-search mr-1">
            </i>
            Tra cứu
            <span class="font-semibold">
              đơn hàng
            </span>
          </div>
          <div class="text-white text-sm mr-6">
            <i class="fas fa-shopping-cart mr-1">
            </i>
            Giỏ
            <span class="font-semibold">
              hàng
            </span>
          </div>
          <div class="text-white text-sm">
            <i class="fas fa-user mr-1">
            </i>
            Đăng nhập
          </div>
        </div>
      </div>
    </div>
    <div class="container w-3/4 bg-white  mx-auto">
      <div class="grid grid-cols-4 gap-4 p-4">
        <!-- Sidebar -->
        <div class="p-4">
          <ul>
            <li v-for="item in sidebarItems" :key="item.id" class="mb-2">
              <a href="#" class="flex items-center relative ">
                <i :class="item.icon" class="mr-2"></i>
                {{ item.text }}
                <svg width="3" height="24" viewBox="0 -9 3 24"
                  class="absolute  end-5 mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500">
                  <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                  </path>
                </svg> </a>
            </li>
          </ul>
        </div>
        <div class="col-span-3 grid grid-cols-3 gap-4">
          <!-- Main banner -->
          <div class="col-span-2">
            <img :src="mainBanner.src" :alt="mainBanner.alt" class="w-full h-auto">
            <div class="flex mt-5">
              <div v-for="banner in sideBanners" :key="banner.alt" class="">
                <img :src="banner.src" :alt="banner.alt" class="">
              </div>
            </div>
          </div>
          <!-- Side banners -->
          <div class="flex flex-col mb-2">
            <div v-for="banner in sideBanners" :key="banner.alt" class="mb-5">
              <img :src="banner.src" :alt="banner.alt" class="">
            </div>
          </div>
        </div>
      </div>
      <div class="p-3 mt-5">
        <img :src="imgBanner" alt="">
      </div>
      <Slide />
    </div>
  </div>
</template>

<script>
import Slide from '../components/slide';

export default {
  name: 'MyComponent',
  components: {
    Slide
  },
  data() {
    return {
      sidebarItems: [
        { id: 1, text: 'Điện thoại, Tablet', icon: 'fas fa-mobile-alt' },
        { id: 2, text: 'Laptop', icon: 'fas fa-laptop' },
        { id: 3, text: 'Âm thanh', icon: 'fas fa-volume-up' },
        { id: 4, text: 'Đồng hồ, Camera', icon: 'fas fa-camera' },
        { id: 5, text: 'Gia dụng, Smarthome', icon: 'fas fa-blender' },
        { id: 6, text: 'Phụ kiện', icon: 'fas fa-headphones' },
        { id: 7, text: 'PC, Màn hình', icon: 'fas fa-desktop' },
        { id: 8, text: 'Tivi', icon: 'fas fa-tv' },
        { id: 9, text: 'Thu cũ đổi mới', icon: 'fas fa-sync-alt' },
        { id: 10, text: 'Hàng cũ', icon: 'fas fa-box-open' },
        { id: 11, text: 'Khuyến mãi', icon: 'fas fa-tags' },
        { id: 12, text: 'Tin công nghệ', icon: 'fas fa-newspaper' },
      ],
      mainBanner: {
        id: 1,
        src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/samsung-s23-th1-right.png',
        alt: 'Man wearing a watch, promotional banner for HUAWEI WATCH Ultimate'
      },
      sideBanners: [
        {
          id: 1,
          src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/samsung-s23-th1-right.png',
          alt: 'Promotional banner for GALAXY S24 SERIES'
        },
        {
          id: 2,
          src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/samsung-s23-th1-right.png',
          alt: 'Promotional banner for iPad The 9 with discounted price'
        },
        {
          src: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/samsung-s23-th1-right.png',
          alt: 'Promotional banner for iPad The 9 with discounted price'
        }
      ],
      imgBanner: "https://cdn2.cellphones.com.vn/insecure/rs:fill:1200:75/q:80/plain/https://dashboard.cellphones.com.vn/storage/special-cho-tet-new-desk.gif"
    }
  },
}
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
}
</style>
