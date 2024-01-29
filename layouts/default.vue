<template>
  <div>
    <Header />
    <Search />
    <nuxt />
    <Fotter />
  </div>
</template>
<script>
import Fotter from "@components/footer";
import Header from "@components/header";
import Search from "@components/search";

export default {
  name: "Footer",
  components: {
    Fotter,
    Header,
    Search,
  },

  created() {
    this.$store.dispatch("getListHeader");
    // Kiểm tra xem Local Storage có chứa khóa 'requestID' hay không
    if (!localStorage.getItem("requestID")) {
      // Nếu không có, thực hiện lấy địa chỉ IP và lưu vào Local Storage
      fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => {
          const ipAddress = data.ip;
          // Lưu địa chỉ IP vào Local Storage với khóa 'requestID'
          localStorage.setItem("requestID", ipAddress);
          // Gọi hàm hoặc thực hiện các bước tiếp theo sau khi lưu vào Local Storage
          // ...
        })
        .catch((error) => console.error("Lỗi:", error));
    } else {
      // Nếu khóa 'requestID' đã tồn tại trong Local Storage, bạn có thể thực hiện các bước khác
      const existingRequestID = localStorage.getItem("requestID");

      // Gọi hàm hoặc thực hiện các bước tiếp theo sau khi kiểm tra Local Storage
      // ...
    }
  },
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
