<template> 
    <h1 class="border-b py-2 text-lr">{{day}} -> {{area}} -> {{race_no}}R</h1>
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
const props = defineProps({
    csv: Object,
    day: String,
    area: String,
    race_no: String,
    id : String,
    region: String
})

const day = props.day.slice(-5).replace('-', '/')

const data = props.csv

const create_table =() =>{
    let tbody_html = '';

    for(let i = 0; i < data.length; i++){        
        if ((data[i].area == props.area) && (data[i].race_no == props.race_no) && (data[i].date == props.day)){
            tbody_html += '<tr class="text-gray-400 border-b">';
            let umaban = ''
            let horse_name = ''
            let y_pred_value = ''
            let y_pred_rank = ''
            let odds = ''

            for(const [key, val] of (Object.entries(data[i]))) {
                if (key == 'umaban'){umaban = val} 
                if (key == 'horse_name'){horse_name = val} 
                if (key == 'y_pred_value'){y_pred_value = val} 
                if (key == 'y_pred_rank'){y_pred_rank = parseInt(val)} 
                if (key == 'odds_2'){odds = val} 
            }

            if (props.region == "1"){
                odds = "-"
            }
            y_pred_value = Math.round(y_pred_value * 100) / 100 

            switch (y_pred_rank){
                case 1:
                    tbody_html += '<td class="text-left w-1/10 text-yellow-600">' + umaban + '</td>' 
                    tbody_html += '<td class="text-left w-6/10 text-yellow-600">' + horse_name + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-yellow-600">' + odds + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-yellow-600">' + y_pred_value + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-yellow-600">' + y_pred_rank + '</td>' 
                    break;
                case 2:
                    tbody_html += '<td class="text-left w-1/10 text-yellow-600">' + umaban + '</td>' 
                    tbody_html += '<td class="text-left w-6/10 text-yellow-600">' + horse_name + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-yellow-600">' + odds + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-yellow-600">' + y_pred_value + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-yellow-600">' + y_pred_rank + '</td>' 
                    break;
                case 3:
                    tbody_html += '<td class="text-left w-1/10 text-yellow-600">' + umaban + '</td>'   
                    tbody_html += '<td class="text-left w-6/10 text-yellow-600">' + horse_name + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-yellow-600">' + odds + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-yellow-600">' + y_pred_value + '</td>' 
                    tbody_html += '<td class="text-right w-1/10 text-yellow-600">' + y_pred_rank + '</td>' 
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