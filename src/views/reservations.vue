<template>
  <base-layout>
    <div class="is-flex is-justify-content-center is-align-items-center">
      <div style="width: 100%">
        <app-hero :size="3" />
        <div id="box-content" class="box is-fixed-box mt-4 p-6">
          <h2 class="is-size-4 has-text-weight-bold mb-5">Prenotazioni</h2>
          <div>
            <b>CERTIFICATI MEDICI</b>
            <br />
            <u
              >Le visite mediche finalizzate al rilascio di certificazioni
              sanitarie</u
            >
            vengono effettuate tutte le sere, dal lunedì al venerdì, dalle ore
            19:00 alle ore 20:00,
            <u>senza necessità di prenotazione</u>, presso la sede di Guidonia
            in via Roma nr. 122 (Scala “A” interno 5, 1° Piano).
          </div>
          <div class="mt-5">
            <b>VISITE MEDICHE</b>
            <br />
            Per le visite mediche da effettuarsi per altri scopi, in altri orari
            o in sedi diverse da Guidonia si prega di contattare i sanitari al
            numero telefonico <app-phone /> e fissare un appuntamento.
          </div>
          <div class="mt-5">
            <b>CONSULENZE E PERIZIE</b>
            <br />
            Per consulenze e perizie medico-legali si prega di contattare i
            sanitari al numero telefonico <app-phone /> e fissare un
            appuntamento.
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>
export default {
  name: "SmiaReservations",
};
</script>
