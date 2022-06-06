<template>
  <base-layout>
    <div class="is-flex is-justify-content-center is-align-items-center">
      <div style="width: 100%">
        <app-hero :size="3" />
        <div id="box-content" class="box is-fixed-box mt-4 p-6 is-relative">
          <p class="is-size-4 has-text-weight-bold mb-5">{{ title }}</p>
          <transition name="fade" mode="out-in">
            <component
              :is="currentComponent"
              :current-step-data="currentStepData"
              class="mb-6"
              @update-path="onUpdatePath"
            />
          </transition>
          <div v-show="path.length" id="back">
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
import { ref, computed } from "vue";
import { certificatesData } from "@/data/certificates-data";
import certificateStart from "./components/certificate/certificate-start.vue";
import certificateOptions from "./components/certificate/certificate-options.vue";
import certificateContent from "./components/certificate/certificate-content.vue";

const path = ref([]);

const currentStepData = computed(() => path.value.reduce((acc, itr) => acc = acc[itr], { ...certificatesData }));

const title = computed(() => ["Certificati", ...path.value].join(" - "));

const currentComponent = computed(() => {
  if (path.value.length == 0) return certificateStart;
  if (Object.keys(currentStepData.value).length > 1)
    return certificateOptions;
  return certificateContent;
});

const onUpdatePath = (newSegment) => path.value.push(newSegment)

const onClickBack = () => path.value.splice(-1, 1);
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
