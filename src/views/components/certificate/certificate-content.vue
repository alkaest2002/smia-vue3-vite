<template>
  <div v-html="content" />
</template>

<script>
export default {
  // name
  name: "CertificateContent",

  // props
  props: {
    choice: {
      type: Object,
      required: true,
    },

    content: {
      type: String,
      default: "",
    },
  },
};
</script>
