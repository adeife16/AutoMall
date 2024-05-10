<template>
  <div class="home">
    <h1>This is an home page</h1>
    <Button btnClass="btn-yellow border-white" @btnClick="handleButtonClick">
      <span>
        <ArrowRightEndOnRectangleIcon class="size-6" />Button
      </span>
    </Button>
    <Input type="email" disabled placeholder="Placeholder" inputClass="border-black" v-model="para" />
    <p v-if="para">{{ para }}</p>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
import { ArrowRightEndOnRectangleIcon } from '@heroicons/vue/16/solid'
import { ref } from 'vue'

export default {
  name: 'HomeView',
  components: {
    Button,
    ArrowRightEndOnRectangleIcon,
    Input
  },
  props: {
    
  },
  setup() {
    const para = ref('');
    const handleButtonClick = () => {
      console.log("Clicked")
    }

    const inputValue = (value) => {
      para.value = value
    }

    return {handleButtonClick, para, inputValue}
  } 
}
</script>
