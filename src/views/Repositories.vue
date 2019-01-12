<template>
  <div class="ui middle aligned center aligned grid container">
    <div class="column">
      <div class="ui large header">{{ $route.params.user }}'s repositories</div>
      <repo-list v-bind:repos="repos" />
    </div>
  </div>
</template>

<script>
import RepoList from "../components/RepoList";

export default {
  name: "Repositories",
  components: {
    RepoList
  },
  data() {
    return {
      repos: []
    };
  },
  created() {
    this.fetchRepos();
  },
  watch: {
    $route: "fetchRepos"
  },
  methods: {
    fetchRepos() {
      // TODO handle 404
      fetch(`https://api.github.com/users/${this.$route.params.user}/repos`)
        .then(resp => resp.json())
        .then(payload => (this.repos = payload));
    }
  }
};
</script>
