<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="2" v-for="(item, index) in data" :key="index">
          <v-card>
            <v-card-text>
              <p class="display-1 text--primary card-title">
                {{ item.title }}
              </p>
              <div class="text--primary">
                {{ item.body }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { BASE_GET_METHOD } from "@/store/actions.type";
export default {
  components: {},
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getData() {
      this.$store
        .dispatch(BASE_GET_METHOD)
        .then(() => {
          this.data = this.$store.getters.getData;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.card-title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
