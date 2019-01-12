<template>
  <div class="ui middle aligned center aligned grid container">
    <div class="row">
      <div class="column">
        <div class="ui center aligned large header">
          {{ $route.params.user }}'s repositories
        </div>
      </div>
    </div>
    <div class="row">
      <div class="two wide column paging-col">
        <div class="ui icon buttons">
          <button
            class="ui basic button"
            v-on:click="goPrevPage"
            v-bind:class="{ disabled: !hasPrev }"
          >
            <i class="chevron left icon"></i>
          </button>
        </div>
      </div>
      <div class="six wide column">
        <div v-if="isLoading">Loading...</div>

        <repo-list v-bind:repos="repos" v-if="repos.length" />
        <div v-else>No repositories found</div>
      </div>
      <div class="two wide column paging-col">
        <div class="ui icon buttons">
          <button
            class="ui basic button"
            v-on:click="goNextPage"
            v-bind:class="{ disabled: !hasNext }"
          >
            <i class="chevron right icon"></i>
          </button>
        </div>
      </div>
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
      isLoading: false,
      repos: [],
      pagination: {
        page: 1,
        last: 1,
        pageSize: 20
      }
    };
  },
  computed: {
    hasNext() {
      const { page, last } = this.pagination;
      return page < last;
    },

    hasPrev() {
      return this.pagination.page > 1;
    }
  },
  created() {
    this.fetchRepos();
  },
  watch: {
    $route: "fetchRepos"
  },
  methods: {
    fetchRepos() {
      this.isLoading = true;
      const { page, pageSize } = this.pagination;

      // TODO handle 404
      return fetch(
        `https://api.github.com/users/${
          this.$route.params.user
        }/repos?per_page=${pageSize}&page=${page}`
      )
        .then(resp => {
          // Extract paging info
          const links = resp.headers.get("Link").split(", ");
          links.forEach(link => {
            const [, url, rel] = link.match(/<(.+)>; rel="(\w+)"/);

            if (rel === "last") {
              this.pagination.last = +url.match(/page=(\d+)$/).pop();
            }
          });

          return resp.json();
        })
        .then(payload => (this.repos = payload))
        .finally(() => {
          this.isLoading = false;
        });
    },

    goNextPage() {
      this.pagination.page++;
      this.fetchRepos();
    },

    goPrevPage() {
      if (this.pagination.page > 0) {
        this.pagination.page--;
      }
      this.fetchRepos();
    }
  }
};
</script>
