// plugins/router-events.js

export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
      // Trước khi chuyển trang, gọi action để bật loading
      app.store.dispatch('loading/startLoading');
  
      next();
    });
  
    app.router.afterEach(() => {
      // Sau khi chuyển trang, gọi action để tắt loading
      app.store.dispatch('loading/stopLoading');
    });
  };
  