<template>
  <form>
    GitHub Username <input type="text" v-model="user" />
    <router-link
      tag="button"
      type="submit"
      :to="{ name: 'repos', params: { user: user } }"
      >Go!</router-link
    >
  </form>
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
