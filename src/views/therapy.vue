<template>
  <base-layout>
    <div class="is-flex is-justify-content-center is-align-items-center">
      <div style="width: 100%">
        <app-hero :size="3" />
        <div id="box-content" class="box is-fixed-box mt-4 p-6">
          <h2 class="is-size-4 has-text-weight-bold mb-5">Terapie</h2>
          <div>
            <b class="header"> INTRODUZIONE </b>
            <p>
              La vita quotidiana espone ogni persona ai problemi derivanti
              dall’essere inseriti in una rete complessa di rapporti (a lavoro,
              a scuola, in famiglia, nel tempo libero). In tali contesti, il
              carattere e/o la personalità possono essere causa di frustrazioni
              (insuccessi, litigi, problemi coniugali, sessuali, alimentari,
              ecc.) e disturbare significativamente e per lungo tempo
              l’equilibrio personale. Non sempre bastano la forza di volontà o i
              consigli degli altri, tanto meno il ricorso all’auto-terapia.
              Affidarsi alle cure di specialisti resta la soluzione migliore per
              riacquistare il benessere perduto.
            </p>
            <b class="header mt-4"> PERCORSO TERAPEUTICO </b>
            <p>
              Un trattamento efficace consiste nell’associazione di terapia
              farmacologia e psicoterapia. La prima si effettua con medicine
              specifiche che normalizzano il funzionamento di particolari
              sostanze del cervello chiamate neuro-trasmettitori. La seconda si
              effettua mediante dei colloqui, condotti secondo particolari
              tecniche, con lo scopo di identificare la personalità del cliente
              e cambiare quei tratti comportamentali e quelle modalità di
              pensiero che sono all’origine del cattivo adattamento
              all’ambiente.
            </p>
            <b class="header mt-4"> DISTURBI TRATTATI </b>
            <p>
              I principali disturbi che si possono trattare con successo sono:
              fobie, attacchi di panico disturbi da stress, del sonno, cefalee,
              disturbi della personalità, disturbi psicosomatici, disturbi
              sessuali, disturbi della condotta alimentare.
            </p>
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>
export default {
  name: "SmiaTherapy",
};
</script>

<style lang="scss" scoped>
.box {
  p {
    margin-bottom: 10px;
  }
  .header {
    display: inline-block;
  }
}
</style>
