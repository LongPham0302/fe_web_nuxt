<template>
  <div class="mb-5">
    <div v-for="(item, index) in getListCategory" :key="index">
      <ProductComponent :id="item._id" :name="item.name" />
    </div>
  </div>
</template>

<script>
import ProductComponent from "@components/product";
import { mapGetters } from "vuex";

export default {
  name: "CameraHome",
  components: {
    ProductComponent,
  },
  created() {
    this.$store.dispatch("getListCategory");
  },
  computed: {
    ...mapGetters(["getListCategory"]),
  },

  data() {
    return {
      id: null,
      productData: []
    };
  },
};
</script>
