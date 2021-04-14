<template>
<div>
    <!-- 管户 -->
    <button :class="{isActive:isCustActive=='1'}" @click="showMessage('title','1')">我的管户</button>
    <!-- 公共客户 -->
    <button :class="{isActive:isCustActive=='2'}" @click="showMessage('title','2')">公共池</button> 
     <!--客户维度  -->
    <button :class="{isActive:isPublActive=='1'}" @click="showMessage('tag','1')">客户维度</button>
      <!--规划维度  -->
    <button :class="{isActive:isPublActive=='2'}" @click="showMessage('tag','2')">规划维度</button>

    <span v-show="isPublActive==1">这里是客户维度</span>  
    <span v-show="isPublActive==2">这里是规划维度</span>       
</div>
</template>

<script>
export default{
    data(){
        return{
            isCustActive : "1",
            isPublActive : "1",
            getOnclick :[
                "title11","title12","title21","title22","tag11","tag12","tag21","tag22"
            ],
        }
    },
    methods:{
        showMessage(type,num){
            alert(this.$store.state.persion);
            if(type=='title'){
                this.isCustActive = num;
                if(this.isCustActive+this.isPublActive=='11'){
                    alert('我的管户客户维度')
                }
                if(this.isCustActive+this.isPublActive=='12'){
                    alert('我的管户规划维度')
                }
                if(this.isCustActive+this.isPublActive=='21'){
                    alert('公共池客户维度')
                }
                if(this.isCustActive+this.isPublActive=='22'){
                    alert('公共池规划维度')
                }                                               
            }else{
                this.isPublActive = num;  
                if(this.isPublActive+this.isCustActive=='11'){
                    alert('我的管户客户维度')
                }
                if(this.isPublActive+this.isCustActive=='12'){
                    alert('公共池客户维护')
                }
                if(this.isPublActive+this.isCustActive=='21'){
                    alert('我的管户规划维度')
                }
                if(this.isPublActive+this.isCustActive=='22'){
                    alert('公共池规划维度')
                }                           
            }
        }
    }
}
</script>

<style scoped>
.isActive{
    background-color: bisque;
}
</style>>