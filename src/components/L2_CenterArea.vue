<template>
  <div class="py-3">
    <p class="py-1 text-sm">3.競馬場を選択してください</p>
    <TabGroup>
      <TabList>
        <Tab id="tokyo" class="w-1/3 selction-btn text-xs">
          東京<br>(<span id="tokyo_count"></span>件)
        </Tab>
        <Tab id="hanshin" class="w-1/3 selction-btn text-xs">
          阪神<br>(<span id="hanshin_count"></span>件)
        </Tab>
        <Tab id="fukushima" class="w-1/3 selction-btn text-xs">
          福島<br>(<span id="fukushima_count"></span>件)
        </Tab>

        <Tab id="chukyo" class="w-1/3 selction-btn text-xs">
          中京<br>(<span id="chukyo_count"></span>件)
        </Tab>
        <Tab id="nakayama" class="w-1/3 selction-btn text-xs">
          中山<br>(<span id="nakayama_count"></span>件)
        </Tab>
        <Tab id="hakodate" class="w-1/3 selction-btn text-xs">
          函館<br>(<span id="hakodate_count"></span>件)
        </Tab>

        <Tab id="kokura" class="w-1/3 selction-btn text-xs">
          小倉<br>(<span id="kokura_count"></span>件)
        </Tab>
        <Tab id="niigata" class="w-1/3 selction-btn text-xs">
          新潟<br>(<span id="niigata_count"></span>件)
        </Tab>
        <Tab id="kyoto" class="w-1/3 selction-btn text-xs">
          京都<br>(<span id="kyoto_count"></span>件)
        </Tab>

      </TabList>

      <TabPanels>
        <TabPanel>
          <RegionRace area="東京" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel>
          <RegionRace area="阪神" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel>
          <RegionRace area="福島" :region="region" :day="day" :csv="data" />
        </TabPanel>

        <TabPanel>
          <RegionRace area="中京" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel>
          <RegionRace area="中山" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel>
          <RegionRace area="函館" :region="region" :day="day" :csv="data" />
        </TabPanel>

        <TabPanel>
          <RegionRace area="小倉" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel>
          <RegionRace area="新潟" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel>
          <RegionRace area="京都" :region="region" :day="day" :csv="data" />
        </TabPanel>

      </TabPanels>
    </TabGroup>
  </div>
</template>


<script setup>
import { onMounted } from '@vue/runtime-core'
import RegionRace from './L3_Race.vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const props = defineProps({
  csv: Object,
  day: String,
  region: String
})


const data = props.csv

const area_list = {
  chukyo: "中京",
  nakayama: "中山",
  kyoto: "京都",

  hakodate: "函館",
  kokura: "小倉",
  niigata: "新潟",

  tokyo: "東京",
  fukushima: "福島",
  hanshin: "阪神"
}

function region_counter(area) {
  let count = 0;
  let race_id = '';
  for (let i = 0; i < data.length; i++) {
    if ((data[i].date == props.day) && (data[i].area == area)) {
      if (race_id == '') { race_id = data[i].race_id; count = 1; }
      if (race_id != data[i].race_id) {
        count = count + 1
        race_id = data[i].race_id
      }
    }
  }
  return count
}

onMounted(() => {
  for (let key in area_list) {
    let count = region_counter(area_list[key])
    document.getElementById(key + "_count").innerHTML = count;
    if (count == 0) {
      document.getElementById(key).classList.add("opacity-50")
    }
  }
})


</script>