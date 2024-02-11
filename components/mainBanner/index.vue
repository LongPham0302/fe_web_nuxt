<template>
  <div class="grid grid-cols-4 gap-4 mt-2">
    <div class="p-4">
      <ul>
        <li
          v-for="item in getListCategory"
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
    <div class="col-span-3 grid grid-cols-3 gap-4">
      <!-- Side banner left -->

      <!-- Main banner -->
      <div class="col-span-2">
        <img
          :src="getImageUrl(mainBanner)"
          :alt="mainBanner"
          class="w-full h-2/3 rounded-lg"
          style="object-fit: cover"
        />
      </div>

      <!-- Side banners -->
      <div class="flex flex-col space-y-2">
        <div v-for="banner in sideBanners" :key="banner.alt" class="">
          <img
            :src="getImageUrl(banner)"
            :alt="banner"
            class="w-full h-auto rounded-lg"
            style="max-width: 300px; max-height: 200px; object-fit: cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "mainBannerComponents",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getMainBanner");
  },
  computed: {
    ...mapGetters(["getListCategory"]),

    mainBanner() {
      return this.$store.state.banner &&
        this.$store.state.banner[0] &&
        this.$store.state.banner[0].image
        ? this.$store.state.banner[0].image[0]
        : null;
    },
    sideBanners() {
      return this.$store.state.banner &&
        this.$store.state.banner[0] &&
        this.$store.state.banner[0].image
        ? this.$store.state.banner[0].image
        : null;
    },
  },
  methods: {
    getImageUrl(imageName) {
      return `${this.$config.apiUrl}/${imageName}`;
    },
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
