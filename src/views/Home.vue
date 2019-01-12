<template>
  <div class="ui middle aligned center aligned grid container">
    <div class="six wide column">
      <form class="ui large form">
        <div class="field">
          <label>GitHub Username</label>
          <input type="text" v-model="user" autofocus />
        </div>
        <router-link
          tag="button"
          type="submit"
          class="ui fluid button"
          :to="{ name: 'repos', params: { user: user } }"
          >List Repositories!</router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      user: ""
    };
  }
};
</script>

<style scoped>
.grid {
  height: 100%;
}
</style>
