<template>
  <div>
    <p>
      Questa procedura guidata ti aiuterà nella scelta del certificato,
      illustrandoti le modalità di presentazione della domanda.
    </p>
    <p class="mt-4">Scegli il certificato:</p>
    <ul class="mt-5">
      <li v-for="cert of certificates" :key="cert">
        <a href="#" @click.prevent="onClickCertificate(cert)">{{ cert }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CertificateStart",
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

const certificates = ref([
  "Patente CIG",
  "Patente A",
  "Patente B",
  "Altre patenti",
  "Sport",
  "Volo",
  "Armi",
  "Altri certificati",
]);

const onClickCertificate = (typeOfCertificate) => 
  emit("update:choice", {
    type: "choice",
    value: typeOfCertificate,
  });
</script>
