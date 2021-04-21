<template>
  <nav>
    <ul id="item-categories">
      <li class="item-category">
        <router-link to="/store" class="item-category__link">
          Store
          <img src="../assets/images/men-store-1.jpg" alt />
        </router-link>
      </li>
      <li class="item-category">
        <router-link to="/about" class="item-category__link">
          About
          <img src="../assets/images/tummy-trainer.jpg" alt />
        </router-link>
      </li>
      <li class="item-category">
        <router-link to="/returnpolicy" class="item-category__link">
          Return Policy
          <img src="../assets/images/complete-jersey.jpg" alt />
        </router-link>
      </li>
      <li class="item-category special-feature">
        <a href="#" class="item-category__link">
          Custom order
          <img src="../assets/images/logo_trans.png" alt />
        </a>
      </li>
      <li class="item-category">
        <router-link to="/contact" class="item-category__link">
          Contact
          <img src="../assets/images/logo_trans.png" alt />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  height: calc(100vh - calc(50px + 2rem));
  width: 100%;
  overflow-y: auto;
  z-index: 1000;
  top: calc(50px + 2rem);
  bottom: 0;
  left: 0;
  background: rgba(rgb(235, 168, 23), 1);
  transition: 0.35s transform;
  transform: translateX(100%);
  // border-radius: 20px;
  ul {
    list-style: none;
    padding: 1rem;
  }

  &.active {
    transform: translateX(0);
  }

  #item-categories {
    height: calc(100vh - var(--header-height));
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(5, 1fr);
    gap: 1rem;
  }
  .item-category {
    border-radius: 25px;
    color: #f3f3f3;

    &:last-child {
      padding-bottom: 3rem;
    }
  }
  .item-category__link {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    background: #333;
    word-wrap: none;
    white-space: nowrap;
    color: inherit;
    transition: 0.35s;
    text-decoration: none;
    letter-spacing: 0.25px;
    font-family: "Oswald";
    font-weight: 600;
    font-size: 1.5rem;
    border-radius: 20px;

    img {
      object-fit: cover;
      height: auto;
      width: 100%;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }

  .special-feature::before {
    position: absolute;
    content: "NEW";
    letter-spacing: 1px;
    top: 38%;
    left: 58%;
    transform: translate(-58%, -38%);
    clear: both;
    z-index: 1000;
    font-size: 0.4rem;
    color: gold;
    font-weight: bold;
  }

  .item-category__link:hover,
  .item-category__link.active {
    padding-top: 5px;
    box-shadow: 0 5px 5px gold;
    background-color: #fff;
    letter-spacing: 0.5px;
    color: #222;
  }
}
</style>