<template>
  <div style="height:100%">
    <v-app-bar color="#27277d" dark absolute>
      <v-btn icon style="font-size:25px; margin:0px 15px;">
        <v-icon style="margin:0px 15px" x-large>
          mdi-checkbox-marked-circle</v-icon
        >
        <span>
          {{ correct }}
        </span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-card
        color="#FFF"
        light
        style="font-size:20px; font-weight:700; margin-top:50px; padding:3px 25px"
      >
        <span style="color:#8888ea"> {{ count }}</span>
      </v-card>
      <v-spacer></v-spacer>

      <v-btn icon style="font-size:25px ; margin:0px 15px;">
        <span>
          {{ wrong }}
        </span>
        <v-icon style="margin:0px 15px;" x-large>mdi-cancel</v-icon>
      </v-btn>
    </v-app-bar>

    <div class="quiz">
      <v-container class="quiz-container">
        <v-row>
          <v-col :cols="12">
            <v-card
              class="question-card"
              style="z-index:10; padding: 50px 15px;"
            >
              <v-img
                width="100px"
                style="margin-top:-120px; z-index:15"
                src="@/assets/question.png"
              ></v-img>
              <div class="my-title">{{ data.question }}</div>
              <v-row>
                <v-col cols="12 mt-6 mb-6">
                  <v-divider></v-divider>
                </v-col>
              </v-row>
              <v-row class="answers-wrapper">
                <v-col
                  style="padding:5px 10px;"
                  cols="12"
                  v-for="(item, index) in data.answers"
                  :key="index"
                  ><v-btn
                    :disabled="item.disabled"
                    :style="{ backgroundColor: item.color }"
                    class="answer-button"
                    :outlined="item.outlined"
                    :color="item.color"
                    block
                    @click="sendAnswer(index)"
                    >{{ item.label }}</v-btn
                  ></v-col
                >
              </v-row>
            </v-card>
          </v-col>

          <v-col cols="12" class="card-bottom-middle">
            <v-card color="#ffffffa6" class="question-card"> </v-card>
          </v-col>
          <v-col cols="12" style="margin-top: -50px; padding: 0px 45px;">
            <v-card color="#ffffff45" class="question-card"> </v-card>
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col cols="12" style="display:flex; justify-content:center">
            <v-btn
              color="#8888ea"
              block
              dark
              large
              rounded
              @click="nextQuestion()"
            >
              Sonraki</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { GET_RANDOM_RECORDS } from "@/store/actions.type";
export default {
  props: ["RequestType"],
  data() {
    return {
      data: [],
      correct: 0,
      wrong: 0,
      answerStatus: null,
      count: 1,
    };
  },
  methods: {
    nextQuestion() {
      if (this.count < 5) {
        this.count++;
        this.getQuestion();
      } else {
        let object = {
          correct: this.correct,
          wrong: this.wrong,
          count: this.count,
        };
        this.$router.push({ name: "Result", params: { Result: object } });
      }
    },
    sendAnswer(index) {
      if (this.data.correctAnswerId == index) {
        this.correct++;
        this.data.answers[index].color = "#4caf50";
        this.data.answers[index].outlined = false;
      } else {
        this.wrong++;
        this.data.answers[index].color = "#ff5252";
        this.data.answers[this.data.correctAnswerId].color = "#4caf50";
        this.data.answers[this.data.correctAnswerId].outlined = false;
        this.data.answers[index].outlined = false;
      }
      this.data.answers.forEach((element) => {
        element.disabled = true;
      });
    },
    getQuestion() {
      this.data = [];
      let currentArr = [];
      this.$store
        .dispatch(GET_RANDOM_RECORDS, this.RequestType)
        .then(() => {
          this.data = this.$store.getters.getRandomWords;
          this.data.answers.forEach((element) => {
            let object = {
              label: element,
              color: "none",
              disabled: false,
              outlined: false,
            };
            currentArr.push(object);
          });

          this.data.answers = currentArr;
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  created() {
    if (this.RequestType == null) {
      this.$router.push("/Questions");
    }
    this.getQuestion();
  },
};
</script>

<style>
.card-bottom-middle {
  margin-top: -60px;
  z-index: 2;
  padding: 0px 30px;
}
.next-button-outer {
  width: fit-content;
  padding: 20px;
  background-color: #8888ea;
  box-shadow: 0px 0px 10px 0px #27277d;
}
.quiz {
  background-color: #4343a7;
  height: 100%;
  display: flex;
  align-items: center;
}
.my-title {
  font-size: 25px;
  text-align: center;
  font-weight: 700;
  color: #8888ea;
}
.question-card {
  padding: 30px 15px;
  border-radius: 15px !important;
}
.quiz-container {
  padding: 15px 30px;
  margin-top: 100px;
}
.answer-button {
  width: 100%;
  overflow: hidden !important;
  text-transform: initial;
  padding: 25px 15px !important;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}
</style>
