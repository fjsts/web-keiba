<template>
    <div class="py-3">
        <p class="py-1 text-sm">2.種類を選択してください</p>
        <TabGroup>
            <TabList>
                <Tab class="w-1/2 selction-btn text-sm">
                    <span id="region">地方競馬</span>
                    <br>
                    <span id="region_count" class="text-xs">(0件)</span>
                </Tab>
                <Tab class="w-1/2 selction-btn text-sm">
                    <span id="center">中央競馬</span>
                    <br>
                    <span id="center_count" class="text-xs">(0件)</span>
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <RegionArea region="1" :day="day" :csv="region_csv" />
                </TabPanel>
                <TabPanel>
                    <CenterArea region="0" :day="day" :csv="center_csv" />
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>


<script setup>
import RegionArea from './L2_RegionArea.vue'
import CenterArea from './L2_CenterArea.vue'

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { onMounted } from '@vue/runtime-core'


const props = defineProps({
    day: String,
    region_csv: Object,
    center_csv: Object
})

function center_counter() {
    let count = 0;
    let race_id = '';
    for (let i = 0; i < props.center_csv.length; i++) {
        if (props.center_csv[i].date == props.day) {
            if (race_id == '') { race_id = props.center_csv[i].race_id; count = 1; }
            if (race_id != props.center_csv[i].race_id) {
                count = count + 1
                race_id = props.center_csv[i].race_id
            }
        }
    }
    return count
}

function region_counter() {
    let count = 0;
    let race_id = '';
    for (let i = 0; i < props.region_csv.length; i++) {
        if (props.region_csv[i].date == props.day) {
            if (race_id == '') { race_id = props.region_csv[i].race_id; count = 1; }
            if (race_id != props.region_csv[i].race_id) {
                count = count + 1
                race_id = props.region_csv[i].race_id
            }
        }
    }
    return count
}

onMounted(() => {
    let region_count = region_counter()
    let center_count = center_counter()
    document.getElementById("center_count").innerHTML = "(" + center_count + "件)";
    document.getElementById("region_count").innerHTML = "(" + region_count + "件)";
})


</script>