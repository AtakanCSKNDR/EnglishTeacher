<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
   
  </v-app>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    //
  }),

  methods: {
  },
  created () {
  },
};
</script>
<style>
*  {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
}
</style>
