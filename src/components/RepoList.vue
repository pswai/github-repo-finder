<template>
  <div class="ui animated list">
    <div class="item" v-for="repo in repos" :key="repo.id">
      <router-link
        :to="{ name: 'repoDetails', params: { repoName: repo.name } }"
        >{{ repo.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "RepoList",
  props: {
    repos: {
      default: []
    }
  }
};
</script>
