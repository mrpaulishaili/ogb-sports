<template>
  <div class="main" id="store">
    <section class="page-title">
      <!-- <div class="back-arrow">
        <i class="material-icons">arrow_back</i>
      </div>-->
      <h1>Store</h1>
      <p>Get all the choices you need</p>
    </section>
    <div class="navigation-pane">
      <ul class="tabs">
        <li class="tab">
          <router-link to>All</router-link>
        </li>
        <li class="tab active" onclick="openPage(event, 'page')">Trending</li>
        <li class="tab">Jerseys</li>
        <li class="tab">Hoodies</li>
        <li class="tab">Equipments</li>
        <li class="tab">Gears</li>
        <li>
          <i class="material-icons">search</i>
        </li>
      </ul>
    </div>

    <section class="tab-content" id="allCategories">
      <div class="flex-container">
        <div class="items products-container">
          <div class="item product">
            <img src="../assets/images/polo.jpg" alt class="item__image" />
            <p class="item__name">Jerseys</p>
            <p class="item__description">All in one new. comes in variey of colours</p>
            <p class="item__price">&#8358;8,000 - &#8358;38,000</p>
            <button>Explore</button>
          </div>

          <div class="item product">
            <img src="../assets/images/sneakers.jpg" alt class="item__image" />
            <p class="item__name">Sneakers</p>
            <p class="item__description">All in one new. comes in variey of colours</p>
            <p class="item__price">&#8358;8,000 - &#8358;38,000</p>
            <button>Explore</button>
          </div>

          <div class="item product">
            <img src="../assets/images/boxers.jpg" alt class="item__image" />
            <p class="item__name">Boxers</p>
            <p class="item__description">All in one new. comes in variey of colours</p>
            <p class="item__price">&#8358;8,000 - &#8358;38,000</p>
            <button>Explore</button>
          </div>

          <div class="item product">
            <img src="../assets/images/complete-jersey.jpg" alt class="item__image" />
            <p class="item__name">Complete Jersey</p>
            <p class="item__description">All in one new. comes in variey of colours</p>
            <p class="item__price">&#8358;8,000 - &#8358;38,000</p>
            <button>Explore</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Store",
};
</script>

<style lang="scss" scoped>
.page-title {
  position: relative;
  height: 41vh;
  display: grid;
  place-content: center;
  background: #020202;
  text-align: center;
  padding: 2rem;
  color: #937358;
}

.page-title h1 {
  font-weight: 700;
  letter-spacing: 0.8rem;
  text-transform: uppercase;
  font-size: 3rem;
}

.navigation-pane {
  background-color: #333;
  color: #eee;
  position: sticky;
  top: calc(50px + 2rem);
  overflow: hidden;
  z-index: 900;
  width: 100%;
}

.navigation-pane ul {
  display: flex;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  font-size: 1rem;
  justify-content: space-between;
  font-weight: 500;
  gap: 0.5rem;
  flex-wrap: nowrap;
  font-family: "Oswald";
  overflow-x: auto;
}

.navigation-pane .tabs {
  cursor: pointer;
  padding: 1rem;
}

.tab {
  margin-right: 3rem;
  router-link-has-active {
  }
}
.tab:hover,
.tab.active {
  color: #937358;
}

.items {
  display: grid;
  grid-template-columns: 100%;
  padding: 1rem;
}
.item {
  position: relative;
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 0 5px 5px #eee;
  transition: 0.35s;

  &::before {
    position: absolute;
    content: "";
    width: 0;
    top: 0;
    left: 0;
    height: 100%;
    background: rgba($color: gold, $alpha: 0.15);
    transition: 0.3s ease;
  }

  &__name {
    font-size: 1.5rem;
  }

  &__description {
    line-height: 1;
    // font-weight: bold;
    letter-spacing: 0.75px;
  }

  &__price {
    span {
      font-family: var(--font-sec);
    }
  }

  button {
    background: gold;
    outline: none;
    border: none;
    font-size: 1rem;
    font-family: var(--font-sec);
    padding: 10px 30px;
    border-radius: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    margin-top: 10px;
  }

  &:hover {
    cursor: pointer;
    &::before {
      width: 100%;
    }
  }
}

.item p {
  margin-bottom: 5px;
}

.item > div {
  display: grid;
  grid-template-columns: 3fr 2fr;
}

.item .price {
  display: grid;
  place-items: center;
  font-size: 2rem;
  background-color: rgb(48, 23, 23);
  color: #fff;
}
.item img {
  width: 100%;
  margin-bottom: 1rem;
}
button {
  padding: 0.5rem;
  cursor: pointer;
}
</style>