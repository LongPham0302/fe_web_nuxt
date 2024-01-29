<template>
  <div class="flex cursor-pointer p-2" @click="goToCart">
    <span class="text-red-600 text-sm font-bold">
      Giỏ Hàng / {{ loading ? "Đang tải..." : countProduct }} đ
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Cart",
  created() {
    this.loadData();
  },
  computed: {
    ...mapState(["orderStatus"]),
  },
  watch: {
    orderStatus() {
      this.loadData();
    },
  },
  data() {
    return {
      countProduct: 0,
      loading: false,
    };
  },
  methods: {
    loadData() {
      this.loading = true;
      const existingRequestID = localStorage.getItem("requestID");

      this.$store.dispatch("getListCart", existingRequestID).then((res) => {
        this.countProduct = res[0].totalPrice;
        this.loading = false;
      });
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>
