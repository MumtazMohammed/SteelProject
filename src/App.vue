<template>
  <div id="app">
    <app-header />
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__faster animate__fadeIn"
      leave-active-class="animate__animated animate__faster animate__fadeOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import AppHeader from "./NavBar/AppHeader.vue";
export default {
  name: "app",
  components: {
    AppHeader,
  },
};
</script>
<style>
#app {
  background-color: #eeeeee;
}
</style>
