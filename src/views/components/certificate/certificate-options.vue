<template>
  <div>
    <p>
      Questa procedura guidata ti aiuterà nella scelta del certificato,
      illustrandoti la procedura e la documentazione necessaria.
    </p>
    <p class="mt-4">Scegli il tipo di documento da richiedere:</p>
    <ul class="mt-5">
      <li v-for="opt of Object.keys(currentStepData)" :key="opt">
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

const props = defineProps({
  currentStepData: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits({
  "update-path": String,
});

const onClickOption = (typeOfCertificate) => {
  emit("update-path", typeOfCertificate);
};
</script>
