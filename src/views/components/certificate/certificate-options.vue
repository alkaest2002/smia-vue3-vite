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
const props = defineProps({
  currentStepData: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits({
  "update-path": String,
});

const certificates = Object.keys(props.currentStepData);

const onClickCertificate = (cert) => emit("update-path", cert);
</script>
