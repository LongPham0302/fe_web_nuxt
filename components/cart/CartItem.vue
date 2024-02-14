<!-- components/CartItem.vue -->

<template>
  <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
    <div class="flex">
      <img
        :src="getImageUrl(img)"
        :alt="'Image of ' + item.name"
        class="h-24"
      />
      <div class="flex flex-col justify-between ml-4 flex-grow">
        <span
          class="font-bold text-sm"
          style="max-width: 300px; padding-right: 20px"
          >{{ item.name }}</span
        >
        <span class="text-gray-500 text-xs"
          >{{ item.price.toLocaleString("vi-VN") }} đ</span
        >
        <button
          href="#"
          class="font-semibold hover:text-red-500 text-gray-500 text-xs"
          @click="removeItem(item)"
        >
          Remove
        </button>
      </div>
    </div>
    <div class="flex justify-center w-1/5">
      <input
        class="border-solid border-gray-300 border py-1 px-3 bg-white"
        v-model="item.count"
        @blur="updateCart(item)"
      />
    </div>
    <span class="text-center w-1/5 font-semibold text-sm"
      >{{ item.price.toLocaleString("vi-VN") }}_Đ</span
    >
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    img: {
      type: String,
    },
  },
  methods: {
    getImageUrl(imageName) {
      return `${this.$config.apiUrl}/${imageName}`;
    },
    updateCart(item) {
      let data = {
        _id: item.id,
        count: Number(item.count),
        name: item.name,
        price: item.price,
        images: [this.img],
        updateCart: true,
      };
      this.$store.dispatch("addToCart", data);
    },
    removeItem(item) {
      let data = {
        name: item.name,
      };
      this.$store.dispatch("DeleteCart", data);
    },
  },
};
</script>

<style scoped>
/* Thêm các lớp CSS nếu cần thiết */
</style>
