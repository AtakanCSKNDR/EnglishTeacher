<template>
  <div class="question">
    <v-container>
      <v-row>
        <v-col>
          <v-img src="@/assets/education.png"></v-img>
        </v-col>
        <v-col cols="12">
          <div class="my-title">Hadi Birlikte Kelimeleri Eşleştirelim!</div>
          <div class="my-subtitle">
            Bu bölümde size verdiğimiz kelimelerin yabancı dildeki
            karşılıklarını bularak puan kazanmaya çalışmalısın. Hepsini doğru
            bilene kadar devam etmelisin :)
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="display:flex; justify-content:space-around">
          <v-progress-circular
            :width="15"
            :size="115"
            color="#8888ea"
            indeterminate
          >
            <v-btn
              @click="goQuiz(1)"
              color="#27277d"
              dark
              large
              class="ready-button"
            >
              <img style="width:100px" src="@/assets/en.png" alt=""
            /></v-btn>
          </v-progress-circular>

          <v-progress-circular
            :width="15"
            :size="115"
            color="#8888ea"
            indeterminate
          >
            <v-btn
              @click="goQuiz(0)"
              color="#27277d"
              dark
              large
              class="ready-button"
            >
              <img style="width:100px" src="@/assets/tr.png" alt=""
            /></v-btn>
          </v-progress-circular>
        </v-col>
      </v-row>
      <!--   <v-row>
        <v-col
          cols="12 text-center mt-6"
          style="display:flex; justify-content:center"
        >
          <div class="ready-button-outer">
            <v-btn
              @click="goQuiz()"
              color="#27277d"
              dark
              large
              class="ready-button"
            >
              Başla</v-btn
            >
          </div>
        </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goQuiz(id) {
      this.$router.push({name:"Quiz" ,  params:{RequestType:id}});
    },
  },
};
</script>

<style>
.question {
  background-color: #4343a7;
  height: 100%;
  display: flex;
  align-items: center;
}
.footer-div {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 100px;
}
.my-title {
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  color: #8888ea;
}
.my-subtitle {
  font-size: 14px;
  text-align: center;
  font-weight: 300;
  color: #b1c4d9;
  margin-top: 40px;
}
.ready-button-outer {
  width: fit-content;
  padding: 20px;
  background-color: #8888ea;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 0px #27277d;
}
.ready-button {
  height: 100px !important;
  width: 100px !important;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 0px black !important;
}
</style>
