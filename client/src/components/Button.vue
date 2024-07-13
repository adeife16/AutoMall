<template>
    <button
      :class="[
        'py-2 px-4 rounded',
        btnClass]"
      :type="type"
      :disabled="btnDisabled"
      @click="handleClick"
    >
      <slot name="icon"></slot>
      <slot name="default">{{ text }}</slot>
    </button>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      text: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'button',
      },
      btnDisabled: {
        type: Boolean,
        default: false,
      },
      btnClass: {
        type: String,
        default: '',
      },
      color: {
        type: String,
        default: '',
      },
    },
    methods: {
      handleClick() {
        this.$emit('btnClick'); // Emit the 'click' event
      },
    },
  });
  </script>
  
  <style scoped>
  /* Add basic button styles here */
  </style>
  