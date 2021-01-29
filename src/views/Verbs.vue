<template>
  <div style="height:100%">
    <div class="verbs">
      <v-container>
        <v-row style="display:flex; justify-content:center">
          <v-col :cols="9">
            <v-img src="@/assets/verbsimage.png"></v-img>
          </v-col>

          <v-col :cols="12">
            <div class="my-title">Fiilleri Tanıyalım!</div>
            <div class="my-subtitle">
              Bu bölümde fiillerimizin birinci halleri ve Türkçe karşılıklarını
              bulabilirsiniz. Fiilleri seçerek İkinci ve Üçüncü hallerini
              görüntüleyebilirsiniz
            </div>
          </v-col>
          <v-col :cols="12">
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
            :cols="12"
            v-for="(item, index) in verbList.filter(
              (x) =>
                !search ||
                x.verb1.toLowerCase().includes(search.toLowerCase()) ||
                x.verb2.toLowerCase().includes(search.toLowerCase()) ||
                x.verb3.toLowerCase().includes(search.toLowerCase())
            )"
            :key="index"
          >
            <v-list color="#27277d" dark style="padding:0; border-radius:5px">
              <v-list-item>
                <v-list-item-avatar>
                  <img style="width:60px" src="@/assets/en.png" alt="" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <span>{{ item.verb1 }}</span>
                </v-list-item-content>
                <v-list-item-content>
                  <span>{{ item.verb2 }}</span>
                </v-list-item-content>
                <v-list-item-content>
                  <span>{{ item.verb3 }}</span>
                </v-list-item-content>
                <!-- <v-list-item>
                  <v-list-item-avatar>
                    <img style="width:60px" src="@/assets/tr.png" alt="" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <span>{{ item.tr }}</span>
                  </v-list-item-content>
                </v-list-item> -->
              </v-list-item>
            </v-list>

            <!--  <v-card color="#27277d" dark @click="goVerbDetail()">
              <v-card-title class="verb-title">
                <div
                  style="display:inline-flex; width:100%; justify-content:space-between"
                >
                  <span>
                    {{ item.verb1 }}
                  </span>
                  <span>
                    {{ item.verb2 }}
                  </span>
                  <span>
                    {{ item.verb3 }}
                  </span>
                </div>
              </v-card-title>
            </v-card> -->
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { GET_VERB_LIST } from "@/store/actions.type";
export default {
  data() {
    return {
      verbList: [],
      search: "",
    };
  },
  methods: {
    goVerbDetail() {
      this.$router.push("/VerbDetail");
    },
    getVerbList() {
      this.$store
        .dispatch(GET_VERB_LIST)
        .then(() => {
          this.verbList = this.$store.getters.getVerbList;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getVerbList();
  },
};
</script>

<style scoped>
.verbs {
  background-color: #4343a7;
  height: 100%;
  display: flex;
  align-items: center;
}
.verb-title {
  font-size: 1rem !important;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.v-list-item__icon,
.v-list-group__header__append-icon {
  min-width: 10px !important;
}
</style>
