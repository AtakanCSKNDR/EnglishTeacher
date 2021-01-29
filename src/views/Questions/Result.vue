<template>
  <div style="height:100%">
    <div class="result">
      <v-container>
        <v-row>
          <v-col :cols="12">
            <div class="my-title">
              Artık verdiğin cevapların analizini görme vaktin geldi.
            </div>
            <div class="my-subtitle">
              {{ analysis }}
            </div>
          </v-col>
          <v-col :cols="12" class="mb-6 text-center">
            <v-progress-circular
              :rotate="360"
              :size="200"
              :width="30"
              :value="(Result.correct * 100) / Result.count"
              color="teal"
            >
              {{ Result.correct }}
            </v-progress-circular>
          </v-col>
          <v-divider></v-divider>
          <v-col :cols="6">
            <v-btn color="#8888ea" block dark large rounded @click="goHome()">
              Başa sar</v-btn
            >
          </v-col>
          <v-col :cols="6">
            <v-btn color="#8888ea" block dark large rounded @click="newGame()">
              Yeni oyun</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Result"],
  data() {
    return {
      analysis: "",
      status: [
        { id: 0, status: "Hiçbir soruyu bilemedin. Ayıp ama :(" },
        { id: 1, status: "Daha çok çabalamalısın :(" },
        {
          id: 2,
          status:
            "Ortalama herkes bukadar yapıyor zaten. Hemen yeni oyuna başla ve onları geride bırak.",
        },
        {
          id: 3,
          status:
            "Durum gayet iyi. Olması gereken de buydu zaten. Ama neden daha iyi olmasın ki.",
        },
        {
          id: 4,
          status: "Vay canına baya bi soru bildin. Helal olsun. ADAMSIN",
        },
        {
          id: 5,
          status: "Tüm soruları doğru yaptın. Kıyak abiymişsin. Helal olsun.",
        },
      ],
    };
  },
  methods: {
    newGame() {
      this.$router.push("/Questions");
    },
    goHome() {
      this.$router.push("/");
    },
  },
  created() {
    if (this.Result == null) {
      this.$router.push("/Questions");
    }
    this.analysis = this.status.filter(
      (x) => x.id == this.Result.correct
    )[0].status;
  },
};
</script>

<style lang="scss" scoped>
.my-subtitle {
  font-size: 14px;
  text-align: center;
  font-weight: 300;
  color: #b1c4d9;
  margin-top: 40px;
}
.my-title {
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  color: #8888ea;
}
.result {
  background-color: #4343a7;
  height: 100%;
  display: flex;
  align-items: center;
}
.row {
  margin: 0;
}
.v-progress-circular__info {
  font-size: 40px !important;
  font-weight: 700 !important;
}
</style>
