<template>
    <div class="vessel">
        <!-- 
            标题
         -->
         <p>{{Titile}}</p>
        <!-- 表格循环-->
            <table border="1" class="vessel-table">
                <!--
                     表格头内容 
                -->
                <tr >
                    <th v-for="item of TheadList">{{item}}</th>
                </tr>
                <!-- 
                    表格单元格内容
                 -->
                 <tr v-for="item in TcellList">
                     <td v-for="value of item">{{value}}</td>
                 </tr>
            </table>
    </div>
</template>

<script>
export default {
            props: {
            Titile:String,
            //表格头内容
            TheadList: Array,

            //表格单元格内容
            TcellList: Array,
            },
    data(){
        return{

        }
    },

    /**
     * 
     */
    created(){
        
    },
    /**
     * 
     */
    computed(){

    },
    /**
     * 
     */
    methods(){

    }

}
</script>

<style scoped>
.vessel{
    background-color: bisque;
}
</style>>