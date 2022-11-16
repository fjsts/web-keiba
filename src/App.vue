

<template>

  <div id="app">
    <!-- <AdSense /> -->

    <nav class="px-2">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <router-link to="/predict_summary" class="px-4 py-1.5">予想サマリ</router-link>
        <router-link to="/predict" class="px-4 py-1.5">予想詳細</router-link>
        <router-link to="/about" class="px-5 py-1.5">その他</router-link>
      </div>
    </nav>


    <div class="mt-4 py-4 border-t">
      <h1 class="text-gray-200 text-2xl font-bold text-center mb-2">
        目指せ回収率120%<br>データサイエンティストの人工知能（AI）競馬予想
      </h1>
    </div>

    <router-view></router-view>


    <div class="py-1">
      <img class="rounded-full w-20 h-20 mx-auto " src="https://fjs-fire.com/icon.svg" alt="元ITエンジニアがPythonで構築した競馬予想">
      <p class="text-center">
        <a href="https://twitter.com/ai_dark_horses" class="text-slate-400 ml-1" rel="noopener noreferrer"
          target="_blank">@ai_dark_horses</a>
      </p>

      <p class="py-2 text-sm text-center">© 2022 All rights reserved.</p>

    </div>

  </div>

</template>

<script setup>
import { defineComponent } from "vue";
import PredictSummary from './components/PredictSummary.vue'
import Predict from './components/Predict.vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

defineComponent({
  components: {
    TabGroup, TabList, Tab, TabPanels, TabPanel, PredictSummary, Predict
  },
});





</script>

<style>

</style>