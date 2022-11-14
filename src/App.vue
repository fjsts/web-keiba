

<template>

  <div id="app">
    <!-- <AdSense /> -->

    <div class="py-2">
      <h1 class="text-gray-200 text-2xl font-bold text-center mb-2">
        元ITエンジニアがPythonで構築したAI競馬予想
      </h1>

      <h2 class="font-bold text-center mb-1">概要</h2>
      <p>過去5年間の走破データ解析により構築したAI競馬予想です。
        入賞期待が高い馬が高い期待値になるよう学習させています。（期待値が高いほど入賞確率が高い）
        日付や中央競馬、地方競馬などの条件を選択すると表示内容が切り替わります。
      </p>

      <!-- <p class="text-xs text-right">更新日：{{upt_date}}</p> -->

    </div>

    <L0_TodayTomorrow />

    <div class="py-1">
      <h1 class="font-bold text-center mb-1 ">予想について</h1>
      <ul class="px-4 list-disc text-sm">
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
import L0_TodayTomorrow from './components/L0_TodayTomorrow.vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

defineComponent({
  components: { TabGroup, TabList, Tab, TabPanels, TabPanel }
});


</script>

<style>

</style>