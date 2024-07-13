<template>
  <div class="multi-image-uploader">
    <div class="preview">
      <div v-for="(image, index) in defaultImages" :key="'default-' + index" class="image-container">
        <img :src="image.imageData" :alt="image.name">
        <strong>{{ image.name }}</strong>
        <div>{{ formatSize(image.size) }}</div>
        <Button btnClass="btn-red remove-button" @btnClick="removeDefaultImage(index)">&#x2716;</Button>
      </div>
    </div>

    <div class="upload-btn-wrapper">
      <Button btnClass="btn-black upload-label"><ArrowUpOnSquareIcon class="size-6" />Add Images</Button>
      <input type="file" ref="fileInput" multiple @change="handleFileChange">
    </div>

    <div class="preview" id="preview-container">
      <div v-for="(image, index) in selectedImages" :key="'selected-' + index" class="image-container">

          <img :src="image.imageData" :alt="image.name" >
          <strong>{{ image.name }}</strong>
          <div>{{ formatSize(image.size) }}</div>
          <button class="remove-button" @click="removeImage(index)">&#x2716;</button>
        </div>
    
    </div>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import Button from '@/components/Button.vue';
import { ArrowUpOnSquareIcon } from '@heroicons/vue/16/solid'

export default {
  components: {toast, Button, ArrowUpOnSquareIcon},
  props: {
    defaultImages: {
      type: Array,
      default: () => []
    },
    maxImages: {
      type: Number,
      default: 7
    },
    maxFileSize: {
      type: Number,
      default: 5242880 // 5MB
    },
    allowedExtensions: {
      type: Array,
      default: () => ['jpg', 'jpeg', 'png', 'gif']
    }
  },
  data() {
    return {
      selectedImages: [],
      defaultImagesRemaining: []
    };
  },
  computed: {
    allImages() {
      return [...this.defaultImages, ...this.selectedImages];
    }
  },
  methods: {
    handleFileChange(e) {
      const files = e.target.files;
      const totalFiles = files.length;

      if (this.allImages.length + totalFiles > this.maxImages) {
        this.onError('Maximum ' + this.maxImages + ' images allowed.');
        return;
      }

      for (let i = 0; i < totalFiles; i++) {
        const file = files[i];

        if (!this.validateImage(file)) {
          continue;
        }

        const reader = new FileReader();
        reader.onload = () => {
          const imageObject = {
            name: file.name,
            size: file.size,
            imageData: reader.result
          };
          this.selectedImages.push(imageObject);
          this.onUpload(file);
        };
        reader.readAsDataURL(file);
      }
    },
    removeImage(index) {
      this.selectedImages.splice(index, 1);
      this.onRemove(index + this.defaultImages.length);
    },
    removeDefaultImage(index) {
      this.$emit('removeDefaultImage', index);
    },
    validateImage(file) {
      const fileName = file.name;
      const fileExtension = fileName.split('.').pop().toLowerCase();
      const fileSize = file.size;

      if (!this.allowedExtensions.includes(fileExtension)) {
        this.onError('Invalid file type: ' + fileExtension);
        return false;
      }

      if (fileSize > this.maxFileSize) {
        this.onError('File size exceeds the limit.');
        return false;
      }

      return true;
    },
    formatSize(bytes) {
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes === 0) return '0 Bytes';
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    },
    onError(errorMessage) {
      toast.error(errorMessage);
      // this.$emit('error', errorMessage);
    },
    onUpload(file) {
      this.$emit('upload', file);
    },
    onRemove(index) {
      this.$emit('remove', index);
    }
  }
};
</script>

<style scoped>
  /* Your CSS styles here */
  .preview {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
  }
  
  #preview-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
  }
  
  .image-container {
      position: relative;
      width: 200px;
      margin: 10px;
      padding: 5px;
      background-color: #f5f5f5;
      display: inline-flex;
      flex-direction: column;
      border-radius: 10px  !important;
  }
  
  .image-container img {
      display: block;
      max-width: 100%;
      width: 200px;
      height: 150px;
      margin-bottom: 10px;
      border-radius: 10px;
  }
  
  .preview-item .name {
      font-weight: bold;
      margin-bottom: 5px;
      font-size: 11px;
  }
  
  .preview-item .size {
      font-size: 12px;
      color: #666;
      margin-bottom: 10px;
  }
  
  .remove-button {
      position: absolute;
      top: 0;
      right: 0;
      margin: 5px;
      padding: 5px;
      background-color: #ff4444;
      color: #fff;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: background-color 0.2s;
  }
  
  .preview-item .remove:hover {
      background-color: #cc0000;
  }
  
  @media (max-width: 600px) {
      .preview-item {
          width: 100%;
      }
  }
  
  @media (max-width: 480px){
      .image-container{
          width: 130px;
      }
  }
  
  .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
  
  
  .upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }

  </style>
  