<template>
  <div>
    <Navbar />
    <PreLoader />
    <router-view />
    <footer>
      <MobileNav />
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PreLoader from "./components/PreLoader.vue";
import MobileNav from "./components/MobileNav.vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import Cookies from "js-cookie";
import axios from "axios"; // Import axios

export default {
  name: "App",
  components: {
    Navbar,
    PreLoader,
    MobileNav
  },

  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const apiUrl = process.env.VUE_APP_SERVER_API_URL; // Assuming you have this in your environment variables

    const userRole = localStorage.getItem("role");

    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");

    const refreshSession = async () => {
      if (!refreshToken) {
        return;
      }

      try {
        const response = await axios.post(`${apiUrl}/auth/refresh/token`, {
          refreshToken,
        });

        if (response.status === 200) {
          const accessCookieLife = new Date(Date.now() + 12 * 60 * 60 * 1000); // 12 hours
          Cookies.set("accessToken", response.data.accessToken, {
            secure: true,
            expires: accessCookieLife,
          });

          const refreshCookieLife = new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000
          ); // 7 days
          Cookies.set("refreshToken", response.data.refreshToken, {
            secure: true,
            expires: refreshCookieLife,
          });

          authStore.login(response.data.user);
        }
      } catch (error) {
        console.error("Failed to refresh session:", error);
      }
    };

    if (!accessToken) {
      refreshSession();
    }

    if (accessToken && refreshToken) {
      const tokens = { accessToken, refreshToken };
      authStore.persist({ tokens, userRole });
    }

    return {};
  },
};
</script>

<style>
@import url("./styles/main.css");
</style>
