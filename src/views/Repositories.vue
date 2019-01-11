<template>
  <div>
    {{ $route.params.user }}'s repositories
    <ul>
      <li v-for="repo in repos" :key="repo.id">
        <router-link
          :to="{ name: 'repoDetails', params: { repoName: repo.name } }"
          >{{ repo.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Repositories",
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
