<template>
<section class="hero is-primary">
<div class="hero-body">
 <div class="container">
 <h1 class="title">Поиск организации</h1>
  <b-field label="Введите ИНН">
    <b-autocomplete rounded="rounded"
    v-model="inn"
    :data="data"
    placeholder="2309.."
    icon="magnify"
    @input="getAsyncData"
    @select="option =&gt; selected = option" :loading="isFetching">
    <template slot="empty">{{ dummyText }}</template>
    </b-autocomplete>
  </b-field>
  </div>
  </div>
</section>
</template>

<script>
import { HTTP } from "./http-common";
import debounce from "lodash/debounce";

export default {
  data() {
    return {
      data: [],
      inn: "",
      selected: null,
      isFetching: false,
      nothingFound: false,
      test: false
    };
  },
  computed: {
    dummyText: function() {
      // change to function () {}
      if (this.inn.length > 0 && this.nothingFound) {
        // This will return error
        return "ни чего не найдено";
      } else {
        return "продолжайте ввод";
      }
    }
  },
  methods: {
    getAsyncData: debounce(function() {
      this.isFetching = true;
      HTTP.post("suggest/party", { query: this.inn, count: 8 })
        .then(response => {
          this.isFetching = false;
          this.data = Object.values(response.data.suggestions);
          if (response.data.suggestions.length === 0) this.nothingFound = true;
          console.log(this.inn); // This will work
        })
        .catch(error => {
          this.isFetching = false;
          console.log(error);
        });
    }, 300)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
