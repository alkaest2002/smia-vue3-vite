<template>
  <base-layout>
    <div class="is-flex is-justify-content-center is-align-items-center">
      <div style="width: 100%">
        <app-hero :size="3" />
        <div id="box-content" class="box is-fixed-box mt-4 p-6 is-relative">
          <p class="is-size-4 has-text-weight-bold mb-5">{{ title }}</p>
          <transition name="fade" mode="out-in">
            <component
              :is="components[step]"
              v-model:choice="choice"
              :content="content"
              class="mb-6"
            />
          </transition>
          <div v-show="showBackButton" id="back">
            <button
              id="back-button"
              class="button is-success"
              @click="onClickBack"
            >
              &#8592;
            </button>
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>
export default {
   name: "SmiaCertificates",
};
</script>

<script setup>
import { ref, computed, watch } from "vue";
import { certificatesData } from "@/data/certificates-data";
import certificateStart from "./components/certificate/certificate-start.vue";
import certificateOptions from "./components/certificate/certificate-options.vue";
import certificateContent from "./components/certificate/certificate-content.vue";

const components = {
  certificateStart, certificateOptions, certificateContent
};

// ref step
let step = ref("certificateStart");

// ref choice
const choice = ref({});

// ref path
const path = ref([]);

// computed title
const title = computed(
  () =>
    path.value.reduce((acc, itr) => {
      acc = acc.length > 0 ? acc + " - " + itr.value : itr.value;
      return acc;
    }, "") || "Certificati"
);

// computed content
const content = computed(() => {
  // clone path
  const clonedPath = [...path.value];
  // get data from json
  let data = clonedPath.reduce((acc, itr) => {
    acc = acc ? acc[itr.value] : certificatesData[itr.value];
    return acc;
  }, null);
  // return data or empry string
  return data?.content || "";
});

// computed show back button
const showBackButton = computed(() => step.value != "certificateStart");

// watch choice
watch(choice, (choiceValue) => {
  // get value
  const { value } = choiceValue;
  // compute step in path
  const toPath = { ...choiceValue, step: step.value };
  // add step to path
  path.value = [...path.value, toPath];
  // if value is patent*
  if (/patent[ei]/i.test(value)) return (step.value = "certificateOptions");
  // set component
  step.value = "certificateContent";
});

// handle on click back
const onClickBack = () => {
  // get last element
  const spliced = path.value.splice(-1, 1)[0];
  // set component
  step.value = spliced.step;
};
</script>

<style lang="scss" scoped>
#back {
  position: absolute;
  bottom: +30px;

  #back-button {
    width: 100px;
  }
}
</style>
