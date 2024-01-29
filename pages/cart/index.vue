<template>
  <div id="app" class="container mx-auto mt-10 p-5">
    <div v-if="hasCartItems">
      <div class="flex justify-between">
        <div class="w-2/3">
          <CartItem
            v-for="(item, index) in cartItems.items"
            :key="index"
            :item="item"
            :img="cartItems.img"
          />
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
    </div>
    <div v-else>
      <p>Bạn chưa mua sản phẩm nào.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "@/components/cart/CartItem"; // Đổi đường dẫn tùy vào cấu trúc dự án của bạn

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters(["getListCart"]),
    hasCartItems() {
      return this.cartItems && this.cartItems.items.length > 0;
    },
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
    goToOrder() {
      this.$router.push("/order");
    },
  },
};
</script>
