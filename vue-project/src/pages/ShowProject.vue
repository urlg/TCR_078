<template>
  <div class="container">
      <button @click="ShowTable(true)">点击</button>
      <div class="container-top"  v-if="isActive">
          <tpad-table
          :TheadList="TheadList"
          :TcellList="TcellList"
          :Titile="Titile"
          >

          </tpad-table>
          <button @click="getCustInfoList('20130201','101','6452221199412203774')">请点击</button>
          <p v-if="showMessage">{{showMessage}}</p>
      </div>
  </div>
</template>

<script>
import TpadTable from '../components/TpadTable.vue'
export default {
  components: { TpadTable },
    data(){
        return{
            TheadList:[],
            TcellList:[],
            isActive:false,
            Titile:'',
            /**
                以下为测试项
             */

             custInfoList:[],
             showMessage:{},
            tHead:[
                {name:'规划类型',lable:'type'},
                {name:'规划名称',lable:'name'},
                {name:'当前账户市值',lable:'value'},

                ],
             panList:[
                 {
                     CustmoerCHENname:'沙建斌',
                     livel:'V12',
                    type:'养老规划',
                    valie:'完善建议',
                 }
             ]
        }
    },
    /**
     * 监听函数
     */
    watch:{
        showMessage: {
            handler(newVal,oldVal){
                    var x;
                    for (x in newVal) {
                        alert(newVal[x])
                    }
            }
        },
    },
    created(){
        var i;
        for (const i in this.$route.params) {
            if (this.$route.params.hasOwnProperty.call(this.$route.params, i)) {
                const element = this.$route.params[i];
                        alert(element);
                
            }
        }
    },
    methods:{
        ShowTable(isActive){
            this.$route.params
            this.isActive=isActive;
            this.Titile='客户信息';
            this.TheadList=["用户名","年龄","Email","联系方式","地址"];
            this.TcellList=[
        ['李小刚',23,'1400121424@qq.com','13639572915','北京市海淀区'],
        ['李小刚1',23,'1400121424@qq.com','13639572915','北京市海淀区'],
        ['李小刚2',23,'1400121424@qq.com','13639572915','北京市海淀区']
      ]
        },
        /** 
         *  getCustInfoList     |获取客户信息
         *  @Inparam  Id        |客户Id
         *            IdType    |证件类型
         *            IdNo      |证件号码  
         * 
         */
        getCustInfoList(Id,IdType,IdNo){
           var  showMessage = new Object();

                showMessage.Id      =Id;
                showMessage.IdType  =IdType;
                showMessage.IdNo    =IdNo;
                this.showMessage=showMessage;

            var i;
            var listData      = new Array();
            var listData_ob   = new Object();
            var talbeData     = new Object();
            var custInfo_ob   = new Object();
            for(i=0;i<this.panList.length;i++){
                    listData_ob.type   =this.panList[i].type;
                    listData_ob.valie  =this.panList[i].valie;

                    custInfo_ob.CustmoerCHENname =this.panList[i].CustmoerCHENname;
                    //将listData_ob放到listData里面
                    listData.push(listData_ob);
                    //将tHead放进talbeData里面
                    talbeData.tHead = this.tHead;
                    //将listData放进talbeData里面
                    talbeData.listData = listData;
                    custInfo_ob.talbeData=talbeData;
                    this.custInfoList.push(custInfo_ob);
            }
            

        },
    }

}
</script>

<style scoped>

</style>  