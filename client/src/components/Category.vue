<template>
  <div
    :class="[
      'cat-container py-2 px-4 overflow-x-auto flex-nowrap rounded shadow-lg flex items-center justify-evenly my-2 container w-max',
      catClass,
    ]"
  >
    <div
      v-for="(category, index) in categories"
      :key="index"
      class="category-item mx-2 p-2 bg-white"
    >
      <router-link :to="`/product/category/${category.category_id}`">
        <img
          :src="`${backend_url}/static/images/category/${category.category_image}`"
          :alt="category.category_name"
          class="w-full h-20"
        />
        <p class="text-center uppercase">{{ category.category_name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
    catClass: {
      type: String,
      default: "",
    },
  },
  setup() {
    const backend_url = process.env.VUE_APP_SERVER_URL;
    return {
      backend_url,
    };
  },
};
</script>

<style scoped>
.cat-container {
  display: flex;
  overflow-x: auto !important; /* Ensure horizontal scrolling */
  white-space: nowrap; /* Prevent items from wrapping */
  padding-bottom: 10px; /* Optional: Add some padding to ensure the scrollbar doesn't overlap content */
  max-width: 100%;
  text-align: center;
}

.category-item {
  display: inline-flex; /* Ensure items are inline for horizontal scrolling */
  margin-right: 16px; /* Optional: Add some margin between items */

}

.cat-container::-webkit-scrollbar {
  height: 8px; /* Adjust the height of the scrollbar */
}

.cat-container::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2); /* Customize the scrollbar thumb */
  border-radius: 4px; /* Rounded corners for the scrollbar thumb */
}

.cat-container::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1); /* Customize the scrollbar track */
}
</style>