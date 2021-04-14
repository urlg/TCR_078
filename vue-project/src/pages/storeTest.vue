<template>
<div>
    <h4>直接使用状态值</h4>
    <p>学生人数：{{$store.state.StudNum}}</p>
    <p v-for="(item,index) in $store.state.StudScore" :key="index">
        姓名：{{item.name}} | 分数：{{item.score}}
    </p>
<!------------------------->
    <h4>通过计算属性获取</h4>
    <p>学生人数：{{StudNum}}</p>
    <p v-for="(item,index) in StudScore" :key="'r'+index">
        姓名：{{item.name}} | 分数：{{item.score}}
    </p>
    <button @click="add()">点击</button>
</div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default{
    computed:{ // 计算属性
        // ...mapState([
        //     'StudNum',
        //     'StudScore'
        // ]),
    },
    methods:{
                ...mapMutations([
            "ChangeStudentInfo"
        ]),

        add(){
            let object =[
                {name:'沙建斌',score:'100'}
            ];
                        alert(9);
            this.ChangeStudentInfo(object);
            alert(this.$store.state.StudScore.length)
        }
    }
}
</script>