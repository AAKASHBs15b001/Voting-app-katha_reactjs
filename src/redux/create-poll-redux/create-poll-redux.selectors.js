import { createSelector } from 'reselect';

const selectpoll = state => state.createPoll;

export const selectParamsToCreate = createSelector(
  [selectpoll],
  createPoll => createPoll.options
);



export const selectQuestion= createSelector(
  [selectpoll],
  createPoll => createPoll.Question
);




export const selectconvertformat = createSelector(
    [selectpoll],
    createPoll => createPoll.formated_data
  );


export const selectPublicDB= createSelector(
    [selectpoll],
    createPoll => createPoll.publicdatabase
  );





  
