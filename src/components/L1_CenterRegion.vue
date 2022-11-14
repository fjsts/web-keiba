<template>
    <div class="py-3">
        <p class="py-1 text-sm">2.種類を選択してください</p>
        <TabGroup>
            <TabList>
                <Tab id="region" class="selection-btn selection-center_region opacity-20">
                    地方競馬 <br>
                    (<span id="region_count"></span>件)
                </Tab>
                <Tab id="center" class="selection-btn selection-center_region opacity-20">
                    中央競馬<br>
                    (<span id="center_count"></span>件)
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
    document.getElementById("center_count").innerHTML = center_count;
    document.getElementById("region_count").innerHTML = region_count;

    if (region_count != 0) {
        document.getElementById("region").classList.remove("opacity-20");
    }

    if (center_count != 0) {
        document.getElementById("center").classList.remove("opacity-20");
    }

})


</script>