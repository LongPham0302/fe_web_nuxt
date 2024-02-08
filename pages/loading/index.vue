<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
    v-if="$store.state.loading"
  >
    <!-- Nền mờ -->
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <!-- Biểu tượng loading vòng tròn -->
    <div
      class="w-20 h-20 rounded-full border-red-600 border-8 border-dashed animate-spin"
    ></div>
  </div>
</template>

<style scoped></style>
