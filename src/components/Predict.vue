

<template>
  <div class="py-2">
    <p class="text-center text-lg ">レースを選択してください</p>
    <p class="mt-5 text-sm">1.日付を選択してください</p>
    <TabGroup>
      <TabList>
        <Tab id="today" class="selection-btn selection-today_tomorrow opacity-20">
          {{ today_disp }}<br>(<span id="today_count"></span>件)
        </Tab>
        <Tab id="tomorrow" class="selection-btn selection-today_tomorrow opacity-20">
          {{ tomorrow_disp }}<br>(<span id="tomorrow_count"></span>件)
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CenterRegion :day="today" :region_csv="region_csv" :center_csv="center_csv" />
        </TabPanel>
        <TabPanel>
          <CenterRegion :day="tomorrow" :region_csv="region_csv" :center_csv="center_csv" />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>

</template>

<script setup>
import { defineComponent } from "vue";
import CenterRegion from './Predict/L1_CenterRegion.vue'
import AdSense from './AdSense.vue'
import region_csv from '../../data/region_predict.csv'
import center_csv from '../../data/center_predict.csv'

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { onMounted } from '@vue/runtime-core'

defineComponent({
  components: { TabGroup, TabList, Tab, TabPanels, TabPanel }
});

const props = defineProps({
    region_csv: Object,
    center_csv: Object
})


function formatDate(dt) {
  dt = new Date(dt)
  var y = dt.getFullYear();
  var m = ('00' + (dt.getMonth() + 1)).slice(-2);
  var d = ('00' + dt.getDate()).slice(-2);
  return (y + '-' + m + '-' + d);
}

function formatWeek(dt) {
  var dt_disp = dt.slice(-5).replace('-', '/')

  dt = new Date(dt)
  var dayOfWeek = dt.getDay();
  var dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];
  return (dt_disp + '(' + dayOfWeekStr + ')');

}

const now = new Date()
const today = formatDate(now);
const tomorrow = formatDate(now.setDate(now.getDate() + 1));

const today_disp = formatWeek(today)
const tomorrow_disp = formatWeek(tomorrow)

const upt_date = document.lastModified

function counter(date) {
  let count = 0;
  let race_id = '';
  for (let i = 0; i < center_csv.length; i++) {
    if (center_csv[i].date == date) {
      if (race_id == '') { race_id = center_csv[i].race_id; count = 1; }
      if (race_id != center_csv[i].race_id) {
        count = count + 1
        race_id = center_csv[i].race_id
      }
    }
  }

  for (let i = 0; i < region_csv.length; i++) {
    if (region_csv[i].date == date) {
      if (race_id == '') { race_id = region_csv[i].race_id; count = 1; }
      if (race_id != region_csv[i].race_id) {
        count = count + 1
        race_id = region_csv[i].race_id
      }
    }
  }
  return count
}

onMounted(() => {
  let today_count = counter(today)
  let tomorrow_count = counter(tomorrow)
  document.getElementById("today_count").innerHTML = today_count;
  document.getElementById("tomorrow_count").innerHTML = tomorrow_count;


  if (today_count != 0) {
        document.getElementById("today").classList.remove("opacity-20");
    }

    if (tomorrow_count != 0) {
        document.getElementById("tomorrow").classList.remove("opacity-20");
    }

})

</script>

<style>

</style>