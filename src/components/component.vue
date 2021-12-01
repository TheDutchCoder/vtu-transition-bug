<template>
  <transition
    enter-active-class="transition duration-150 ease-in-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
    @after-enter="doShow"
  >
    <div v-if="show">thing</div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Component',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const show = ref(props.show);
    const doShow = () => {
      console.log('show');
      show.value = true;
    };

    return {
      show,
      doShow,
    };
  },
});
</script>
