export default {
  SET_LIST_CATEGORIES(state, newValue) {
    state.categories = [...newValue];
  },
  SET_ORDER_STATUS(state, status) {
    state.orderStatus = status;
  },
  SET_HEADER(state, newValue) {
    state.listHeader = newValue;
  },
  SET_LOADING(state, payload) {
    state.loading = payload; // Cập nhật trạng thái loading
  },
};
