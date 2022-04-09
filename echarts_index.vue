<template>
<div>
    <PieCharts :itemWidth="20" />
    <PieCharts3/>
</div>
</template>
<script>
import PieCharts from './pieCharts.vue'
import PieCharts3 from './pieCharts3.vue'
export default {
    components:{
        PieCharts,
        PieCharts3
    },
    data() {
        return {
            obj:{
                
            }
        }
    },
    created(){

    }
};
</script>
<style>
</style>
