// actions.js
import axiosInstance from "@plugins/axios";

export default {
  async getListCategory({ commit }) {
    try {
      commit("SET_LOADING", true); // Bật trạng thái loading trước khi gọi API
      const response = await axiosInstance.get("/categories/");
      if (response.status === 200) {
        commit("SET_LIST_CATEGORIES", response.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      commit("SET_LOADING", false); // Tắt trạng thái loading sau khi nhận được kết quả từ API
    }
  },

  async getCategory({ commit }, id) {
    try {
      commit("SET_LOADING", true); // Bật trạng thái loading trước khi gọi API
      const response = await axiosInstance.get("/categories/" + id);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      commit("SET_LOADING", false); // Tắt trạng thái loading sau khi nhận được kết quả từ API
    }
  },

  async getListProductsByIdCategory({ commit }, id) {
    try {
      commit("SET_LOADING", true); // Bật trạng thái loading trước khi gọi API
      const response = await axiosInstance.get("/product/category/" + id);
      if (response.status === 200) {
        // commit("SET_LIST_PRODUCT", response.data);
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      commit("SET_LOADING", false); // Tắt trạng thái loading sau khi nhận được kết quả từ API
    }
  },

  async findProductbyId({ commit }, id) {
    try {
      commit("SET_LOADING", true); // Bật trạng thái loading trước khi gọi API
      const reuslt = await axiosInstance.get(`/product/${id}`);
      return reuslt.data;
    } catch (error) {
      console.log(error);
    } finally {
      commit("SET_LOADING", false); // Tắt trạng thái loading sau khi nhận được kết quả từ API
    }
  },

  async addToCart({ commit, state }, product) {
    try {
      commit("SET_LOADING", true); // Bật trạng thái loading trước khi gọi API
      const existingRequestID = localStorage.getItem("requestID");

      const cartItem = {
        user: existingRequestID, // hoặc nếu bạn có thông tin user từ đâu khác, sử dụng thông tin đó
        items: [
          {
            id: product._id,
            name: product.name,
            price: product.price,
            count: 1,
          },
        ],
        image: product.images[0],
      };

      const response = await axiosInstance.post("/cart", cartItem);
      if (response.status === 201) {
        commit("SET_ORDER_STATUS", !state.orderStatus);
      }
      // Bạn có thể cần cập nhật mutation để xử lý response.data
    } catch (error) {
      console.error(error);
    } finally {
      commit("SET_LOADING", false); // Tắt trạng thái loading sau khi nhận được kết quả từ API
    }
  },

  async getListCart({ commit }, id) {
    try {
      commit("SET_LOADING", true); // Bật trạng thái loading trước khi gọi API
      const reuslt = await axiosInstance.get(`/cart/${id}`);
      if (reuslt.status === 200) {
        return reuslt.data;
      }
    } catch (error) {
    } finally {
      commit("SET_LOADING", false); // Tắt trạng thái loading sau khi nhận được kết quả từ API
    }
  },

  async logIn({ commit, state }, data) {
    try {
      const reuslt = await axiosInstance.post("/auth/login", data);
      if (reuslt.status === 201) {
        localStorage.setItem("key", JSON.stringify(reuslt.data));
      }
    } catch (error) {}
  },

  async CreateOrder({ commit, state }, data) {
    try {
      commit("SET_LOADING", true); // Bật trạng thái loading trước khi gọi API
      const reuslt = await axiosInstance.post("/orders", data);
      if (reuslt.status === 201) {
        commit("SET_ORDER_STATUS", !state.orderStatus);
        this.$router.push("/");
      }
    } catch (error) {
    } finally {
      commit("SET_LOADING", false); // Tắt trạng thái loading sau khi nhận được kết quả từ API
    }
  },

  async getListHeader({ commit }) {
    try {
      commit("SET_LOADING", true); // Bật trạng thái loading trước khi gọi API
      const reuslt = await axiosInstance.get("/headers/");
      if (reuslt.status === 200) {
        commit("SET_HEADER", reuslt.data[0]);
        return reuslt.data;
      }
    } catch (error) {
    } finally {
      commit("SET_LOADING", false); // Tắt trạng thái loading sau khi nhận được kết quả từ API
    }
  },

  async paginateProducts({ commit }, data) {
    commit("SET_LOADING", true); // Bật trạng thái loading trước khi gọi API
    const { page, pageSize, searchTerm, minPrice, maxPrice, category, sort } =
      data;
    try {
      const result = await axiosInstance.get("/product", {
        params: {
          searchTerm: searchTerm,
          page: page,
          pageSize: pageSize,
          minPrice: minPrice,
          maxPrice: maxPrice,
          category: category,
          sort: sort,
        },
      });
      if (result.status === 200) {
        return result;
      }
    } catch (error) {
    } finally {
      commit("SET_LOADING", false); // Tắt trạng thái loading sau khi nhận được kết quả từ API
    }
  },

  async getFotter({ commit }) {
    try {
      commit("SET_LOADING", true); // Bật trạng thái loading trước khi gọi API
      const result = await axiosInstance.get("/footer");
      if (result.status === 200) {
        return result;
      }
    } catch (error) {
    } finally {
      commit("SET_LOADING", false); // Tắt trạng thái loading sau khi nhận được kết quả từ API
    }
  },

  //banner
  async getMainBanner({ commit }) {
    try {
      const result = await axiosInstance.get("/banners");
      if (result.status === 200) {
        commit("SET_MAIN_BANNER", result.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
