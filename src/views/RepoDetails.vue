<template>
  <div>
    {{ $route.params.repoName }}
    <pre>
      {{ readme }}
    </pre>
  </div>
</template>

<script>
export default {
  name: "Repositories",
  data() {
    return {
      readme: ""
    };
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
