<template> 

<TabGroup>
    <TabList>
      <Tab class="w-1/3">東京</Tab>
      <Tab class="w-1/3">阪神</Tab>
      <Tab class="w-1/3">福島</Tab>
    </TabList>

    <hr class="my-4 h-px bg-gray-600">

    <TabPanels>
      <TabPanel>
        <TabGroup>
        <TabList>
          <Tab class="w-1/12">1R</Tab>
          <Tab class="w-1/12">2R</Tab>
          <Tab class="w-1/12">3R</Tab>
          <Tab class="w-1/12">4R</Tab>
          <Tab class="w-1/12">5R</Tab>
          <Tab class="w-1/12">6R</Tab>
          <Tab class="w-1/12">7R</Tab>
          <Tab class="w-1/12">8R</Tab>
          <Tab class="w-1/12">9R</Tab>
          <Tab class="w-1/12">10R</Tab>
          <Tab class="w-1/12">11R</Tab>
          <Tab class="w-1/12">12R</Tab>
        </TabList>
        <hr class="my-4 h-px bg-gray-600">
          <TabPanels>
            <TabPanel>
              <PredictTable area="東京" race_no="1" id="tokyo1"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="東京" race_no="2" id="tokyo2"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="東京" race_no="3" id="tokyo3"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="東京" race_no="4" id="tokyo4"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="東京" race_no="5" id="tokyo5"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="東京" race_no="6" id="tokyo6"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="東京" race_no="7" id="tokyo7"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="東京" race_no="8" id="tokyo8"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="東京" race_no="9" id="tokyo9"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="東京" race_no="10" id="tokyo10"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="東京" race_no="11" id="tokyo11"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="東京" race_no="12" id="tokyo12"/>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </TabPanel>
    
      <TabPanel>
        <TabGroup>
        <TabList>
          <Tab class="w-1/12">1R</Tab>
          <Tab class="w-1/12">2R</Tab>
          <Tab class="w-1/12">3R</Tab>
          <Tab class="w-1/12">4R</Tab>
          <Tab class="w-1/12">5R</Tab>
          <Tab class="w-1/12">6R</Tab>
          <Tab class="w-1/12">7R</Tab>
          <Tab class="w-1/12">8R</Tab>
          <Tab class="w-1/12">9R</Tab>
          <Tab class="w-1/12">10R</Tab>
          <Tab class="w-1/12">11R</Tab>
          <Tab class="w-1/12">12R</Tab>
        </TabList>
        <hr class="my-4 h-px bg-gray-200">
          <TabPanels>
            <TabPanel>
              <PredictTable area="阪神" race_no="1" id="hanshin1"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="阪神" race_no="2" id="hanshin2"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="阪神" race_no="3" id="hanshin3"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="阪神" race_no="4" id="hanshin4"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="阪神" race_no="5" id="hanshin5"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="阪神" race_no="6" id="hanshin6"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="阪神" race_no="7" id="hanshin7"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="阪神" race_no="8" id="hanshin8"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="阪神" race_no="9" id="hanshin9"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="阪神" race_no="10" id="hanshin10"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="阪神" race_no="11" id="hanshin11"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="阪神" race_no="12" id="hanshin12"/>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </TabPanel>

      <TabPanel>
        <TabGroup>
        <TabList>
          <Tab class="w-1/12">1R</Tab>
          <Tab class="w-1/12">2R</Tab>
          <Tab class="w-1/12">3R</Tab>
          <Tab class="w-1/12">4R</Tab>
          <Tab class="w-1/12">5R</Tab>
          <Tab class="w-1/12">6R</Tab>
          <Tab class="w-1/12">7R</Tab>
          <Tab class="w-1/12">8R</Tab>
          <Tab class="w-1/12">9R</Tab>
          <Tab class="w-1/12">10R</Tab>
          <Tab class="w-1/12">11R</Tab>
          <Tab class="w-1/12">12R</Tab>
        </TabList>
        <hr class="my-4 h-px bg-gray-200">
          <TabPanels>
            <TabPanel>
              <PredictTable area="福島" race_no="1" id="fuku1"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="福島" race_no="2" id="fuku2"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="福島" race_no="3" id="fuku3"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="福島" race_no="4" id="fuku4"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="福島" race_no="5" id="fuku5"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="福島" race_no="6" id="fuku6"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="福島" race_no="7" id="fuku7"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="福島" race_no="8" id="fuku8"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="福島" race_no="9" id="fuku9"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="福島" race_no="10" id="fuku10"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="福島" race_no="11" id="fuku11"/>
            </TabPanel>
            <TabPanel>
              <PredictTable area="福島" race_no="12" id="fuku12"/>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </TabPanel>      
    </TabPanels>
  </TabGroup>
</template>


<script setup>
import { defineComponent } from "vue";
import PredictTable from './CenterPredictTable.vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
defineComponent({
  components: {TabGroup, TabList, Tab, TabPanels, TabPanel , PredictTable}
});
</script>