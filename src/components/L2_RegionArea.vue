<template>
  <div class="py-3">
    <p class="py-1 text-sm">3.競馬場を選択してください</p>
    <TabGroup>
      <TabList>
        <Tab id="kawasaki" class="w-1/3 selction-btn text-sm">
          川崎<br>(<span id="kawasaki_count"></span>件)
        </Tab>
        <Tab id="nagoya" class="w-1/3 selction-btn text-sm">
          名古屋<br>(<span id="nagoya_count"></span>件)
        </Tab>
        <Tab id="kochi" class="w-1/3 selction-btn text-sm">
          高知<br>(<span id="kochi_count"></span>件)
        </Tab>
        <Tab id="mizusawa" class="w-1/3 selction-btn text-sm">
          水沢<br>(<span id="mizusawa_count"></span>件)
        </Tab>
        <Tab id="sonoda" class="w-1/3 selction-btn text-sm">
          園田<br>(<span id="sonoda_count"></span>件)
        </Tab>
        <Tab id="saga" class="w-1/3 selction-btn text-sm">
          佐賀<br>(<span id="saga_count"></span>件)
        </Tab>
        <Tab id="funabashi" class="w-1/3 selction-btn text-sm">
          船橋<br>(<span id="funabashi_count"></span>件)
        </Tab>
        <Tab id="kasamatsu" class="w-1/3 selction-btn text-sm">
          笠松<br>(<span id="kasamatsu_count"></span>件)
        </Tab>
        <Tab id="urawa" class="w-1/3 selction-btn text-sm">
          浦和<br>(<span id="urawa_count"></span>件)
        </Tab>
        <Tab id="himeji" class="w-1/3 selction-btn text-sm">
          姫路<br>(<span id="himeji_count"></span>件)
        </Tab>
        <Tab id="ooi" class="w-1/3 selction-btn text-sm">
          大井<br>(<span id="ooi_count"></span>件)
        </Tab>
        <Tab id="kanazawa" class="w-1/3 selction-btn text-sm">
          金沢<br>(<span id="kanazawa_count"></span>件)
        </Tab>
        <Tab id="monbetsu" class="w-1/3 selction-btn text-sm">
          門別<br>(<span id="monbetsu_count"></span>件)
        </Tab>
        <Tab id="morioka" class="w-1/3 selction-btn text-sm">
          盛岡<br>(<span id="morioka_count"></span>件)
        </Tab>
        <Tab id="obihiro" class="w-1/3 selction-btn text-sm">
          帯広<br>(<span id="obihiro_count"></span>件)
        </Tab>
      </TabList>

      <TabPanels id="tab_panel">
        <TabPanel id="p_kawasaki">
          <RegionRace area="川崎" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel id="p_nagoya">
          <RegionRace area="名古屋" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel id="p_kochi">
          <RegionRace area="高知" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel id="p_mizusawa">
          <RegionRace area="水沢" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel id="p_sonoda">
          <RegionRace area="園田" :region="region" :day="day" :csv="data" />
        </TabPanel>

        <TabPanel id="p_saga">
          <RegionRace area="佐賀" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel id="p_funabashi">
          <RegionRace area="船橋" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel id="p_kasamatsu">
          <RegionRace area="笠松" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel id="p_urawa">
          <RegionRace area="浦和" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel id="p_himeji">
          <RegionRace area="姫路" :region="region" :day="day" :csv="data" />
        </TabPanel>

        <TabPanel id="p_ooi">
          <RegionRace area="大井" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel id="p_kanazawa">
          <RegionRace area="金沢" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel id="p_monbetsu">
          <RegionRace area="門別" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel id="p_morioka">
          <RegionRace area="盛岡" :region="region" :day="day" :csv="data" />
        </TabPanel>
        <TabPanel id="p_obihiro">
          <RegionRace area="帯広(ば)" :region="region" :day="day" :csv="data" />
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
  kawasaki: "川崎",
  nagoya: "名古屋",
  kochi: "高知",
  mizusawa: "水沢",
  sonoda: "園田",
  saga: "佐賀",
  funabashi: "船橋",
  kasamatsu: "笠松",
  urawa: "浦和",
  himeji: "姫路",
  ooi: "大井",
  kanazawa: "金沢",
  monbetsu: "門別",
  morioka: "盛岡",
  obihiro: "帯広"
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