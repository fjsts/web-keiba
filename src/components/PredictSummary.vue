<template>
    <div class="py-2">
      <h1 class="text-center text-lg ">予想サマリ（本日の高期待馬）</h1>

      <h2 class="mt-5">地方競馬</h2>      
      <table class="w-full h-full text-sm border-t">
          <thead class="border-b">
              <tr>
                  <th class="w-1/10">出走</th>
                  <th class="w-1/10">場所</th>
                  <th class="w-1/10">R</th>
                  <th class="w-1/10">馬番</th>
                  <th class="w-6/10">馬名</th>
              </tr>
          </thead>
          <tbody id="promising_table_tbody_region" class="text-sm border-b">
          </tbody>
      </table>

      <h2 class="mt-5">中央競馬</h2>
      <table class="w-full h-full text-sm border-t">
          <thead class="border-b">
              <tr>
                  <th class="w-1/10">出走</th>
                  <th class="w-1/10">場所</th>
                  <th class="w-1/10">R</th>
                  <th class="w-1/10">馬番</th>
                  <th class="w-6/10">馬名</th>
              </tr>
          </thead>
          <tbody id="promising_table_tbody_center" class="text-sm border-b">
          </tbody>
      </table>
    </div>
</template>


<script setup>

import { defineComponent } from "vue";
import region_csv from '../../data/region_predict.csv'
import center_csv from '../../data/center_predict.csv'
import { onMounted } from '@vue/runtime-core'


function formatDate(dt) {
  dt = new Date(dt)
  var y = dt.getFullYear();
  var m = ('00' + (dt.getMonth() + 1)).slice(-2);
  var d = ('00' + dt.getDate()).slice(-2);
  return (y + '-' + m + '-' + d);
}

const now = new Date()
const today = formatDate(now);


function create_tbody(csv, date){
  let tblBody = document.createElement("tbody");

  for (let i = 0; i < csv.length; i++) {
    if (csv[i].date == date) {
      if (csv[i].y_pred_rank == 1){
        if (csv[i].y_pred_value > 70){
          let row = document.createElement("tr")
          let cell
          let text

          cell = document.createElement("td")
          text = document.createTextNode(csv[i].RaceData01_time.replace('発走', ''));
          cell.appendChild(text);
          cell.classList.add("text-center")
          row.appendChild(cell)


          cell = document.createElement("td")
          text = document.createTextNode(csv[i].area);
          cell.appendChild(text);
          cell.classList.add("text-center")
          row.appendChild(cell)

          cell = document.createElement("td")
          text = document.createTextNode(csv[i].race_no + "R");
          cell.appendChild(text);
          cell.classList.add("text-center")
          row.appendChild(cell)

          cell = document.createElement("td")
          text = document.createTextNode("[" + csv[i].umaban + "]");
          cell.appendChild(text);
          cell.classList.add("text-center")
          row.appendChild(cell)

          cell = document.createElement("td")
          text = document.createTextNode(csv[i].horse_name);
          cell.appendChild(text);
          cell.classList.add("text-center")
          row.appendChild(cell)

          tblBody.appendChild(row)
        } 
      }
    }
  }
  return tblBody
}


  





onMounted(() => {
  let tbody
  tbody = create_tbody(region_csv, today)
  if (tbody.innerText != ""){
    document.getElementById("promising_table_tbody_region").innerHTML = tbody.innerHTML;
  }else{
    document.getElementById("promising_table_tbody_region").innerHTML = "データがありません。"
  }

  tbody = create_tbody(center_csv, today)
  if (tbody.innerText != ""){
    document.getElementById("promising_table_tbody_center").innerHTML = tbody.innerHTML;
  }else{
    document.getElementById("promising_table_tbody_center").innerHTML = "データがありません。"
  }

})

</script>
