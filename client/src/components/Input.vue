<template>
  <div class="my-5">
    <label class="block text-gray-700 text-sm font-bold mb-2">
      {{ label }}
    </label>
    <input
      :type="type"
      :class="['py-2 px-4 rounded', inputClass]"
      :id="inputId"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      @input="handleInput"
    >
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    inputClass: {
      type: String,
      default: ''
    },
    inputId: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const handleInput = (event) => {
      emit('update:modelValue', event.target.value);
    };

    return {
      handleInput
    };
  }
});
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 5px;
}
</style>
