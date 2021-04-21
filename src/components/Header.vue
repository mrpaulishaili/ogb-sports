<template>
  <header>
    <div class="logo close-nav">
      <router-link to="/">
        <img src="../assets/images/logo_trans.png" alt />
      </router-link>
    </div>
    <Navigation />
    <div class="control-navigation-display">
      <i class="material-icons">menu</i>
    </div>
  </header>
</template>

<script>
import Navigation from "./Navigation";

export default {
  name: "Header",
  components: {
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  height: calc(5rem + 2px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  padding-bottom: 0;
  z-index: 999;
  background-color: #f2f2f2;
  color: #000;
}
.control-navigation-display {
  height: 100%;
  display: grid;
  place-items: center;
  width: auto;
  padding: 0.5rem;
  transition: 0.35s transform;
  transform: rotateY(0deg);
}
.control-navigation-display:hover,
.control-navigation-display.active {
  cursor: pointer;
  transform: rotateY(180deg);
}
</style> 

