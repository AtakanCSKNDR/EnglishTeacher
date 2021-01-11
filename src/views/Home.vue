<template>
  <div class="home">
    <v-btn color="primary" @click="goBase()">Go Base</v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    goBase() {
      this.$router.push("/View");
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>
