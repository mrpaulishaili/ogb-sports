<template>
  <Header />
  <Main />
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
export default {
  name: "App",
  components: {
    Header,
    Main,
  },
};
</script>

<style lang="scss">
:root {
  --font-pri: "Oswald";
  --font-sec: "Raleway", sans-serif;

  --header-height: calc(5rem + 2px);
}
* {
  &,
  &::before,
  &::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}
html,
body {
  width: 100%;
}
html {
  font-size: 16px;
  font-family: var(--font-pri);
}
ul {
  list-style: none;
}
.logo {
  width: 60px;
  height: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;

  img {
    height: 50px;
    object-fit: contain;
  }
}

button {
  padding: 5px 1rem;
  font-size: 1rem;
  font-family: var(--font-sec);
  font-weight: 700;
  outline: 0;
  border: 0;
  margin-top: 2rem;
  background-color: gold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
}

img {
  width: 100%;
}
button .fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}
</style>