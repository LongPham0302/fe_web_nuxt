<template>
  <div class="col-span-3 grid grid-cols-3 gap-4">
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
</template>
<script>
export default {
  name: "mainBannerComponents",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getMainBanner");
  },
  computed: {
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
  },
};
</script>
