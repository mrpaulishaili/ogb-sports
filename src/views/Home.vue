<template>
  <div class="main" id="home">
    <section class="hero-section">
      <div class>
        <h2>
          <a href>Sports</a> in society today can be entertaining to
          <a href>watch</a> and also fun to
          <a href>play</a> for both men and women of
          <a href>all</a> ages
        </h2>
        <button>
          Explore your own Sports
          <span class="material-icons">arrow_right_alt</span>
        </button>
      </div>
      <!-- <div id="slider">
        <div id="slides">
          <div class="slide" id="slide_1"></div>
          <div class="slide" id="slide_2"></div>
          <div class="slide" id="slide_3"></div>
        </div>
        <div class="slide-status">
          <span></span>
          <span class="active"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="input-group">
        <label for>Type to search</label>
        <input type="search" name id />
      </div>-->
    </section>

    <section class="process_section">
      <h2 class="section-title">For the Love of Sports</h2>
      <div class="content">
        <div class="content__video">
          <video src="../assets/videos/customized-samples.mp4" autoplay muted loop></video>
        </div>
        <p>Building OGB Sports and Wears with the goal and mindset of dealing with original sport wears, equipmennts and accessotries has been a number one prioritiy in the heart of OGB sports and wears management</p>
      </div>

      <div class="content-video">
        <button type="submit">
          <span class="material-icons">arrow_right_alt</span>Make your own order
        </button>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
/* Hero Section */
#home {
  position: relative;
  // z-index: 1;
}
.hero-section {
  position: relative;
  height: calc(100vh - 5rem + 2px);
  // background-image: url("../assets/images/billi.jpg");
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-position: center center;
  background-color: #020202;
  color: #fff;
  max-width: 100%;
  padding: 2rem;
  font-family: var(--font-sec);

  > div {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;

    h2 {
      font-size: clamp(2.15rem, calc(-0.875rem + 8.333vw), 3.5rem);
      font-weight: 300;
      line-height: 1.32;
    }
    a {
      text-decoration: none;
      color: inherit;
      font-weight: 600;
    }
    button {
      height: 3.2rem;
      padding: 0 1rem;
      box-shadow: 0 0 5px gold;

      span {
        display: grid;
        font-size: 2rem;
        place-items: center;
        height: 100%;
        padding-left: 10px;
        border-left: 2px solid rgba($color: #000000, $alpha: 0.3);
      }
    }
  }
}
.hero-section .input-group {
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  margin: 0 auto;
  max-width: 600px;
}
.hero-section input {
  background: transparent;
  border: gold 1px solid;
  color: #fff;
}
.hero-section label {
  position: absolute;
  top: 0.35rem;
  left: 0.5rem;
  font-size: 1rem;
}
input {
  background: transparent;
  border: gold 1px solid;
  color: #fff;
}
label {
  font-size: 1rem;
}

#slider,
#slides,
.slide {
  height: 100%;
  width: 100%;
}
#slider {
  top: 0;
  left: 0;
  position: absolute;
}
#slides {
  position: relative;
  overflow: visible;
}
.slide-status {
  position: absolute;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;
}
.slide-status span {
  display: block;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 0.1rem;
}
.slide-status span:not(:last-child) {
  margin-right: 1rem;
}
.slide-status span.active {
  width: 1rem;
  border-radius: 0.2rem;
}
.to-left,
.to-right {
  cursor: pointer;
}
.to-left:hover,
.to-right:hover {
  opacity: 0.7;
}

.navigation-pane {
  background-color: #333;
  color: #eee;
  position: sticky;
  top: 50px;
  z-index: 999;
}

section.process_section,
section.satisfaction_section {
  position: relative;
  height: auto;
  min-height: calc(100vh - 5rem + 2px);
  padding: 1rem 2rem;
}

.content {
  position: relative;

  &__video {
    box-shadow: 0 0 10px gold;
    margin-bottom: 2rem;
    border-radius: 20px;
    padding: 1rem;
  }
  video {
    border-radius: 20px;
    top: 0;
    left: 0;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    font-weight: 300;
  }
}

.section-title {
  font-family: var(--font-sec);
  font-size: clamp(2.15rem, calc(-0.875rem + 8.333vw), 3.5rem);
  text-align: center;
  padding: 1rem;
  opacity: 0.3;
  line-height: 1;
}
.content img,
.content video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content video {
  aspect-ratio: 16/9;
}
</style>