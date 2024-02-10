<template>
  <div id="app" class="container mx-auto mt-10 p-10 mb-5" v-if="cartItems">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
        <div class="mb-6">
          <h2 class="text-2xl font-bold mb-4">THÔNG TIN THANH TOÁN</h2>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Họ và tên *
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nhập họ và tên của bạn"
              v-model="name"
              required="true"
            />
            <span v-if="!name" class="text-red-500 text-sm"
              >Vui lòng nhập họ và tên</span
            >
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="address"
            >
              Địa chỉ *
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Nhập địa chỉ nhận hàng"
              v-model="address"
              required="true"
            />
            <span v-if="!address" class="text-red-500 text-sm"
              >Vui lòng nhập địa chỉ</span
            >
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="phone"
            >
              Số điện thoại *
            </label>
            <input
              @blur="checkPhoneNumber"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Nhập số điện thoại của bạn"
              required="true"
              v-model="phone"
            />
            <span v-if="!phone" class="text-red-500 text-sm"
              >Vui lòng nhập số điện thoại</span
            >
            <span v-if="!isPhoneNumberValid" class="text-red-500 text-sm"
              >Số điện thoại không hợp lệ</span
            >
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4">THÔNG TIN BỔ SUNG</h2>
          <div>
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="order-notes"
            >
              Ghi chú đơn hàng (tùy chọn)
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="order-notes"
              placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay địa điểm giao hàng chi tiết hơn."
              v-model="orderNotes"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 px-4">
        <div class="border p-6">
          <h2 class="text-2xl font-bold mb-4">ĐƠN HÀNG CỦA BAN</h2>
          <div class="mb-4">
            <div class="flex justify-between mb-3">
              <span class="text-gray-600">SẢN PHẨM</span>
              <span class="text-gray-600">TẠM TÍNH</span>
            </div>
            <div
              class="flex justify-between mb-3"
              v-for="(item, index) in cartItems.items"
              :key="index"
            >
              <span class="w-2/3"
                >{{ item.name }} x <b>{{ item.count }}</b></span
              >
              <span>{{ item.price.toLocaleString("vi-VN") }} đ</span>
            </div>
          </div>
          <div class="flex justify-between mb-4">
            <span class="text-gray-600">Tạm tính</span>
            <span>{{ cartItems.totalPrice.toLocaleString("vi-VN") }} đ</span>
          </div>
          <div class="flex justify-between mb-4">
            <span class="text-gray-600 font-bold">Tổng</span>
            <span class="font-bold"
              >{{ cartItems.totalPrice.toLocaleString("vi-VN") }} ₫</span
            >
          </div>
          <div class="mb-4">
            <label class="inline-flex items-center">
              <input
                type="radio"
                class="form-radio"
                name="payment-method"
                checked
                v-model="transferType"
                value="bank-transfer"
              />

              <span class="ml-2">Chuyển khoản ngân hàng</span>
            </label>
            <p class="text-gray-600 text-sm ml-6 mb-2">
              Thực hiện thanh toán vào ngày tài khoản ngân hàng của chúng tôi.
              Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh
              toán. Đơn hàng sẽ được giao sau khi tiền đã chuyển.
            </p>
          </div>
          <div class="mb-6">
            <label class="inline-flex items-center">
              <input
                v-model="transferType"
                value="cash-on-delivery"
                type="radio"
                class="form-radio"
                name="payment-method"
              />
              <span class="ml-2">Trả tiền mặt khi nhận hàng</span>
            </label>
            <br />
            <span v-if="!transferType" class="text-red-500 text-sm"
              >Vui lòng chọn phương thức thanh toán</span
            >
          </div>

          <button
            @click="HandleOrder"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            ĐẶT HÀNG
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrderPage",
  middleware: "checkCart",
  created() {
    const existingRequestID = localStorage.getItem("requestID");

    this.$store.dispatch("getListCart", existingRequestID).then((res) => {
      this.cartItems = res[0];
    });
  },
  data() {
    return {
      cartItems: null,
      name: "",
      address: "",
      phone: "",
      orderNotes: "",
      transferType: null,
      isPhoneNumberValid: true,
    };
  },
  methods: {
    async HandleOrder() {
      if (!this.name || !this.address || !this.phone || !this.transferType) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
      }
      const existingRequestID = localStorage.getItem("requestID");
      const orderData = {
        user: existingRequestID,
        items: this.cartItems.items,
        shippingAddress: this.address,
        phoneNumber: this.phone,
        totalItems: this.cartItems.totalItems,
        totalPrice: this.cartItems.totalPrice,
        notes: this.orderNotes,
        transferType: this.transferType,
        nameUser: this.name,
      };
      await this.$store.dispatch("CreateOrder", orderData);
      this.clear();
    },
    clear() {
      // Đặt giá trị của các trường về rỗng
      this.name = "";
      this.address = "";
      this.phone = "";
      this.orderNotes = "";
      this.transferType = null;
    },
    checkPhoneNumber() {
      // Biểu thức chính quy kiểm tra số điện thoại Việt Nam
      const phoneNumberPattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

      // Kiểm tra số điện thoại nhập vào với biểu thức chính quy
      if (!phoneNumberPattern.test(this.phone)) {
        this.isPhoneNumberValid = false;
      } else {
        this.isPhoneNumberValid = true;
      }
    },
  },
};
</script>
