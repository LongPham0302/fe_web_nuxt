<template>
  <div class="bg-red-600 p-2" v-if="getListHeader">
    <div class="flex mx-auto w-2/3 relative">
      <div class="flex items-center space-x-4 text-white">
        <div class="text-sm font-bold">
          {{ getListHeader.companyName }}
        </div>
        <div class="flex items-center">
          <i class="fas fa-phone-alt mr-2 header-icon"></i>
          <span class="text-sm">{{ getListHeader.contactPhone }}</span>
        </div>
        <div class="text-sm">
          {{ getListHeader.operatingHours }}
        </div>
      </div>
      <div class="flex items-center ml-5">
        <div class="relative flex m-auto">
          <input
            class="w-full pl-5 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Tìm kiếm..."
            type="text"
            v-model="searchTerm"
            @keydown.enter="handleEnterKey"
          />
        </div>
      </div>
      <div class="absolute right-0">
        <Cart />
      </div>
    </div>
  </div>
</template>
<script>
import Cart from "@components/cart";
import { mapGetters } from "vuex";

export default {
  name: "HeaderComponent",
  components: {
    Cart,
  },
  created() {
    this.$store
      .dispatch("getListHeader")
      .then((result) => (this.listHeader = result[0]));
  },
  computed: {
    ...mapGetters(["getListHeader"]),
  },
  data() {
    return {
      listHeader: null,
      searchTerm: "",
    };
  },
  methods: {
    goToHome() {
      this.$router.replace("/");
    },
    handleEnterKey() {
      // Xử lý khi nhấn Enter
      this.search();
    },
    search() {
      // Xử lý tìm kiếm
      this.$router.push({
        path: "/productSearch",
        query: { searchTerm: this.searchTerm },
      });
      // Gọi hàm hoặc thực hiện logic tìm kiếm ở đây
    },
  },
};
</script>
