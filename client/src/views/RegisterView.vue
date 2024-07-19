<template>
  <div class="register">
    <div class="container mx-auto min-h-screen flex items-center justify-center">
      <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div class="flex flex-col space-y-4 px-8 py-8 bg-white rounded-md border-left-2-black border-top-2-black border-right-2-red border-bottom-2-red mt-4">
          <h2 class="text-xl font-bold text-gray-800 text-center">Register</h2>
          <Form formClass="">
            <Input type="text" placeholder="First Name" inputId="fname" class="fname border-bottom-black focus:outline-none" label="First Name" v-model="form.fname" />
            <Input type="text" placeholder="Last Name" inputId="lname" class="lname border-bottom-black focus:outline-none" label="Last Name" v-model="form.lname" />
            <Input type="email" placeholder="Email Address" class="email border-bottom-black focus:outline-none" inputId="email" label="Email Address" v-model="form.email" />
            <Input type="password" placeholder="Password" class="password border-bottom-black focus:outline-none" inputId="password" label="Password" v-model="form.password" />
            <Input type="password" placeholder="Confirm Password" class="password border-bottom-black focus:outline-none" inputId="confirmPassword" label="Confirm Password" v-model="form.confirmPassword" />
            <Input type="checkbox" class="" label="I agree to the terms of service" inputId="agreement" v-model="form.agreement" @click="handleAgreement"/>
            <div class="mt-4">
              <Button btnClass="btn-black w-full" :disabled="disabled" @btnClick="handleRegister">Register</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import  {useRouter} from 'vue-router';
import Form from '@/components/Form.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import formValidator from '../utils/Validator';
import { toast } from 'vue3-toastify';
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';

export default {
  components: { Form, Input, Button, toast },
  setup() {
    const router = useRouter();
    const apiUrl = process.env.VUE_APP_SERVER_API_URL;

    const authStore = useAuthStore();
    if(authStore.isLoggedIn) {
      router.push({ name: 'home' });
    }

    const disabled = ref(false);
    
    const form = ref({
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreement: false,
    });
    const schema = [
      {
        id: 'fname',
        validations: [
          { rule: 'required', params: [], message: 'First Name is required.' },
          { rule: 'minLength', params: [3], message: 'First Name must be at least 3 characters long.' }
        ]
      },
      {
        id: 'lname',
        validations: [
          { rule: 'required', params: [], message: 'Last Name is required.' },
          { rule: 'minLength', params: [3], message: 'Last Name must be at least 3 characters long.' }
        ]
      },
      {
        id: 'email',
        validations: [
          { rule: 'required', params: [], message: 'Email is required.' },
          { rule: 'email', params: [], message: 'Please enter a valid email address.' }
        ]
      },
      {
        id: 'password',
        validations: [
          { rule: 'required', params: [], message: 'Password is required.' },
          { rule: 'minLength', params: [8], message: 'Password must be at least 8 characters long.' }
        ]
      },
      {
        id: 'confirmPassword',
        validations: [
          { rule: 'required', params: [], message: 'Confirm Password is required.' },
          { rule: 'confirmPassword', params: [form.value.password], message: 'Passwords do not match.' }
        ]
      },
      {
        id: 'agreement',
        validations: [
          { rule: 'checkboxClicked', params: [], message: 'You must agree to the terms.' }
        ]
      }
    ];

    const handleAgreement = () => {
      form.value.agreement = !form.value.agreement
    }

    const handleRegister = async () => {
      const isValid = formValidator.validateInputs(schema, form.value);

      if (isValid) {
        disabled.value = true; // Disable button

        try {
          const register = await axios.post(`${apiUrl}/auth/register`, form.value); // Corrected API URL here
          
          toast.success(register.data.message);
          setTimeout(() => {
            router.replace({name: 'login'})
          }, 2000);
          
        }
        catch (error) {
          toast.error(error.response.data.message);
        }

        disabled.value = false; // Enable button after response is received
      }
    };

    return {
      form,
      handleAgreement,
      handleRegister,
      disabled
    };
  },
};
</script>

<style>
.error-message {
  display: block;
  color: red;
  margin-top: 5px;
}
</style>

