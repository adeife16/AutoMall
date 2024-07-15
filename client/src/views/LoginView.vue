<template>
  <div class="login">
    <div
      class="container mx-auto min-h-screen flex items-center justify-center"
    >
      <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div
          class="flex flex-col space-y-4 px-8 py-8 bg-white rounded-md border-left-2-black border-top-2-black border-right-2-red border-bottom-2-red"
        >
          <h2 class="text-xl font-bold text-gray-800 text-center">Login</h2>
          <Form formClass="">
            <Input
              type="email"
              placeholder="Email Address"
              class="email border-bottom-black focus:outline-none"
              label="Email Address"
              inputId="email"
              v-model="form.email"
            />

            <Input
              type="password"
              placeholder="Password"
              class="password border-bottom-black focus:outline-none"
              label="Password"
              inputId="password"
              v-model="form.password"
            />

            <div class="mt-4">
              <Button
                btnClass="btn-black w-full"
                :disabled="disabled"
                @btnClick="handleLogin"
                >Login</Button
              >
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Form from "@/components/Form.vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import formValidator from "../composables/Validator";
import { toast } from "vue3-toastify";
import axios from "axios";
import { useAuthStore } from "@/stores/authStore";
import Cookies from "js-cookie";
import randomString from "../composables/RandomString";

export default {
  components: { Form, Input, Button },
  setup() {
    const router = useRouter();
    const apiUrl = process.env.VUE_APP_SERVER_API_URL;

    const disabled = ref(false);

    const authStore = useAuthStore();

    // Check if user is already logged in
    if (authStore.isLoggedIn) {
      router.replace({ name: "home" });
    }
    const form = ref({
      email: "",
      password: "",
    });

    const schema = [
      {
        id: "email",
        validations: [
          { rule: "required", params: [], message: "Email is required." },
          {
            rule: "email",
            params: [],
            message: "Please enter a valid email address.",
          },
        ],
      },
      {
        id: "password",
        validations: [
          { rule: "required", params: [], message: "Password is required." },
          {
            rule: "minLength",
            params: [8],
            message: "Password must be at least 8 characters long.",
          },
        ],
      },
    ];

    const handleLogin = async () => {
      const isValid = formValidator.validateInputs(schema, form.value);

      if (isValid) {
        disabled.value = true; // Disable button

        try {
          const login = await axios.post(`${apiUrl}/auth/login`, form.value); // Corrected API URL here

          authStore.login(login.data.user);

          const cookieLife = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

          const sessionKey = randomString(8);

          // Set access token and refresh token in local storage
          localStorage.clear();
          localStorage.setItem(sessionKey, login.data.accessToken);

          Cookies.remove("refreshToken");
          const options = { httpOnly: true, secure: true, expires: cookieLife };
          Cookies.set("refreshToken", login.data.refreshToken, options);

          authStore.setToken({
            accessToken: login.data.accessToken,
            refreshToken: login.data.refreshToken,
          });

          authStore.setSessionKey(sessionKey);

          toast.success(login.data.message);
          setTimeout(() => {
            router.replace({ name: "home" });
          }, 2000);
        } catch (error) {
          if (error.response) {
            toast.error(error.response.data.message);
          } else {
            console.error(error);
            toast.error(`An unexpected error occurred.`);
          }
        }

        disabled.value = false; // Enable button after response is received
      }
    };
    return {
      form,
      disabled,
      handleLogin,
    };
  },
};
</script>