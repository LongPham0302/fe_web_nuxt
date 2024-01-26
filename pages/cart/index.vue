<template>
  <div id="app" class="container mx-auto mt-10 p-5">
    <div
      class="flex justify-between"
      v-if="cartItems && cartItems.items.length > 0"
    >
      <!-- Nếu có sản phẩm trong giỏ hàng -->
      <div class="w-2/3">
        <div
          v-for="(item, index) in cartItems.items"
          :key="index"
          class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
        >
          <div class="flex w-2/5">
            <div class="w-20">
              <img
                :src="getImageUrl(item.image)"
                :alt="'Image of ' + item.name"
                class="h-24"
              />
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">{{ item.name }}</span>
              <span class="text-gray-500 text-xs"
                >{{ item.price.toLocaleString("vi-VN") }} đ</span
              >
              <a
                href="#"
                class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >Remove</a
              >
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            <input
              class="border-solid border-gray-300 border py-1 px-3 bg-white"
              v-model="item.count"
              readonly
              disabled
            />
          </div>
          <span class="text-center w-1/5 font-semibold text-sm"
            >{{ item.price.toLocaleString("vi-VN") }}_Đ</span
          >
        </div>
      </div>
      <div id="summary" class="w-1/4 px-8 py-10">
        <div>
          Thanh Toán số tiền là :
          <span class="font-bold">{{
            cartItems.totalPrice.toLocaleString("vi-VN")
          }}</span>
        </div>
        <div class="border-t mt-8">
          <button
            class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
            @click="goToOrder"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <!-- Nếu giỏ hàng trống -->
      <p>Bạn chưa mua sản phẩm nào.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters(["getListCart"]),
  },
  created() {
    const existingRequestID = localStorage.getItem("requestID");
    this.$store.dispatch("getListCart", existingRequestID).then((res) => {
      this.cartItems = res[0];
    });
  },
  data() {
    return {
      cartItems: null,
    };
  },
  methods: {
    getImageUrl(imageName) {
      return `${this.$config.apiUrl}/${imageName}`;
    },
    goToOrder() {
      this.$router.push("/order");
    },
  },
};
</script>
