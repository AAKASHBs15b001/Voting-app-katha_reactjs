import { createSelector } from 'reselect';

const selectpoll = state => state.votepoll;

export const selectCurrentVotes = createSelector(
  [selectpoll],
  votes => votes.pollAnswers
);




