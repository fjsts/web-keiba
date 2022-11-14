

<template>

  <div id="main" class="text-gray-300 bg-zinc-900 py-2">
    <!-- <AdSense /> -->

    <div class="py-2">
      <h1 class="text-gray-200 text-2xl font-bold text-center mb-2">
        元ITエンジニアがPythonで構築したAI競馬予想
      </h1>

      <h2 class=" text-base font-bold text-center mb-1">概要</h2>
      <p>過去5年間の走破データ解析により構築したAI競馬予想です。
        入賞期待が高い馬が高い期待値になるよう学習させています。（期待値が高いほど入賞確率が高い）
        日付や中央競馬、地方競馬などの条件を選択すると表示内容が切り替わります。
      </p>

      <!-- <p class="text-xs text-right">更新日：{{upt_date}}</p> -->

    </div>
    <div class="py-4">

      <p class=" text-base text-center mb-4 ">予想対象を選択してください</p>

      <p class="py-1 text-sm">1.日付を選択してください</p>
      <TabGroup>
        <TabList>
          <Tab id="today" class="w-1/2 selction-btn text-sm">{{ today_disp }}</Tab>
          <Tab id="tomorrow" class="w-1/2 selction-btn text-sm">{{ tomorrow_disp }}</Tab>
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

    <div class="py-1 ">
      <h1 class="text-base font-bold text-center mb-1 ">予想について</h1>
      <ul class=" px-4 list-disc text-sm">
        <li>
          2017年から約5年分のデータを解析に使用しています。
          特徴量はこれまでの知見や書籍や論文を参考にし約300個作成しました。
        </li>

        <li>
          アルゴリズムはLightGBMを使用しています。
          混合予想モデルの総合スコアで期待値を算出、期待値は値が大きい順に入賞期待値が高くなるよう設計してます。
        </li>
        <li>
          モデルは走破タイムを目的変数とした回帰モデル、着順の逆数を目的変数とした回帰モデルの2種類です。
        </li>
        <li>
          直近1年間のデータで学習し期待値を予想しています。
          2021年以前をTrain/Valデータ、2022年をTestデータとし2022年の回収率をKPIとしてモデルの改善を行いました。
        </li>
        <li>
          障害などの一部レースは予想対象外としています。
        </li>
      </ul>
    </div>

    <div class="py-1">
      <img class="rounded-full w-20 h-20 mx-auto " src="https://fjs-fire.com/icon.svg" alt="元ITエンジニアがPythonで構築した競馬予想">
      <div class="text-center">
        <a href="https://twitter.com/ai_dark_horses" class="text-slate-400 ml-1" rel="noopener noreferrer"
          target="_blank">@ai_dark_horses</a>
      </div>
    </div>

    <div class="py-2 text-sm text-center">© 2022 All rights reserved.</div>

  </div>

</template>

<script setup>
import { defineComponent } from "vue";
import CenterRegion from './components/L1_CenterRegion.vue'
import AdSense from './components/AdSense.vue'

import region_csv from '../data/region_predict.csv'
import center_csv from '../data/center_predict.csv'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { onMounted } from '@vue/runtime-core'

defineComponent({
  components: { TabGroup, TabList, Tab, TabPanels, TabPanel }
});

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
  document.getElementById("today").innerHTML = today_disp + "<br><span class=\"text-xs\">(" + today_count + "件)</span>";
  document.getElementById("tomorrow").innerHTML = tomorrow_disp + "<br><span class=\"text-xs\">(" + tomorrow_count + "件)</span>";

})

</script>

<style>

</style>