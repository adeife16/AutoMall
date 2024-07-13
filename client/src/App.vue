<template>
  <div>
    <Navbar />
    <PreLoader />
    <router-view/>
    <footer>
      <h5>Mobile Nav here</h5>
    </footer>
  </div>
</template>


<script>
import Navbar from './components/Navbar.vue';
import PreLoader from './components/PreLoader.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    PreLoader
  }
}

</script>

<style>
@import url('./styles/main.css');
</style>
