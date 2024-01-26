// middleware/checkCart.js

export default async function ({ store, redirect }) {
    // Kiểm tra giỏ hàng trong store hoặc local storage
    const existingRequestID = localStorage.getItem("requestID");
  
    const cart = await store.dispatch("getListCart", existingRequestID);
    
    // Lấy totalItems trực tiếp từ cart[0]
    const totalItems = cart[0].totalItems;
  
    // Thực hiện các kiểm tra cần thiết
    if (totalItems === 0) {
      // Nếu giỏ hàng trống, chuyển hướng đến trang khác hoặc thực hiện các xử lý khác
      return redirect("/cart");
    }
  }
  