<template>
  <div class="bg-red-600 p-2" v-if="getListHeader">
    <div class="flex mx-auto w-2/3 relative">
      <div class="flex items-center space-x-4 text-white">
        <div>
          <img :src="getImageUrl(getListHeader.image)" alt="">
        </div>
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
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderComponent",
  components: {},
  computed: {
    ...mapGetters(["getListHeader"]),
  },
  data() {
    return {
    };
  },
  methods: {
    goToHome() {
      this.$router.replace("/");
    },
    getImageUrl(imageName) {
      return `${this.$config.apiUrl}/${imageName}`;
    },
  },
};
</script>
