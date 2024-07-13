<template>
    <div v-if="isLoading" class="preloader">
      <!-- Your preloader HTML/CSS here -->
      <div class="preloader-overlay"></div>
      <div class="preloader-spinner">
        <img src="../../public/loader.svg" alt="Loading...">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: true
      };
    },
    created() {
      // Display the preloader when the component is created
      this.showPreloader();
    },
    methods: {
      showPreloader() {
        // Show the preloader
        this.isLoading = true;
  
        // Hide the preloader once all components have been loaded
        window.addEventListener('load', () => {
          this.isLoading = false;
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Your preloader styles */
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1.0); /* Semi-transparent white overlay */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensure preloader appears above other content */
  }
  
  .preloader-overlay {
    /* Additional overlay styles if needed */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 1.0); /* Semi-transparent white overlay */
    z-index: -1;
    
  }
  
  .preloader-spinner {
  animation: rotate 2s linear infinite; /* Animation name, duration, timing function, number of iterations */
  transform-origin: 50% 50%; /* Sets the rotation point to the center of the icon */
}

@keyframes rotate {
  from { transform: rotate(0deg); } /* Starts from 0 degrees rotation */
  to { transform: rotate(360deg); } /* Rotates to 360 degrees for a full circle */
}
  </style>
  