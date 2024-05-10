<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <footer>
      <h5>Footer here</h5>
    </footer>
  </div>
</template>

<style>
@import url('./styles/main.css');
</style>
