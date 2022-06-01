<template>
  <base-layout>
    <div class="is-flex is-justify-content-center is-align-items-center">
      <div style="width: 100%">
        <app-hero :size="3" />
        <div class="box is-fixed-box mt-4 p-6">
          <h2 class="is-size-4 has-text-weight-bold mb-5">Chi siamo</h2>
          <div>
            <p>
              Presso lo studio medico Izzo-Arduino, lavorano ufficiali medici in
              servizio permanente effettivo.
            </p>
            <p>
              I sanitari sono autorizzati ad accertare il possesso dei requisiti
              psico-fisici per il rilascio di documenti e certificati di varia
              natura.
            </p>
            <p>
              Inoltre, i sanitari effettuano interventi psicoterapici e
              farmacologici, consulenze medico-legali, assistenza
              infortunistica, pratiche pensionistiche, nonché valutazioni
              neurologiche e psichiatriche per atti amministrativi e giudiziari.
            </p>
          </div>
          <div class="mt-6">
            <p><strong>Dott. Gualberto Arduino</strong>, Medico Psichiatra.</p>
            <p><strong>Dott. Simeone Izzo</strong>, Medico Psichiatra.</p>
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>
export default {
  name: "SmiaAbout",
};
</script>

<style lang="scss" scoped>
.box {
  p {
    margin-bottom: 10px;
  }
}
</style>
