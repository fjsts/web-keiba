<template> 
    <div class="py-3">

  <span class="py-3">4.レースを選択してください</span>
  <TabGroup>
    <TabList>
      <Tab :id=id_1r class="selction-btn w-1/4 text-xs opacity-50">1R</Tab>
      <Tab :id=id_2r class="selction-btn w-1/4 text-xs opacity-50">2R</Tab>
      <Tab :id=id_3r class="selction-btn w-1/4 text-xs opacity-50">3R</Tab>
      <Tab :id=id_4r class="selction-btn w-1/4 text-xs opacity-50">4R</Tab>
      <Tab :id=id_5r class="selction-btn w-1/4 text-xs opacity-50">5R</Tab>
      <Tab :id=id_6r class="selction-btn w-1/4 text-xs opacity-50">6R</Tab>
      <Tab :id=id_7r class="selction-btn w-1/4 text-xs opacity-50">7R</Tab>
      <Tab :id=id_8r class="selction-btn w-1/4 text-xs opacity-50">8R</Tab>
      <Tab :id=id_9r class="selction-btn w-1/4 text-xs opacity-50">9R</Tab>
      <Tab :id=id_10r class="selction-btn w-1/4 text-xs opacity-50">10R</Tab>
      <Tab :id=id_11r class="selction-btn w-1/4 text-xs opacity-50">11R</Tab>
      <Tab :id=id_12r class="selction-btn w-1/4 text-xs opacity-50">12R</Tab>

    </TabList>
      <TabPanels>
        <TabPanel><L4_Table race_no="1" :region="region" :id="id1" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><L4_Table race_no="2" :region="region" :id="id2" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><L4_Table race_no="3" :region="region" :id="id3" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><L4_Table race_no="4" :region="region" :id="id4" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><L4_Table race_no="5" :region="region" :id="id5" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><L4_Table race_no="6" :region="region" :id="id6" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><L4_Table race_no="7" :region="region" :id="id7" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><L4_Table race_no="8" :region="region" :id="id8" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><L4_Table race_no="9" :region="region" :id="id9" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><L4_Table race_no="10" :region="region" :id="id10" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><L4_Table race_no="11" :region="region" :id="id11" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><L4_Table race_no="12" :region="region" :id="id12" :area="area" :day="day" :csv="csv"/></TabPanel>
      </TabPanels>
    </TabGroup>
    </div>
</template>


<script setup>
  import { v4 as uuidv4 } from 'uuid';
  import { defineComponent } from "vue";
  import L4_Table from './L4_Table.vue'
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
  import { onMounted } from '@vue/runtime-core'

  const props = defineProps({
      csv: Object,
      day: String,
      area: String,
      region: String
  })

  const id1 = uuidv4()
  const id2 = uuidv4()
  const id3 = uuidv4()
  const id4 = uuidv4()
  const id5 = uuidv4()
  const id6 = uuidv4()
  const id7 = uuidv4()
  const id8 = uuidv4()
  const id9 = uuidv4()
  const id10 = uuidv4()
  const id11 = uuidv4()
  const id12 = uuidv4()

  const id_1r = uuidv4()
  const id_2r = uuidv4()
  const id_3r = uuidv4()
  const id_4r = uuidv4()
  const id_5r = uuidv4()
  const id_6r = uuidv4()
  const id_7r = uuidv4()
  const id_8r = uuidv4()
  const id_9r = uuidv4()
  const id_10r = uuidv4()
  const id_11r = uuidv4()
  const id_12r = uuidv4()

  const data = props.csv

  onMounted(() => {
    const update_race_name =(race_no, mark) =>{
      switch (race_no){
          case "1": document.getElementById(id_1r).innerHTML = mark + "1R"; break;
          case "2": document.getElementById(id_2r).innerHTML = mark + "2R"; break;
          case "3": document.getElementById(id_3r).innerHTML = mark + "3R"; break;
          case "4": document.getElementById(id_4r).innerHTML = mark + "4R"; break;
          case "5": document.getElementById(id_5r).innerHTML = mark + "5R"; break;
          case "6": document.getElementById(id_6r).innerHTML = mark + "6R"; break;
          case "7": document.getElementById(id_7r).innerHTML = mark + "7R"; break;
          case "8": document.getElementById(id_8r).innerHTML = mark + "8R"; break;
          case "9": document.getElementById(id_9r).innerHTML = mark + "9R"; break;
          case "10": document.getElementById(id_10r).innerHTML = mark + "10R"; break;
          case "11": document.getElementById(id_11r).innerHTML = mark + "11R"; break;
          case "12": document.getElementById(id_12r).innerHTML = mark + "12R"; break;
        }      
    }


    const rank1 = "◎"
    const rank2 = "○"
    const rank3 = "△"
    for (let i = 0; i < data.length; i++) {
      if ((data[i].date == props.day) && (data[i].area == props.area)) {
        switch (data[i].race_no){
            case "1": document.getElementById(id_1r).classList.remove("opacity-50"); break;
            case "2": document.getElementById(id_2r).classList.remove("opacity-50"); break;
            case "3": document.getElementById(id_3r).classList.remove("opacity-50"); break;
            case "4": document.getElementById(id_4r).classList.remove("opacity-50"); break;
            case "5": document.getElementById(id_5r).classList.remove("opacity-50"); break;
            case "6": document.getElementById(id_6r).classList.remove("opacity-50"); break;
            case "7": document.getElementById(id_7r).classList.remove("opacity-50"); break;
            case "8": document.getElementById(id_8r).classList.remove("opacity-50"); break;
            case "9": document.getElementById(id_9r).classList.remove("opacity-50"); break;
            case "10": document.getElementById(id_10r).classList.remove("opacity-50"); break;
            case "11": document.getElementById(id_11r).classList.remove("opacity-50"); break;
            case "12": document.getElementById(id_12r).classList.remove("opacity-50"); break;
          }  
        if (data[i].y_pred_value_race_rank == 1) {
          update_race_name(data[i].race_no, rank1)     
        }

        if (data[i].y_pred_value_race_rank == 2) {
          update_race_name(data[i].race_no, rank2)     
        }

        if (data[i].y_pred_value_race_rank == 3) {
          update_race_name(data[i].race_no, rank3)     
        }
      }
    }
  })




</script>