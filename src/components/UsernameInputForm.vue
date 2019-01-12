<template>
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
</template>

<script>
export default {
  name: "userNameInputForm",
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
