import { defineComponent,renderSlot } from "vue";
import {throttle} from '../../src/utils/common'
export default defineComponent({
   name:'EinThrottleButton',
   emits:['confirm'],
   props:{
    type:{
     type: String,
    default:'primary'
    },
    text:{
      type:String,
      default:'Button'
    },
    loading:{
      type:Boolean,
      default:false
    },
    prefixIcon:{
      type:String,
      default:''
    },
    delay:{
      type:[Number,String],
 default:500
    }
   },
    setup(props,{slots,emit}){
      const clickHandler=throttle(()=>{
         emit('confirm')
      },props?.delay??600)
      return ()=> {
         return <>
         <el-button icon={props?.prefixIcon} loading={props?.loading} onClick={clickHandler} type={props?.type}>
         {renderSlot(slots,'preffixIcon')}{props?.text}{renderSlot(slots,'suffixIcon')}
            </el-button>
         </>
       }
    }
})