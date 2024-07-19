<template>
  <div class="home">
    <!-- categories -->
    <Category :categories="categories" :catClass="'mb-5 mt-5'" />

    <div class="card">
      <h1>Featured Listings</h1>
      <div class="row-auto">
        
      </div>
    </div>

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
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/vue/16/solid";
import MultiImageUploader from "@/components/MultiImageUploader.vue";
import { toast } from "vue3-toastify";
import { useAuthStore } from "@/stores/authStore";
import Category from "@/components/Category.vue";
import axiosInstance from "@/services/HttpClient";
import { onMounted, ref } from "vue";


export default {
  name: "HomeView",
  components: {
    Button,
    ArrowRightEndOnRectangleIcon,
    Input,
    MultiImageUploader,
    toast,
    Category
  },
  props: {},
  setup() {
    const authStore = useAuthStore();
    const defaultImages = ref([]);
    const para = ref("");
    const categories = ref([]);

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

    onMounted(() => {
      // get all categories
      const fetchCategories = async () => {
        try {

          const response = await axiosInstance.get("/product/category");
          categories.value = response.data.categories;
        } catch (error) {
          console.error(error);
        }

      };
      fetchCategories();

      
    })

    return {
      handleButtonClick,
      para,
      inputValue,
      defaultImages,
      handleUpload,
      handleRemove,
      authStore,
      categories
    };
  },
};
</script>
