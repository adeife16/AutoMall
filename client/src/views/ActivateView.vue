<template>
    <div class="dark-gray shadow color-yellow px-8 py-8 rounded-md w-1/2 mx-auto">

    </div>
  </template>
  

<script>
import axios from 'axios';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';  // Import useRoute
import { toast } from 'vue3-toastify';


export default {

  setup() {
    const route = useRoute();
    const apiUrl = process.env.VUE_APP_SERVER_API_URL;

    const activate = async (token) => {
      try {
        const response = await axios.get(`${apiUrl}/auth/activate/token/${token}`);
        // console.log(response);
        toast.success(response.data.message);
        setTimeout(() => {
          router.replace({name: 'login'})
        })
     }
     catch (error) {
        if (error.response) {
          toast.error(error.response.data.message);
       //   console.log(error.response);
        }
        else {
          console.error(error);
          toast.error("An unexpected error occurred.");
        }
      }
    };

    onMounted(() => {
      const token = route.params.token;
      if (token) {
        activate(token);
      } else {
        toast.error("Activation token not found.");
      }
    });

    return {};
  },
};


</script>

<style>

</style>