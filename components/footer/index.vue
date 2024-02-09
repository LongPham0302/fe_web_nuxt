<template>
  <div class="bg-white text-gray-700" id="footer" v-if="callApi">
    <div class="container mx-auto px-4 py-8">
      <div class="flex justify-center space-x-8">
        <!-- Support Column -->
        <div>
          <h3 class="font-bold text-lg mb-3">Tổng đài hỗ trợ miễn phí</h3>
          <p class="mb-2" v-for="(item, index) in menu_1" :key="index">
            {{ item }}
          </p>
        </div>
        <!-- Policy Column -->
        <div>
          <h3 class="font-bold text-lg mb-3">Thông tin và chính sách</h3>
          <p class="mb-2" v-for="(item, index) in menu_2" :key="index">
            {{ item }}
          </p>
        </div>
        <!-- Services Column -->
        <div>
          <h3 class="font-bold text-lg mb-3">Dịch vụ và thông tin khác</h3>
          <p class="mb-2" v-for="(item, index) in menu_3" :key="index">
            {{ item }}
          </p>
        </div>
        <!-- Connect Column -->
        <button v-if="showScrollButton" @click="scrollToTop" class="fixed bottom-20 right-0 z-50 bg-blue-500 text-white px-6 py-3 rounded-full text-lg shadow-lg cursor-pointer transition-colors duration-300">Lên đầu trang</button>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Fotter",
  data() {
    return {
      menu_1: null,
      menu_2: null,
      menu_3: null,
      callApi: false,
      showScrollButton:false
    };
  },
  created() {
    this.$store.dispatch("getFotter").then((res) => {
      this.callApi = false;
      (this.menu_1 = res.data[0].companyLocation),
        (this.menu_2 = res.data[0].policyRegulations),
        (this.menu_3 = res.data[0].customerSupport),
        (this.callApi = true);
    });
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      this.showScrollButton = window.scrollY >600;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style>
#footer {
  background-color: #34495e;
  color: white;
}
</style>
