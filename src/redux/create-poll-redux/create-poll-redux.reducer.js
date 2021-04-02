import { initialize } from 'redux-form';
import {CreatepollActiontypes} from './create-poll-redux.types.js';
import {additemtocart} from './create-poll-redux.utils'

import {format_conversion} from './create-poll-redux.utils'
const INITIAL_STATE = {
    Question:'',
    options:[],
    formated_data:[],
    publicdatabase:[],
    type:''
}



const formatofData=(options,type)=>{
  return format_conversion(options,type)
}

const addtodb=(options)=>{
  INITIAL_STATE.publicdatabase.push(formatofData(options))
  console.log(INITIAL_STATE.publicdatabase)
  options=[]
  INITIAL_STATE.Question=''
  return INITIAL_STATE.publicdatabase

}

const createpublicPOLLreducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CreatepollActiontypes.UPDATE_OPTION: 
          return {
            ...state,
           options:action.payload
          };


        case CreatepollActiontypes.update_database: 
          return {
            ...state,
            publicdatabase:action.payload
          };

        case CreatepollActiontypes.Create_PRIPOLLL:
            return {
              ...state,
              formated_data:formatofData(action.payload,'Private'),
              Question:[],
              options:[]
            };
            case CreatepollActiontypes.Create_PUBPOLLL:
              return {
                ...state,
                formated_data:formatofData(action.payload,'Public'),
                Question:[],
                options:[]
              };
          

            case CreatepollActiontypes.UPDATE_Question:
              return {
                ...state,
                options:[action.payload]
              };
        
        default:
          return state;

      }
    
    };


   

export default createpublicPOLLreducer;
