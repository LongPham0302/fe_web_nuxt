// actions.js
import axiosInstance from "@plugins/axios";
import jwt from "jsonwebtoken";

export default {
  async getListCategory({ commit }) {
    try {
      const response = await axiosInstance.get("/categories/");
      if (response.status === 200) {
        commit("SET_LIST_CATEGORIES", response.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  },

  async getCategory({ commit }, id) {
    try {
      const response = await axiosInstance.get("/categories/" + id);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  },

  async getListProductsByIdCategory({ commit }, id) {
    try {
      const response = await axiosInstance.get("/product/category/" + id);
      if (response.status === 200) {
        // commit("SET_LIST_PRODUCT", response.data);
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  },

  async findProductbyId({ commit }, id) {
    const reuslt = await axiosInstance.get(`/product/${id}`);
    return reuslt.data;
  },

  async addToCart({ commit, state }, product) {
    try {
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
    }
  },

  async getListCart({ commit }, id) {
    try {
      const reuslt = await axiosInstance.get(`/cart/${id}`);
      if (reuslt.status === 200) {
        return reuslt.data;
      }
    } catch (error) {}
  },

  async signIn({ commit, state }, data) {
    try {
      const reuslt = await axiosInstance.post("/auth/login", data);
      if (reuslt.status === 201) {
        localStorage.setItem("keyAuth", JSON.stringify(reuslt.data));
      }
    } catch (error) {}
  },

  async signUp({ commit, state }, data) {
    try {
      const reuslt = await axiosInstance.post("/auth/register", data);
      if (reuslt.status === 201) {
        localStorage.setItem("keyAuth", JSON.stringify(reuslt.data));
      }
    } catch (error) {}
  },

  async CreateOrder({ commit, state }, data) {
    try {
      const reuslt = await axiosInstance.post("/orders", data);
      if (reuslt.status === 201) {
        commit("SET_ORDER_STATUS", !state.orderStatus);
        this.$router.push("/");
      }
    } catch (error) {}
  },

  async getListHeader({ commit }) {
    try {
      const reuslt = await axiosInstance.get("/headers/");
      if (reuslt.status === 200) {
        commit("SET_HEADER", reuslt.data[0]);
        return reuslt.data;
      }
    } catch (error) {}
  },

  async paginateProducts({ commit }, data) {
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
    } catch (error) {}
  },

  async getFotter({ commit }) {
    try {
      const result = await axiosInstance.get("/footer");
      if (result.status === 200) {
        return result;
      }
    } catch (error) {}
  },

  async getInfoUser({ commit }) {
    try {
      const infoUser = localStorage.getItem("keyAuth");

      if (infoUser) {
        const { access_token } = JSON.parse(infoUser);
        const privateKey = this.$config.JWT_KEY;

        console.log({ access_token, privateKey });

        const infoUser = await jwt.verify(access_token, privateKey);

        console.log(infoUser);
      }
    } catch (error) {}
  },
};
