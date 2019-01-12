<template>
  <div class="ui middle aligned center aligned grid container">
    <div class="six wide column"><username-input-form /></div>
  </div>
</template>

<script>
import UsernameInputForm from "../components/UsernameInputForm";

export default {
  name: "home",
  components: {
    UsernameInputForm
  }
};
</script>

<style scoped>
.grid {
  height: 100%;
}
</style>
