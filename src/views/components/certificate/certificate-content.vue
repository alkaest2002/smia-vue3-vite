<template>
  <div v-html="currentStepData.content" />
</template>

<script>
export default {
  name: "CertificateContent",

  props: {
    currentStepData: {
      type: Object,
      required: true,
    },
  },
};
</script>
