<template>
  <div>
    <p>
      Questa procedura guidata ti aiuterà nella scelta del certificato,
      illustrandoti la procedura e la documentazione necessaria.
    </p>
    <p class="mt-4">Scegli il tipo di documento da richiedere:</p>
    <ul class="mt-5">
      <li v-for="opt of options" :key="opt">
        <a href="#" @click.prevent="onClickOption(opt)">{{ opt }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CertificateOptions",
}
</script>

<script setup>
/* eslint-disable no-unused-vars */
import { ref } from "vue";

const props = defineProps({
  choice: {
    type: Object,
    required: true,
  },

  content: {
    type: String,
    default: "",
  },
});

const emit = defineEmits({
  "update:choice": Object,
});

const options = ref([
  "Primo conseguimento",
  "Rinnovo documento",
  "Duplicato documento",
]);

const onClickOption = (option) => {
  emit("update:choice", {
    type: "option",
    value: option,
  });
};
</script>
