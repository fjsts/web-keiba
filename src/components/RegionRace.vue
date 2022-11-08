<template> 
  <TabGroup>
    <TabList>
      <div class="py-3">4.レースを選択してください</div>

      <Tab class="selction-btn w-1/6">1R</Tab>
      <Tab class="selction-btn w-1/6">2R</Tab>
      <Tab class="selction-btn w-1/6">3R</Tab>
      <Tab class="selction-btn w-1/6">4R</Tab>
      <Tab class="selction-btn w-1/6">5R</Tab>
      <Tab class="selction-btn w-1/6">6R</Tab>
      <Tab class="selction-btn w-1/6">7R</Tab>
      <Tab class="selction-btn w-1/6">8R</Tab>
      <Tab class="selction-btn w-1/6">9R</Tab>
      <Tab class="selction-btn w-1/6">10R</Tab>
      <Tab class="selction-btn w-1/6">11R</Tab>
      <Tab class="selction-btn w-1/6">12R</Tab>

    </TabList>
    <hr class="my-4 h-px bg-gray-600">
      <TabPanels>
        <TabPanel><RegionTable race_no="1" :region="region" :id="id1" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><RegionTable race_no="2" :region="region" :id="id2" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><RegionTable race_no="3" :region="region" :id="id3" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><RegionTable race_no="4" :region="region" :id="id4" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><RegionTable race_no="5" :region="region" :id="id5" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><RegionTable race_no="6" :region="region" :id="id6" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><RegionTable race_no="7" :region="region" :id="id7" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><RegionTable race_no="8" :region="region" :id="id8" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><RegionTable race_no="9" :region="region" :id="id9" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><RegionTable race_no="10" :region="region" :id="id10" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><RegionTable race_no="11" :region="region" :id="id11" :area="area" :day="day" :csv="csv"/></TabPanel>
        <TabPanel><RegionTable race_no="12" :region="region" :id="id12" :area="area" :day="day" :csv="csv"/></TabPanel>
      </TabPanels>
    </TabGroup>
</template>


<script setup>
  import { v4 as uuidv4 } from 'uuid';
  import { defineComponent } from "vue";
  import RegionTable from './RegionTable.vue'
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

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


</script>