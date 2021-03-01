<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">

      <v-card>
        <v-card-title class="headline">
          Articles Listing
        </v-card-title>

        <ul>
          <li
            class="articles"
            v-for="(article, index) in articles"
            :key="index"
          >
            <p>{{ article.abstract }}</p>
          </li>
        </ul>

        <v-card-text>
          wasem
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data: () => ({
    articles: []
  }),
  beforeMount() {
    this.fetch();
  },
  computed: {
    articles () {
      return this.$store.state.articles.list
    }
  },
  methods: {
    addTodo (value) {
      this.$store.commit('articles/addArticles', value)
    },
    async fetch() {
      debugger;
      const res = await fetch(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=TbFM62baVBo8jp1AWLEAdAA7x2sY5am8"
      );
      const { response } = await res.json();
      this.articles = response.docs;
      console.log(response.docs);
    }
  }
};
</script>
