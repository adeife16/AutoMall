<template>
  <div class="carousel">
    <div class="carousel-inner" :style="{ 'transform': `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="carousel-item">
        <img :src="slide.image" alt="">
        <h3 v-if="slide.title">{{ slide.title }}</h3>
        <p v-if="slide.text">{{ slide.text }}</p>
        <a v-if="slide.link" :to="slide.link">{{ slide.cta }}</a>
      </div>
    </div>
    <div class="carousel-controls">
      <button @click="prevSlide">Prev</button>
      <button @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true,
      validator: function (slides) {
        return slides.every(slide => typeof slide.image === 'string');
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }
  }
}
</script>

<style>
.carousel {
  display: flex;
  overflow: hidden;
}
.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}
.carousel-item {
  flex: 0 0 100%;
  text-align: center;
}
.carousel-controls {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
button {
  margin: 0 5px;
}
</style>