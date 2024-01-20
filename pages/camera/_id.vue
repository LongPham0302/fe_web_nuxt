<template>
    <div id="app" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <img :src="product.mainImage" :alt="product.title" class="fixed-size-image border-red-600">
                <div class="grid grid-cols-4 gap-4 mt-4">
                    <div v-for="(image, index) in product.images" :key="index" class="relative w-full flex mb-4">
                        <img :src="image" :alt="product.title" @click="changeMainImage(image)"
                            class="object-cover w-full h-full">
                    </div>
                </div>

            </div>
            <div>
                <h1 class="text-2xl font-bold mb-3">{{ product.title }}</h1>
                <div class="mb-3">
                    <span class="text-red-600 font-bold text-xl">{{ product.promotionPrice }}</span>
                </div>
                <div class="mb-3">
                    <p class="font-semibold">{{ product.status }}</p>
                    <p class="font-semibold">{{ product.warranty }}</p>
                </div>
                <div class="border-t-2 border-red-600 pt-2">
                    <h2 class="text-lg font-bold mb-2">{{ product.basicInfoTitle }}</h2>
                    <ul class="list-disc pl-5">
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
                    <button class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mb-2 w-full">Mua
                        Ngay</button>
                    <button class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded w-full">Thêm vào giỏ
                        hàng</button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            product: {
                title: 'Camera Wifi Ezviz C6N 1080P – Camera wifi quay quét 360 – Rẻ Hơn Hoàn Tiền',
                promotionPrice: 'Giá Khuyến Mãi: 490.000₫',
                status: 'Tình trạng: Còn hàng: Tại 47 Lương Văn Thắng TP Ninh Bình',
                warranty: 'Bảo hành: 12 tháng',
                basicInfoTitle: 'THÔNG SỐ CƠ BẢN',
                basicInfo: [
                    'Phù hợp lắp đặt TRONG NHÀ',
                    'Giám sát từ xa qua điện thoại.',
                    'Hình ảnh sắc nét full HD – 1080p.',
                    'Điều Khiển Xoay 360 Độ, đàm Thoại 2 Chiều.',
                    'Báo động khi có người đột nhập.',
                    'Chế độ xoay theo người di chuyển.',
                    'Đèn hồng ngoại quay đêm lên đến 10 m.',
                    'Kết nối Wifi không dây hoặc dây Lan.',
                    'Hỗ trợ thẻ cắm thẻ nhớ (max 256G).',
                    'Không tốn điện hàng tháng (5v).'
                ],
                mainImage: 'https://placehold.co/500x500.png',
                images: [
                    'https://placehold.co/100x100.png',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuUX2GB066ep8gISHNdURbUz1LVJ1nsWGL3GjGwKEPeQ&s',
                    'https://baodongnai.com.vn/file/e7837c02876411cd0187645a2551379f/dataimages/202306/original/images2532326_18_thumb.jpg',
                    'https://placehold.co/100x100.png'
                ],
                vouchers: [
                    'Lắp đặt tại Ninh Bình và Nam Định',
                    'Lắp đặt trọn gói không phát sinh phụ phí',
                    'Kỹ thuật chuyên nghiệp tận tâm.'
                ]
            }
        }
    },
    methods: {
        changeMainImage(newImage) {
            this.product.mainImage = newImage;
        }
    }
}
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