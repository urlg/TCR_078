import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex); 
 
const state = {      
    StudNum:3, // 初始化一个状态，存放学生人数
    StudScore:[ // 初始化一个状态，存放学生的分数信息
        // {name:'小敏',score:80},
        // {name:'小花',score:90},
        // {name:'小红',score:98}
    ]
}

const mutations ={
    ChangeStudentInfo(state,object){
            state.StudScore =object;
    }
}
const store = new Vuex.Store({
   state,
   mutations
})
export default store