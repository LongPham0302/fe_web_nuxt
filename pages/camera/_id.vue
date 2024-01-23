<template>
  <div id="app" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img
          v-if="product.images"
          :src="mainImage"
          :alt="product.title"
          class="fixed-size-image border-red-600"
        />
        <img
          v-else
          src="https://cptudong.vmts.vn/content/images/thumbs/default-image_450.png"
          :alt="product.title"
          class="fixed-size-image border-red-600"
        />
        <div class="grid grid-cols-4 gap-4 mt-4">
          <div
            v-for="(image, index) in product.images"
            :key="index"
            class="relative w-full flex mb-4"
          >
            <img
              :src="`http://localhost:4000/${image}`"
              :alt="product.title"
              @click="changeMainImage(image)"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div>
        <h1 class="text-2xl font-bold mb-3">{{ product.name }}</h1>
        <div class="mb-3">
          <span v-if="product.price" class="text-red-600 font-bold text-xl"
            >Giá Sản Phẩm :{{ product.price.toLocaleString("vi-VN") }} ₫</span
          >
        </div>
        <div class="mb-3">
          <p class="font-semibold">
            {{ product.status ? "Còn hàng" : "Hết hàng" }}
          </p>
        </div>
        <div class="border-t-2 border-red-600 pt-2">
          <h2 class="text-lg font-bold mb-2">
            Danh Mục :
            {{ product.category ? product.category.name : "Không có danh mục" }}
          </h2>
          <ul class="list-disc pl-5">
            <div
              class="bg-red-500 rounded mb-5 p-1 text-white w-1/3"
            >
              <!-- Nội dung -->
              THÔNG SỐ CƠ BẢN :
            </div>
            <li v-for="info in product.basicInfo" :key="info">{{ info }}</li>
          </ul>
        </div>
        <div class="mb-6 bg-blue">
          <div class="border-2 border-white rounded-lg p-4 mb-4">
            <div class="flex items-center mb-2">
              <i class="fas fa-gift text-lg mr-2"></i>
              <h3 class="text-lg font-bold uppercase">Quà tặng/khuyến mãi</h3>
            </div>
            <ul class="list-disc pl-6">
              <li>Lắp đặt tại Ninh Bình và Nam Định</li>
              <li>Lắp đặt trọn gói không phát sinh phụ phí</li>
              <li>Kỹ thuật chuyên nghiệp tận tâm.</li>
            </ul>
          </div>
          <button
            class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mb-2 w-full"
          >
            Mua Ngay
          </button>
          <button
            class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded w-full"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      product: {},
      mainImage: "",
    };
  },
  created() {
    this.$store
      .dispatch("findProductbyId", this.$route.params.id)
      .then((data) => {
        // Xử lý dữ liệu ở đây
        // Lưu dữ liệu vào một biến trong component
        this.product = {
          ...data,
        };
        this.mainImage = `http://localhost:4000/${this.product.images[0]}`;
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Lỗi khi gọi action:", error);
      });
  },

  computed: {
    ...mapGetters([""]),
  },
  methods: {
    changeMainImage(newImage) {
      this.mainImage = `http://localhost:4000/${newImage}`;
      console.log(" this.mainImage", this.mainImage);
    },
  },
};
</script>
<style scoped>
.fixed-size-image {
  width: 400px;
  /* Đặt chiều rộng cố định */
  height: 400px;
  /* Đặt chiều cao cố định */
  object-fit: cover;
  /* Giữ nguyên tỉ lệ khung hình và cắt bớt nếu cần */
}
</style>
