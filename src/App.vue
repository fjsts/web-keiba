

<template> 
<div id="app">
  <v-tabs>
    <v-tab>Item One</v-tab>
    <v-tab>Item Two</v-tab>
    <v-tab>Item Three</v-tab>
  </v-tabs>

  <div>
    <h2><p>福島</p></h2>
    <PredictTable area="福島" race_no="1" id="fuku1"/>
    <PredictTable area="福島" race_no="2" id="fuku2"/>
    <PredictTable area="福島" race_no="3" id="fuku3"/>
    <PredictTable area="福島" race_no="4" id="fuku4"/>
    <PredictTable area="福島" race_no="5" id="fuku5"/>
    <PredictTable area="福島" race_no="6" id="fuku6"/>
    <PredictTable area="福島" race_no="7" id="fuku7"/>
    <PredictTable area="福島" race_no="8" id="fuku8"/>
    <PredictTable area="福島" race_no="9" id="fuku9"/>
    <PredictTable area="福島" race_no="10" id="fuku10"/>
    <PredictTable area="福島" race_no="11" id="fuku11"/>
    <PredictTable area="福島" race_no="12" id="fuku12"/>
</div>

  <div>
      <h2><p>東京</p></h2>
      <PredictTable area="東京" race_no="1" id="tokyo1"/>
      <PredictTable area="東京" race_no="2" id="tokyo2"/>
      <PredictTable area="東京" race_no="3" id="tokyo3"/>
      <PredictTable area="東京" race_no="4" id="tokyo4"/>
      <PredictTable area="東京" race_no="5" id="tokyo5"/>
      <PredictTable area="東京" race_no="6" id="tokyo6"/>
      <PredictTable area="東京" race_no="7" id="tokyo7"/>
      <PredictTable area="東京" race_no="8" id="tokyo8"/>
      <PredictTable area="東京" race_no="9" id="tokyo9"/>
      <PredictTable area="東京" race_no="10" id="tokyo10"/>
      <PredictTable area="東京" race_no="11" id="tokyo11"/>
      <PredictTable area="東京" race_no="12" id="tokyo12"/>
  </div>

  <div>
      <h2><p>阪神</p></h2>
      <PredictTable area="阪神" race_no="1" id="hanshin1"/>
      <PredictTable area="阪神" race_no="2" id="hanshin2"/>
      <PredictTable area="阪神" race_no="3" id="hanshin3"/>
      <PredictTable area="阪神" race_no="4" id="hanshin4"/>
      <PredictTable area="阪神" race_no="5" id="hanshin5"/>
      <PredictTable area="阪神" race_no="6" id="hanshin6"/>
      <PredictTable area="阪神" race_no="7" id="hanshin7"/>
      <PredictTable area="阪神" race_no="8" id="hanshin8"/>
      <PredictTable area="阪神" race_no="9" id="hanshin9"/>
      <PredictTable area="阪神" race_no="10" id="hanshin10"/>
      <PredictTable area="阪神" race_no="11" id="hanshin11"/>
      <PredictTable area="阪神" race_no="12" id="hanshin12"/>
  </div>

</div>

</template>

<script>

import PredictTable from './components/PredictTable.vue'
export default {
  components: {
    PredictTable,
  }
}

</script>

<style></style>