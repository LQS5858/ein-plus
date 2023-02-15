
import {onMounted,defineComponent,ref,renderSlot} from 'vue'
import globalScss from '../styles/global.module.scss'
import styles from './index.module.scss'
import {debounce} from '@/utils/common'
export default defineComponent({
      name:'EinSearchField',
      emits:['update:modelValue'],
      props:{
        modelValue:[String,Number,Object],
        label:{
          type:String,
          default:''
        },
        type:{
          type:String,
          default:'text'
        },
        options:{
          type:Array,
          default(){
            return []
          }
        },
        placeholder:{
          type:String,
          default:''
        }
      },
      
      setup(props,{slots,emit}){
        let value=ref(null)
        function getSlots() {
          
        }
        const inputHandler=()=>{
          if(props?.type==='number'){
            value.value=String(value.value).replace(/[^\d.]/gi,'')
            }
          
              emit('update:modelValue',value.value)
        
        }
        function getTypeNode() {
          if(slots?.default&&slots?.default().length) return
           const obj={
            text:()=>{
              return (<el-input clearable onInput={inputHandler} placeholder={props?.placeholder} type="text" v-model={value.value}></el-input>)
            },
            number:()=>{
              return (<el-input clearable onInput={inputHandler} placeholder={props?.placeholder} type="text" v-model={value.value}></el-input>)
            },
            select:()=>{
            return (<el-select clearable  v-model={value} class="m-2" placeholder="Select" size="large">
             {
              props.options.map(item=>{
return (<el-option
  key={item.value}
  label={item.label}
  value={item.value}
/>)
              })
             } 
            </el-select>)          }
           }
         return  obj?.[props?.type]()
        }
        onMounted(()=>{
          getSlots()
        })
        return ()=>{
          return (<>
          <div className={`${globalScss['flex-row']} ${styles.fieldWrapper} space`}>
            <label class={`${globalScss['text-nowrap']} space`}>{props?.label}</label>
            {
             getTypeNode()
            }
            {renderSlot(slots,'default')}
          </div>
          </>)
        }
      }
 
})