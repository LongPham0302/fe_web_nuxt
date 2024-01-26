<template>
  <div class="flex items-center cursor-pointer" @click="goToCart">
    <i class="fas fa-shopping-cart text-white text-sm mr-1"></i>
    <span class="text-white text-sm">
      Giỏ hàng / {{ loading ? "Đang tải..." : countProduct }} Sản Phẩm
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
        this.countProduct = res[0].totalItems;
        this.loading = false;
      });
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>
