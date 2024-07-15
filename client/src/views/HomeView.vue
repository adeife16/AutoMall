<template>
  <div class="home">
    <h1>This is an home page</h1>
    <Button btnClass="btn-yellow border-white" @btnClick="handleButtonClick">
      <span> <ArrowRightEndOnRectangleIcon class="size-6" />Button </span>
    </Button>
    <Input
      type="email"
      disabled
      placeholder="Placeholder"
      inputClass="border-black"
      v-model="para"
    />
    <p v-if="para">{{ para }}</p>

    <multi-image-uploader
      :defaultImages="defaultImages"
      :maxImages="10"
      :maxFileSize="10485760"
      :allowedExtensions="['jpg', 'jpeg', 'png', 'gif', 'bmp']"
      @upload="handleUpload"
      @remove="handleRemove"
    />
    <div>
      <p>{{ authStore.isLoggedIn }}</p>
      <p>{{ authStore.user }}</p>
      <p>{{ authStore.token }}</p>
      <p>{{ authStore.sessionKey }}</p>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/vue/16/solid";
import MultiImageUploader from "@/components/MultiImageUploader.vue";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import { useAuthStore } from "@/stores/authStore";

export default {
  name: "HomeView",
  components: {
    Button,
    ArrowRightEndOnRectangleIcon,
    Input,
    MultiImageUploader,
    toast,
  },
  props: {},
  setup() {
    const authStore = useAuthStore();
    const defaultImages = ref([]);
    const para = ref("");
    const handleButtonClick = () => {
      toast.success("Clicked");
    };

    const inputValue = (value) => {
      para.value = value;
    };
    const handleUpload = (file) => {
      console.log(file);
    };

    const handleRemove = (index) => {
      console.log(index);
    };

    return {
      handleButtonClick,
      para,
      inputValue,
      defaultImages,
      handleUpload,
      handleRemove,
      authStore,
    };
  },
};
</script>
