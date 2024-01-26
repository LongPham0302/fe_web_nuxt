<template>
  <div class="mb-5">
    <div v-for="(item, index) in getListCategories" :key="index">
      <CameraComponent :id="item._id" />
    </div>
  </div>
</template>

<script>
import CameraComponent from "@components/client/camera";
import { mapGetters } from "vuex";

export default {
  name: "CameraHome",
  components: {
    CameraComponent,
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
