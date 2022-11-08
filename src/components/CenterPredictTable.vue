<template> 
    <h1 class="border-b py-2 text-xl">{{area}} {{race_no}}R</h1>
    <table class="w-full h-full text-gray-400">
        <thead class="border-b text-gray-400">
            <tr>
                <th class="w-1/10">馬番</th>
                <th class="w-6/10">馬名</th>
                <th class="w-1/10">オッズ</th>
                <th class="w-1/10">期待値</th>
                <th class="w-1/10">順位</th>
                </tr>
        </thead>
        <tbody v-bind:id="id">読み込み中</tbody>
    </table>
</template>


<script setup>
import { onMounted } from '@vue/runtime-core'
import csv from '../../data/center_predict.csv'

const props = defineProps({
    area: String,
    race_no: String,
    id : String
})

function formatDate(dt) {
  var y = dt.getFullYear();
  var m = ('00' + (dt.getMonth()+1)).slice(-2);
  var d = ('00' + dt.getDate()).slice(-2);
  return (y + '-' + m + '-' + d);
}

let now = new Date();
const today = strftime(now);
const tomorrow = strftime(now.setDate(now.getDate() + 2));

const create_table =() =>{
    let tbody_html = '';

    for(let i = 0; i < csv.length; i++){
        if ((csv[i].area == props.area) && (csv[i].race_no == props.race_no) && ( (csv[i].date == today) | (csv[i].date == tomorrow))){
            tbody_html += '<tr class="text-gray-400 border-b">';
            let umaban = ''
            let horse_name = ''
            let y_pred_value = ''
            let y_pred_rank = ''
            let odds = ''

            for(const [key, val] of (Object.entries(csv[i]))) {
                if (key == 'umaban'){umaban = val} 
                if (key == 'horse_name'){horse_name = val} 
                if (key == 'y_pred_value'){y_pred_value = val} 
                if (key == 'y_pred_rank'){y_pred_rank = parseInt(val)} 
                if (key == 'odds_2'){odds = val} 

            }

            switch (y_pred_rank){
                case 1:
                    tbody_html += '<td class="text-left w-1/10 text-green-600">' + umaban + '</td>' 
                    tbody_html += '<td class="text-left w-6/10 text-green-600">' + horse_name + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-green-600">' + odds + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-green-600">' + y_pred_value + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-green-600">' + y_pred_rank + '</td>' 
                    break;
                case 2:
                    tbody_html += '<td class="text-left w-1/10 text-green-600">' + umaban + '</td>' 
                    tbody_html += '<td class="text-left w-6/10 text-green-600">' + horse_name + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-green-600">' + odds + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-green-600">' + y_pred_value + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-green-600">' + y_pred_rank + '</td>' 
                    break;
                case 3:
                    tbody_html += '<td class="text-left w-1/10 text-green-600">' + umaban + '</td>'   
                    tbody_html += '<td class="text-left w-6/10 text-green-600">' + horse_name + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-green-600">' + odds + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-green-600">' + y_pred_value + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-green-600">' + y_pred_rank + '</td>' 
                    break;
                default:
                    tbody_html += '<td class="text-left w-1/10">' + umaban + '</td>' 
                    tbody_html += '<td class="text-left w-6/10">' + horse_name + '</td>' 
                    tbody_html += '<td class="text-right w-1/10">' + odds + '</td>' 
                    tbody_html += '<td class="text-right w-1/10">' + y_pred_value + '</td>' 
                    tbody_html += '<td class="text-right w-1/10">' + y_pred_rank + '</td>' 
            }

            tbody_html += '</tr>';
        }
      }
    if (tbody_html == ''){tbody_html='結果がありません'}
    document.getElementById(props.id).innerHTML = tbody_html;
}
  
onMounted(() => {
    create_table()
})  

</script>