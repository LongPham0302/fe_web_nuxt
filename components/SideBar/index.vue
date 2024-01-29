<template>
  <div class="p-4">
    <ul>
      <li
        v-for="item in getListCategories"
        :key="item.id"
        class="mb-2 cursor-pointer"
        @click="goToProductCategory(item.name)"
      >
        <div class="flex items-cnter relative text-red-600">
          {{ item.name }}
          <svg
            width="3"
            height="24"
            viewBox="0 -9 3 24"
            class="absolute end-5 mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
          >
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Sidebar", // Thêm trường name
  created() {
    this.$store.dispatch("getlistCategories");
  },
  computed: {
    ...mapGetters(["getListCategories"]),
  },
  data() {
    return {};
  },
  methods: {
    goToProductCategory(nameCategory) {
      // Xử lý tìm kiếm
      this.$router.push({
        path: "/productSearch",
        query: { category: nameCategory },
      });
      // Gọi hàm hoặc thực hiện logic tìm kiếm ở đây
    },
  },
};
</script>
