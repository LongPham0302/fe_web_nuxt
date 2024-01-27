<!-- components/CartItem.vue -->

<template>
    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div class="flex w-2/5">
        <div class="w-20">
          <img :src="getImageUrl(item.image)" :alt="'Image of ' + item.name" class="h-24" />
        </div>
        <div class="flex flex-col justify-between ml-4 flex-grow">
          <span class="font-bold text-sm">{{ item.name }}</span>
          <span class="text-gray-500 text-xs">{{ item.price.toLocaleString("vi-VN") }} đ</span>
          <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
        </div>
      </div>
      <div class="flex justify-center w-1/5">
        <input class="border-solid border-gray-300 border py-1 px-3 bg-white" v-model="item.count" readonly disabled />
      </div>
      <span class="text-center w-1/5 font-semibold text-sm">{{ item.price.toLocaleString("vi-VN") }}_Đ</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    methods: {
      getImageUrl(imageName) {
        return `${this.$config.apiUrl}/${imageName}`;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Thêm các lớp CSS nếu cần thiết */
  </style>
  