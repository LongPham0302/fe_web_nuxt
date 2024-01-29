<template>
  <div class="flex-col">
    <div
      style="margin-top: 50px"
      v-for="(item, index) in getListCategories"
      :key="index"
    >
      <ProductComponent :id="item._id" :name="item.name" />
    </div>
  </div>
</template>

<script>
import ProductComponent from "@components/client/product";
import { mapGetters } from "vuex";

export default {
  name: "CameraHome",
  components: {
    ProductComponent,
  },
  created() {
    this.$store.dispatch("getlistCategories");
  },
  computed: {
    ...mapGetters(["getListCategories"]),
  },

  data() {
    return {
      id: null,
    };
  },
};
</script>
