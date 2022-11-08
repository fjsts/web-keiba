<template> 

<TabGroup>
    <TabList>
      <div class="py-3">3.競馬場を選択してください</div>

      <Tab class="w-1/4 selction-btn" id="kawasaki">川崎</Tab>
      <Tab class="w-1/4 selction-btn" id="nagoya">名古屋</Tab>
      <Tab class="w-1/4 selction-btn" id="kochi">高知</Tab>
      <Tab class="w-1/4 selction-btn" id="mizusawa">水沢</Tab>
      
      <Tab class="w-1/4 selction-btn" id="sonoda">園田</Tab>
      <Tab class="w-1/4 selction-btn" id="saga">佐賀</Tab>
      <Tab class="w-1/4 selction-btn" id="funabashi">船橋</Tab>
      <Tab class="w-1/4 selction-btn" id="kasamatsu">笠松</Tab>

      <Tab class="w-1/4 selction-btn" id="urawa">浦和</Tab>
      <Tab class="w-1/4 selction-btn" id="himeji">姫路</Tab>
      <Tab class="w-1/4 selction-btn" id="ooi">大井</Tab>
      <Tab class="w-1/4 selction-btn" id="kanazawa">金沢</Tab>

      <Tab class="w-1/4 selction-btn" id="monbetsu">門別</Tab>
      <Tab class="w-1/4 selction-btn" id="morioka">盛岡</Tab>
      <Tab class="w-1/4 selction-btn" id="obihiro">帯広(ば)</Tab>
      
    </TabList>

    <hr class="my-4 h-px bg-gray-600">

    <TabPanels>
      <TabPanel><RegionRace area="川崎"     :region="region" :day="day" :csv="data"/></TabPanel>
      <TabPanel><RegionRace area="名古屋"   :region="region" :day="day" :csv="data"/></TabPanel>
      <TabPanel><RegionRace area="高知"     :region="region" :day="day" :csv="data"/></TabPanel>
      <TabPanel><RegionRace area="水沢"     :region="region" :day="day" :csv="data"/></TabPanel>
      <TabPanel><RegionRace area="園田"     :region="region" :day="day" :csv="data"/></TabPanel>

      <TabPanel><RegionRace area="佐賀"     :region="region" :day="day" :csv="data"/></TabPanel>
      <TabPanel><RegionRace area="船橋"     :region="region" :day="day" :csv="data"/></TabPanel>
      <TabPanel><RegionRace area="笠松"     :region="region" :day="day" :csv="data"/></TabPanel>
      <TabPanel><RegionRace area="浦和"     :region="region" :day="day" :csv="data"/></TabPanel>
      <TabPanel><RegionRace area="姫路"     :region="region" :day="day" :csv="data"/></TabPanel>

      <TabPanel><RegionRace area="大井"     :region="region" :day="day" :csv="data"/></TabPanel>
      <TabPanel><RegionRace area="金沢"     :region="region" :day="day" :csv="data"/></TabPanel>
      <TabPanel><RegionRace area="門別"     :region="region" :day="day" :csv="data"/></TabPanel>
      <TabPanel><RegionRace area="盛岡"     :region="region" :day="day" :csv="data"/></TabPanel>
      <TabPanel><RegionRace area="帯広(ば)" :region="region" :day="day" :csv="data"/></TabPanel>

    </TabPanels>
  </TabGroup>
</template>


<script setup>
  import { onMounted } from '@vue/runtime-core'
  import RegionRace from './RegionRace.vue'
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

  const props = defineProps({
      csv: Object,
      day: String,
      region: String
  })


  const data = props.csv

  function region_counter (area){
    let count = 0;
    let race_id = '';
    for(let i = 0; i < data.length; i++){
        if ((data[i].date == props.day) && (data[i].area == area)){
            if (race_id == ''){race_id = data[i].race_id; count = 1;}
            if (race_id != data[i].race_id){
                count = count + 1    
                race_id = data[i].race_id
                }
            }        
        }
    return count
  }

onMounted(() => {
    document.getElementById("kawasaki").innerHTML = "川崎" + "(" + region_counter("川崎") + ")";
    document.getElementById("nagoya").innerHTML = "名古屋" + "(" + region_counter("名古屋") + ")";
    document.getElementById("kochi").innerHTML = "高知 " + "(" + region_counter("高知 ") + ")";
    document.getElementById("mizusawa").innerHTML = "水沢" + "(" + region_counter("水沢") + ")";
    document.getElementById("sonoda").innerHTML = "園田" + "(" + region_counter("園田") + ")";

    document.getElementById("saga").innerHTML = "佐賀" + "(" + region_counter("佐賀") + ")";
    document.getElementById("funabashi").innerHTML = "船橋" + "(" + region_counter("船橋") + ")";
    document.getElementById("kasamatsu").innerHTML = "笠松" + "(" + region_counter("笠松") + ")";
    document.getElementById("urawa").innerHTML = "浦和" + "(" + region_counter("浦和") + ")";
    document.getElementById("himeji").innerHTML = "姫路" + "(" + region_counter("姫路") + ")";

    document.getElementById("ooi").innerHTML = "大井" + "(" + region_counter("大井") + ")";
    document.getElementById("kanazawa").innerHTML = "金沢" + "(" + region_counter("金沢") + ")";
    document.getElementById("monbetsu").innerHTML = "門別" + "(" + region_counter("門別") + ")";
    document.getElementById("morioka").innerHTML = "盛岡" + "(" + region_counter("盛岡") + ")";
    document.getElementById("obihiro").innerHTML = "帯広" + "(" + region_counter("帯広(ば)") + ")";

})  

</script>