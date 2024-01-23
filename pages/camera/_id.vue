<template>
  <div id="app" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <img
          v-if="product.images"
          :src="mainImage"
          :alt="product.title"
          class="fixed-size-image border-red-600 rounded-lg"
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
              class="object-cover w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
      <div class="max-w-lg mx-auto">
        <h1 class="text-2xl font-bold mb-4">
          {{ product.name }}
        </h1>
        <div class="mb-4 p-4 border-2 border-dashed border-red-500">
          <p v-if="product.price" class="text-red-600 text-lg font-semibold">
            Giá Khuyến Mãi: {{ product.price.toLocaleString("vi-VN") }} ₫
          </p>
        </div>
        <div class="mb-4">
          <p>
            <span class="font-semibold">Tình trạng:</span>
            <span class="text-red-600">
              {{ product.status ? "Còn hàng" : "Hết hàng" }} : Tại 47 Lương Văn
              Thăng TP Ninh Bình</span
            >
          </p>

          <p>
            <span class="font-semibold">Bảo hành:</span>
            {{ product.guarantee ? product.guarantee : 12 }} tháng
          </p>
        </div>
        <div class="mb-4 p-4 border-2">
          <h2 class="text-lg font-semibold mb-2">THÔNG SỐ CƠ BẢN</h2>
          <ul class="list-disc pl-5">
            <li v-for="(item, index) in product.basicInfo" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="mb-4 p-4 border-2">
          <h2 class="text-lg font-semibold mb-2 flex items-center">
            <i class="fas fa-gift text-red-600 mr-2"></i>
            QUÀ TẶNG/KHUYẾN MÃI
          </h2>
          <ul class="list-disc pl-5">
            <li>Giao Hàng Lắp Đặt Trong 40Km</li>
            <li>Miễn chuyển giao kỹ thuật</li>
            <li>Tặng Phần Mềm Chấm Công 800.000đ</li>
            <li>Giảm 10% Khi Mua Thêm Camera</li>
            <li>Gửi COD Miễn Phí Toàn Quốc</li>
            <li>Dùng Thử 1 Đổi 1 Trong Vòng 7 Ngày</li>
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
