<template> 
    <div class="table-responsive">
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th >馬番</th>
                <th >馬名</th>
                <th >予測値</th>
                <th >予測順位</th>
                </tr>
        </thead>
        <tbody v-bind:id="id">aaa</tbody>
    </table>
    </div>
</template>



<script setup>
import { onMounted } from '@vue/runtime-core'
import csv from './data/result.csv'

const props = defineProps({
    area: String,
    race_no: String,
    id : String
})

const create_table =() =>{
    let tbody_html = '';

    for(let i = 0; i < csv.length; i++){
        if ((csv[i].area == props.area) && (csv[i].race_no == props.race_no)){
            tbody_html += '<tr>';
            for(const [key, val] of (Object.entries(csv[i]))) {
                if (key == 'umaban'){tbody_html += '<td>' + val + '</td>'} 
                if (key == 'horse_name'){tbody_html += '<td>' + val + '</td>'} 
                if (key == 'y_pred_rank'){tbody_html += '<td>' + val + '</td>'} 
                if (key == 'y_pred_value'){tbody_html += '<td>' + val + '</td>'} 
            }
            tbody_html += '</tr>';
        }

  }
  console.log([tbody_html, props.id])
  document.getElementById(props.id).innerHTML = tbody_html;
}
  
onMounted(() => {
    create_table()
})  

</script>