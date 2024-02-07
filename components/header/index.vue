<template>
  <div class="bg-red-600 p-2">
    <div class=" flex justify-between w-3/4 mx-auto px-3" v-if="getListHeader">
      <div class="flex">
        <div class="flex items-center space-x-4 text-white">
          <div class="text-sm font-bold">
            {{ convertStr(getListHeader.companyName) }}
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
      <div class="flex gap-4">
        <button type="button" class="px-2 py-1 border border-white text-white rounded text-xxs font-bold" @click="replaceSignIn">Đăng nhập</button>
        <button type="button" class="px-2 py-1 border border-white text-white rounded text-xxs font-bold" @click="replaceSignUp">Đăng kí</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { convertStringUpperCase } from "../../utils/strToUpperCase";

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
    replaceSignIn() {
      this.$router.replace("/signin");
    },
    replaceSignUp() {
      this.$router.replace("/signup");
    },
    convertStr(str) {
      return convertStringUpperCase(str);
    },
    goToHome() {
      this.$router.replace("/");
    },
  },
};
</script>
