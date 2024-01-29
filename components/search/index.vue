<template>
  <div id="app" class="w-3/4 mx-auto mt-5" v-if="getListHeader">
    <div
      class="container mx-auto px-4 py-2 flex items-center justify-between"
      style="max-width: 1200px"
    >
      <div class="flex items-center space-x-4">
        <img
          alt="Company logo with red and grey text 'THAIHOC COMPUTER - CAMERA - GAMING'"
          src="https://maytinhninhbinh.com/wp-content/uploads/2022/06/logo.png"
          width="100"
          height="50"
        />
      </div>
      <div class="flex-1 px-4">
        <div class="relative">
          <input
            class="border-2 border-gray-500 w-1/2 pl-4 pr-10 py-1"
            placeholder="Tìm kiếm..."
            type="text"
            v-model="searchTerm"
            @keydown.enter="handleEnterKey"
          />
          <button
            @click="search"
            class="absolute right-0 top-0 mr-1 text-black-600 rounded p-1"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <div class="flex items-center text-red-600">
          <i class="fas fa-phone-alt mr-1"></i>
          <span class="font-medium">{{ getListHeader.contactPhone }}</span>
        </div>
        <div
          class=" border-2 border-red-500 rounded"
        >
          <Cart />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Cart from "@components/cart";

export default {
  name: "Search",
  components: {
    Cart,
  },
  computed: {
    ...mapGetters(["getListHeader"]),
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
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
