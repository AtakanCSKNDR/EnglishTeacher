<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Merhaba</h1>
          <h1><b>Kullanıcı</b></h1>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="search"
            label="Arama"
            placeholder="Arama"
            solo
            dark
            clearable
            rounded
          >
            <div slot="label">
              <label>
                <v-icon>mdi-magnify</v-icon>
              </label>
            </div>
          </v-text-field>
        </v-col>
        <v-col
          cols="6"
          v-for="(item, index) in homeCards.filter(
            (x) =>
              !search || x.text.toLowerCase().includes(search.toLowerCase())
          )"
          :key="index"
        >
          <v-btn block class="home-cards" @click="goRoute(item.link)">
            <v-row>
              <v-col
                cols="12"
                class="text-center"
                style="display:flex; justify-content:center"
              >
                <v-icon>mdi-magnify</v-icon>
              </v-col>
              <v-col cols="12">
                <h5>
                  {{ item.text }}
                </h5></v-col
              >
            </v-row>
          </v-btn>
        </v-col>
      </v-row>
      <!-- <v-btn color="primary" @click="goQuestions()">Go Questions</v-btn> -->
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      search: "",
      homeCards: [
        {
          text: "Questions",
          icon: "mdi-mignify",
          image: "homequestion.png",
          link: "/Questions",
        },
        /*  {
          text: "Translate",
          icon: "mdi-mignify",
          image: "question.png",
          link:"/Questions"
        }, */
        {
          text: "Verbs",
          icon: "mdi-mignify",
          image: "question.png",
          link: "/Verbs",
        },
      ],
    };
  },
  methods: {
    goRoute(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style scoped>
.home-cards >>> .v-btn__content {
  width: 100%;
}
.home-cards {
  align-items: center;
  display: flex;
  justify-content: center;
  height: auto !important;
  padding: 15px !important;
}
.home {
  width: 100%;
  background-color: #4343a7;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
