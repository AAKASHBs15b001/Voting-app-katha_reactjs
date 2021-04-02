
const INITIAL_STATE = {
  pollAnswers :[
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "Go", votes: 0},
    {name: "Java", votes: 0}
  ]
}

const vote_result_Reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    default:
      return state;
  }
  }

export default vote_result_Reducer;
