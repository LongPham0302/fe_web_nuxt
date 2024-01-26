<template>
  <div class="bg-red-600" v-if="getListHeader">
    <div class="flex items-center justify-between px-4 py-2">
      <div class="flex items-center">
        <img
          alt="Company logo placeholder"
          class="mr-2"
          height="50"
          src="https://maytinhninhbinh.com/wp-content/uploads/2022/06/logo.png"
          width="100"
        />
        <span class="text-white text-sm cursor-pointer" @click="goToHome">
          {{ getListHeader.companyName }}
        </span>
      </div>
      <div class="flex items-center">
        <div class="relative">
          <input
            class="h-10 pl-4 pr-10 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Tìm kiếm..."
            type="text"
          />
          <div class="absolute top-2 right-2">
            <button class="h-6 w-6 text-white">
              <i class="fas fa-search"> </i>
            </button>
          </div>
        </div>
        <div class="flex items-center ml-4">
          <i class="fas fa-phone-alt text-white text-sm mr-1"> </i>
          <span class="text-white text-sm">
            {{ getListHeader.contactPhone }}
          </span>
        </div>
        <div class="flex items-center ml-4">
          <i class="fas fa-clock text-white text-sm mr-1"> </i>
          <span class="text-white text-sm">
            {{ getListHeader.operatingHours }}
          </span>
        </div>
      </div>
      <div class="flex items-center">
        <Cart />
      </div>
    </div>
  </div>
</template>
<script>
import Cart from "@components/cart";
import { mapGetters } from "vuex";

export default {
  name: "HeaderComponemt",
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
    };
  },
  methods: {
    goToHome() {
      this.$router.replace("/");
    },
  },
};
</script>
