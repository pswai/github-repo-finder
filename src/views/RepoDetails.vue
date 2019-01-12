<template>
  <div class="ui container">
    <div class="ui center aligned large header">{{ fullRepoName }}</div>
    <div class="ui segment"><vue-markdown :source="readme" /></div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "Repositories",
  components: {
    VueMarkdown
  },
  data() {
    return {
      readme: ""
    };
  },
  computed: {
    fullRepoName() {
      const { user, repoName } = this.$route.params;
      return `${user}/${repoName}`;
    }
  },
  created() {
    this.fetchReadme();
  },
  watch: {
    $route: "fetchReadme"
  },
  methods: {
    fetchReadme() {
      const { user, repoName } = this.$route.params;

      // TODO handle 404
      fetch(`https://api.github.com/repos/${user}/${repoName}/readme`)
        .then(resp => resp.json())
        .then(payload => (this.readme = atob(payload.content)));
    }
  }
};
</script>
