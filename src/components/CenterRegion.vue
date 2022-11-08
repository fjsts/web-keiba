<template>
    <TabGroup>
        <TabList>
            <div class="py-3">2.種類を選択してください</div>
            <Tab class="w-1/2 selction-btn" id="region">地方競馬</Tab>
            <Tab class="w-1/2 selction-btn" id="center">中央競馬</Tab>
        </TabList>

        <hr class="my-4 h-px bg-gray-600">

        <TabPanels>
            <TabPanel><RegionArea region="1" :day="day" :csv="region_csv"/></TabPanel>      
            <TabPanel>中央競馬は修正中です</TabPanel>
        </TabPanels>
    </TabGroup>    

</template>


<script setup>
  import region_csv from '../../data/region_predict.csv'
  import center_csv from '../../data/center_predict.csv'
  import RegionArea from './RegionArea.vue'
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
  import { onMounted } from '@vue/runtime-core'


  const props = defineProps({
    day: String,
    })

function center_counter (){
    let count = 0;
    let race_id = '';
    for(let i = 0; i < center_csv.length; i++){
        if (center_csv[i].date == props.day){
            if (race_id == ''){race_id = center_csv[i].race_id; count = 1;}
            if (race_id != center_csv[i].race_id){
                count = count + 1    
                race_id = center_csv[i].race_id
            }
        }
    }
    return count
}

function region_counter (){
    let count = 0;
    let race_id = '';
    for(let i = 0; i < region_csv.length; i++){
        if (region_csv[i].date == props.day){
            if (race_id == ''){race_id = region_csv[i].race_id; count = 1;}
            if (race_id != region_csv[i].race_id){
                count = count + 1    
                race_id = region_csv[i].race_id
            }
        }
    }
    return count
}

onMounted(() => {
    let region_count = region_counter()
    let center_count = center_counter()
    document.getElementById("center").innerHTML = "中央競馬" + "(" + center_count + ")";
    document.getElementById("region").innerHTML = "地方競馬" + "(" + region_count + ")";
})  


</script>