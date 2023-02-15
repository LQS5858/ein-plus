

import { defineComponent, onMounted, computed,ref } from 'vue'
import {  nDiv } from "@/math";
import style from './index.module.scss'
export default defineComponent({
  name: 'EinSearchPannel',
  props: {
    divide: {
      type: [Number, String],
      default: 3,
    },
    model:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  setup(props, { slots }) {
    let vnodeArr = ref([])
    function groupNode() {
       let nodeArr=slots?.default?slots?.default({model:props?.model}):[]
       let count=nodeArr?.length??0
       let temp=[]
      for (let i = 0; i < nodeArr.length; i++) {
        temp.push(nodeArr?.[i])
        if(+count<+props.divide &&+temp?.length===+count) {
          vnodeArr.value.push(temp)
          return 
        }
        if(+temp?.length>=props?.divide){
          count=nodeArr?.length-temp?.length
          vnodeArr.value.push(temp)
          temp=[] 
        }
        if(+count>+props.divide&&!temp?.length){
          vnodeArr.value.push(temp)
        }
      }
      
    }


  
    
  const spanCol=()=>{
        return nDiv(24,+props?.divide)
  }
    onMounted(() => {
      groupNode()
    })


    return ()=>{
      return (
        <>
      {vnodeArr.value.map(vnode=>{
        return (<el-row class={`${style.bottom}`}>{vnode.map(ItemVnode=>{
          return (<el-col span={spanCol()}><ItemVnode></ItemVnode></el-col>)
        })}</el-row>)
      })}
      
               </>
      )
    }
  },
})
