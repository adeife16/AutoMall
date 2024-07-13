<template>
    <nav class="dark-gray shadow color-yellow sticky top-0 z-50">
      <div class="flex justify-between items-center px-4 py-2 mx-auto lg:max-w-7xl lg:px-8">
        <div class="flex items-center">
          <img class="h-8 w-auto" src="../../public/logo.svg" alt="Your Logo" />
        </div>
  
        <!-- Hamburger menu for small screens -->
        <button
          type="button"
          class="block lg:hidden focus:outline-none focus:ring-2 focus:ring-white p-2 rounded-md"
          @click="toggleMenu"
        >
            <Bars3Icon class="w-6 h-6 color-red transform transition duration-300" :class="{ 'rotate-90': isOpen }" />
        </button>
  
        <!-- Overlay for side menu in small screens -->
        <transition name="fade">
          <div v-if="isOpen" class="fixed inset-0 bg-black opacity-50 z-90" @click="toggleMenu"></div>
        </transition>
  
        <!-- Side menu for small screens -->
        <div
          class="lg:hidden fixed top-0 right-0 h-full opacity-100 dark-gray shadow-lg z-50 w-64 transform transition-transform duration-300"
          :class="{ 'translate-x-full': !isOpen, 'translate-x-0': isOpen }"
        >
            <div>
                <XMarkIcon class="color-red  mx-3 mt-3 h-12 w-12 float-right" @click="toggleMenu" />
            </div>
            <ul class="flex flex-col w-full pt-4 nav-lists">
              <hr>
            <li>
                <router-link to="/" class="block py-3 px-4 rounded-md color-yellow hover:underline">Home</router-link>
            </li>
            <li class="relative">
              <button
                @click="toggleDropdownMobile"
                class="flex items-center justify-between w-full py-3 px-4 rounded-md color-yellow hover:underline focus:outline-none"
              >
                <span>Services</span>
                <svg
                  class="w-4 h-4 ml-1"
                  :class="{ 'rotate-90': dropdownOpenMobile }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <transition name="fade">
                <ul
                  v-if="dropdownOpenMobile"
                  class="absolute top-full left-0 right-0 dark-gray w-full rounded-md py-1 shadow-lg z-20"
                >
                  <li>
                    <a href="#" class="block px-4 py-2 color-yellow hover:underline">Option 1</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 color-yellow hover:underline">Option 2</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 color-yellow hover:underline">Option 3</a>
                  </li>
                </ul>
              </transition>
            </li>
            <li>
              <a href="#" class="block py-3 px-4 rounded-md color-yellow hover:underline">About</a>
            </li>
            <li>
              <a href="#" class="block py-3 px-4 rounded-md color-yellow hover:underline">Contact</a>
            </li>
            <li>
                <router-link to="/login" class="block py-3 px-4 rounded-md color-yellow hover:underline">Login</router-link> | <router-link to="/register" class="block py-3 px-4 rounded-md color-yellow hover:underline">Register</router-link>
            </li>
          </ul>
        </div>


        <!-- Horizontal menu for large screens -->
        <ul class="hidden lg:flex flex-col lg:flex-row lg:space-x-4 color-yellow">
          <li>
            <router-link to="/" class="px-3 py-2 rounded-md hover:color-yellow">Home</router-link>
          </li>
          <li class="relative">
            <a
              href="#"
              class="px-3 py-2 rounded-md hover:color-yellow dropdown"
              @click="toggleDropdown"
            >
              Services
              <svg
                class="w-4 h-4 ml-1"
                :class="{ 'rotate-animation': dropdownOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <ul
              class="absolute right-0 top-5 dark-gray w-48 rounded-md py-1 shadow-lg z-10 dropdown-menu"
              @mouseleave="hideDropdown"
              :class="{ 'hidden': !dropdownOpen, 'animate-slide-in-top': dropdownOpen }"
            >
              <li>
                <a href="#" class="block px-4 py-2 hover:color-yellow">Option 1</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:color-yellow">Option 2</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:color-yellow">Option 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" class="px-3 py-2 rounded-md hover:color-yellow">About</a>
          </li>
          <li>
            <a href="#" class="px-3 py-2 rounded-md hover:color-yellow">Contact</a>
          </li>
          <li>
                <router-link to="/login" class="inline-block py-3 px-4 rounded-md color-yellow hover:underline">Login</router-link> | <router-link to="/register" class="inline-block py-3 px-4 rounded-md color-yellow hover:underline">Register</router-link>
            </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { XMarkIcon, Bars3Icon } from '@heroicons/vue/16/solid';
  
  export default {
    components: {
      XMarkIcon,
      Bars3Icon
    },
    setup() {
      const isOpen = ref(false)
      const dropdownOpen = ref(false)
      const dropdownOpenMobile = ref(false)
  
      const toggleMenu = () => {
        isOpen.value = !isOpen.value
        dropdownOpenMobile.value = false
      }
  
      const toggleDropdown = () => {
        dropdownOpen.value = !dropdownOpen.value
      }
  
      const toggleDropdownMobile = () => {
        dropdownOpenMobile.value = !dropdownOpenMobile.value
      }
  
      const hideDropdown = () => {
        dropdownOpen.value = false
      }
  
      return { isOpen, toggleMenu, toggleDropdown, toggleDropdownMobile, hideDropdown, dropdownOpen, dropdownOpenMobile }
    }
  }
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  .rotate-animation {
    animation: rotate 0.5s ease-in-out forwards;
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(90deg);
    }
  }
  
  .translate-x-full {
    transform: translateX(100%);
  }
  
  .translate-x-0 {
    transform: translateX(0);
  }

  a{
    display: inline-block !important;
  }
  </style>
  