<template>

      <div id="agree-div">
       <p v-show="isShow">v-show调用计算属性computed():{{msg1}}</p> 
       <p v-if="isShow">v-if调用计算属性computed():{{msg1}}</p> 
       <p>调用计算属性watch():{{msg2}}</p>
       <p v-for="(value, key, index) of arryMap">
        {{index}}.{{key}}:{{value}}
        </p>
       <button  class="showMe"  @click="unVisible()" @dblclick="isVisible()">v-show指令单击时调用计算属性computed()不可见,双击可见</button>
      <button  class="showMe"  @click="unVisible()" @dblclick="isVisible()">v-if指令单击时调用计算属性computed()不可见,双击可见</button>

      <!-- 下拉框 -->
       产品代码:<select name="产品代码" required="true">
        <option>DP0002</option>
        <option>DP0003</option>
        <option>DP0004</option>
       </select>

<!-- object使用方式 -->
      <!-- 表格 -->
       <table border="1" class="agree-table">

         <!-- 表格头 -->
         <tr class="agree-table-tr">
           <th class="agree-table-tr">{{UserName}}</th>
           <th>{{UserAge}}</th>
           <th>{{Email}}</th>
           <th>{{Phone}}</th>
           <th>{{Adress}}</th>
         </tr>

        <!-- 表格行 

          v-for使用方法.将循环数据放置到表格中。[可以循环map/array]
          v-for完整参数表达方式：
          <p v-for="(value, key, index) of arryMap">{{value-key-index}}</p>
        -->
         <tr v-for="item of arryMap">
           <td>{{item.UserName}}</td>
           <td>{{item.UserAge}}</td>
           <td>{{item.Email}}</td>
           <td>{{item.Phone}}</td>
           <td>{{item.Adress}}</td>
         </tr>

         <tr v-for="(value) of arryMap1">
           <td>{{value[0]}}</td>
           <td>{{value[1]}}</td>
           <td>{{value[2]}}</td>
           <td>{{value[3]}}</td>
           <td>{{value[4]}}</td>
         </tr>

        <!-- 单选框-->
        <input type="radio"/>

        <!-- 文本输入框 -->
        <input />

        <!--签页容器-->
       </table>

       <!-- 
         v-bind指令学习:
        -->
        <div class="CustomerBranchInfo">
          <span @click="showInfo(1)">客户信息</span>
          <span @click="showInfo(2)">机构信息</span>
          <!-- 客户信息组-->
          <div v-bind:class="{customerInfo:showId}" v-if='isShowCus'>
            客户号:<span>123456</span><br>
            客户姓名:<span>123456</span><br>
            客户年龄:<span>123456</span><br>
            客户Email:<span>123456</span>
          </div>
          <!-- 机构信息组-->
          <div v-vind:class="{branchInfo:showId}" v-if='isShowBran'>
            机构号:<span>374775</span><br>
            机构名称:<span>新市区支行</span><br>
            机构地址:<span>北京市东城区</span><br>
            机构联系电话:<span>0989-22312</span>
          </div>
        </div>
        <tpad-table class="tpad-table"
        :Titile="title"
        >
          <p></p>
        </tpad-table>

        <button @click="linkShowProject()">点击跳转</button>
        <div>
          <p v-model="isActiveList">表格数据：{{isActiveList}}</p>
        </div>
    </div>
</template>

<script>
import TpadTable from '../components/TpadTable.vue'
export default {
  components:{TpadTable},
  data () {
    return {
      title:'这里是主页面标题',
      UserName:'用户名',
      UserAge:'年龄',
      Email:'邮箱',
      Phone:'联系方式',
      Adress:'住址',
      currentDate: new Date(),
      msg: '欢迎来到此界面',
      isShow:true,
      isShowCus:'',
      isShowBran:'',
      showId:'',
      isActiveList :[],

      arryMap:[
        {UserName:'李小刚',UserAge:23,Email:'1400@qq.com',Phone:'13639572915',Adress:'北京市海淀区'},
        {UserName:'李小刚',UserAge:24,Email:'1500@qq.com',Phone:'13639572915',Adress:'上海市普陀区'},
        {UserName:'李小刚',UserAge:25,Email:'1400121424@qq.com',Phone:'13639572915',Adress:'宁夏银川市'}
      ],

      arryMap1:[
        ['李小刚',23,'1400121424@qq.com','13639572915','北京市海淀区'],
        ['李小刚1',23,'1400121424@qq.com','13639572915','北京市海淀区'],
        ['李小刚2',23,'1400121424@qq.com','13639572915','北京市海淀区']
      ]
    }
  },


    /**
     * 计算属性:computed()
     * 
     * 备注:计算属性computed()有依赖关系，即 computed:{
     *                                         msg1:function(){
     *                                          return this.currentDate
     *                                         }
     *                                      }
     * 此函数返回的msg1依赖于data()里面返回的currentDate字段。currentDate字段改变了，此msg1字段进行相应的改变。
     * 因此所以说computed()是计算属性。计算属性具有缓存效果，即currentDate字段不改变，则msg1字段也不改变，只要currentDate字段不改变
     * 每次展示的msg1字段只是展示缓存前的字段。
     */
     computed:{
       msg1:function(){
         return this.currentDate;
       },
       /**
        * 观察属性watch()----暂时没有理解
        * 
        * 
        */
     },
            created(){
                this.isActiveListFuntion()
       },

  methods:{

           showInfo(showId){
             if(showId==1){
               this.isShowCus=true;
               this.isShowBran=false
             }
             else{
                this.isShowCus=false;
                this.isShowBran=true
             }
       },
    /**
     * v-show与v-if指令
     * <p v-show="isShow">v-show调用计算属性computed():{{msg1}}</p> 
     * <p   v-if="isShow">v-show调用计算属性computed():{{msg1}}</p> 
     * 
     * 当isshow为true时可见，isshow为false时不可见
     */
    unVisible() {
     this.isShow=false
    },
    
    //双击时可见
    isVisible(){
      this.isShow=true
    },

    /**
     * 页面跳转
     */
     linkShowProject() {
       //this.$store.state.persion = '沙建斌store';
       this.$router.push({
         name:'StoreTest',
         params:{
           UserName:'沙建斌',
           idType:'010',
           idNo:'642221199412203774',
         }
       })
     },

     isActiveListFuntion(){
       var i ;
       var object = new Object();
       for(i=0;i<this.arryMap.length;i++){
         object = {};
          object.UserName = this.arryMap[i].UserName;
          object.UserAge = this.arryMap[i].UserAge;
          object.Email = this.arryMap[i].Email;
          object.Phone = this.arryMap[i].Phone;
          object.Adress = this.arryMap[i].Adress;

          this.isActiveList.push(object);
       }
     }
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tpad-table{
  background-color: aqua;
  position: absolute;
  top:25%;
  left: 20%;
  height: 50%;
  width: 50%;
}
.agree-table{
  margin: 20px;
  padding: 0;
}
.agree-table-tr{
  margin: -10px,0px,0px,0px;
}
 #agree-div {
   width: 100%;
   border-top-color: green;
   border-top-style: solid;
   border-top-width: 100%;
   
   border-right-color: rgb(17, 17, 17);
   border-right-style: solid;
   border-right-width: 100%;

   border-bottom-color: green;
   border-bottom-style: solid;
   border-bottom-width: 100%;

   border-left-color: gray;
   border-left-style: solid;
   border-left-width: 100%;
  
 }
 .contentwrap {
   width: 98%;
   margin: 0 auto;
   padding: 10px;
  }
  ul {
   list-style: none;
   margin: 0;
   padding-left: 20px;
  }
  ul.tab {
   border-bottom: 1px solid #ccc;
   padding-bottom:1px;
   height: 30px;
   line-height: 30px;
   color: #696969;
  }
  ul.tab li {
   float: left;
   font-family: "微软雅黑";
   cursor: pointer;
   padding: 0px;
   
   
  }
  ul.tab li.li {
   padding: 0px 25px 0px;
   font-size: 13px;
   height: 30px;
   line-height: 30px;
   background:#F4F5F9;
   border-top: 1px solid #C5D0DC;
   border-left: 1px solid #C5D0DC;
   border-bottom: 1px solid #C5D0DC;
   
  }
  ul.tab li.current {
   border-bottom: 0px;
   border-top: 2px solid #7599DE;
   font-size: 13px;
   color: #343434;
   background:#FFFFFF;
   
  }
  ul.tab li.li:last-child{
    border-right: 1px solid #C5D0DC;}
</style>
