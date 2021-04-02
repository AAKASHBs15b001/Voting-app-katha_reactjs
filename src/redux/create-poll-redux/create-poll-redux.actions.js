import { CreatepollActiontypes } from './create-poll-redux.types';




export const additem= items=> (
  console.log(items),
      {
    type: CreatepollActiontypes.UPDATE_OPTION,
    payload:items

  }  
  );



  export const addQuestion= item=> (
        {
      type: CreatepollActiontypes.UPDATE_Question,
      payload:item
  
    }  
    );
  

    export const createThePUBLICPOLL= items=> (
    {
    type: CreatepollActiontypes.Create_PUBPOLLL,
    payload:items
  }  
  );


  export const createThePRIVATEPOLL= items=> (
    {
    type: CreatepollActiontypes.Create_PRIPOLLL,
    payload:items
  }  
  );



  export const update_database= items=> (

    {
  type: CreatepollActiontypes.update_database,
  payload:items
}  
);









  