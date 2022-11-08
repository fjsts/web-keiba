

<template> 

<div class="w-full h-full text-gray-400">

  <div>
  <a href="https://px.a8.net/svt/ejp?a8mat=3NN3IQ+BK60MQ+19NM+BZVU9" rel="nofollow">
  <img border="0" width="728" height="90" alt="" src="https://www28.a8.net/svt/bgt?aid=221107346699&wid=001&eno=01&mid=s00000005917002015000&mc=1"></a>
  <img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=3NN3IQ+BK60MQ+19NM+BZVU9" alt="">
  </div>

  <div class="my-5">
    <span class="text-3xl text-gray-400">AI競馬予想 ver.β</span>
    <div>
      <ul class="list-disc my-5 px-5">
        <li>本日と明日の競馬予測を公開</li>
        <li>カッコ内の数字はレース数</li>
      </ul>
    </div>
  </div>
  
  <hr class="my-4 h-px bg-gray-600">

  <TabGroup>
    <TabList>
      <div class="py-3">1.日付を選択してください</div>
      <Tab class="w-1/2 selction-btn">{{today}}</Tab>
      <Tab class="w-1/2 selction-btn">{{tomorrow}}</Tab>
    </TabList>
    <hr class="my-4 h-px bg-gray-600">

    <TabPanels>
      <TabPanel><CenterRegion :day="today" /></TabPanel>
      <TabPanel><CenterRegion :day="tomorrow" /></TabPanel>
    </TabPanels>
  </TabGroup>



  <footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://twitter.com/ai_dark_horses" class="text-gray-500 ml-1" rel="noopener noreferrer" target="_blank">@ai_dark_horses</a>
    </span>
  </div>
</footer>

<a href="https://px.a8.net/svt/ejp?a8mat=3NN3IQ+BZ1UR6+1JS2+6E71D" rel="nofollow">
<img border="0" width="728" height="90" alt="" src="https://www20.a8.net/svt/bgt?aid=221107346724&wid=001&eno=01&mid=s00000007229001074000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=3NN3IQ+BZ1UR6+1JS2+6E71D" alt="">


</div> 
</template>

<script setup>
  import { defineComponent } from "vue";
  import CenterRegion from './components/CenterRegion.vue'
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

  defineComponent({
    components: {TabGroup, TabList, Tab, TabPanels, TabPanel}
  });

  function formatDate(dt){
    dt = new Date(dt)
    var y = dt.getFullYear();
    var m = ('00' + (dt.getMonth()+1)).slice(-2);
    var d = ('00' + dt.getDate()).slice(-2);
    return (y + '-' + m + '-' + d);
  }

  const now = new Date()
  const today = formatDate(now);
  const tomorrow = formatDate(now.setDate(now.getDate() + 1));

</script>

<style>


</style>