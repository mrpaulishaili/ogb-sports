<template>
  <main>
    <router-view v-slot="{Component}">
      <transition
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style>
main {
  margin-top: calc(5rem +  2px);
  /* padding: 0 1rem; */
}
</style>