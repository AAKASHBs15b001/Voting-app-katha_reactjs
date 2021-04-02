import React ,{useState} from 'react';
import { connect } from 'react-redux';
import {additem} from '../../redux/create-poll-redux/create-poll-redux.actions'
import {addQuestion,createThePUBLICPOLL,createThePRIVATEPOLL,update_database} from '../../redux/create-poll-redux/create-poll-redux.actions'
import { selectParamsToCreate } from '../../redux/create-poll-redux/create-poll-redux.selectors';
import { createStructuredSelector } from 'reselect';
import { selectconvertformat,selectQuestion ,selectPublicDB} from '../../redux/create-poll-redux/create-poll-redux.selectors';
import SearchBar from '../search-bar/search-bar.component'

const cart=[]
 



// const PollQuestions = ({additem}) => (
//   <div>
//   <input type="text" onChange={this.saveInput}>
//   </input>
//   <button onClick={additem}>click</button>
//   </div>
// );



class PollQuestions extends React.Component {
   newitem=this.props.additem
   createthePOLL = this.props.createThePOLL
    
  state = {
    Question:this.props.Question,
    cart: this.props.pollparams,
    DB:this.props.convertformat
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  addNewItem = () => {
    let cart=this.props.pollparams
    let {  input } = this.state;

    cart.push(input);
    this.props.additem(cart)
    console.log(cart)
    // this.state.cart.push(this.state.input); // same as above, though bad practice 
  };


  createThePUBLICPOLL = () => {
    let cart = this.props.pollparams;
    console.log(cart)
    this.props.createThePUBLICPOLL(cart)
    this.state.cart=[]
    // this.state.cart.push(this.state.input); // same as above, though bad practice 
  };


  createThePRIVATEPOLL = () => {
    let cart = this.props.pollparams;
    console.log(cart)
    this.props.createThePRIVATEPOLL(cart)
    this.state.cart=[]
    // this.state.cart.push(this.state.input); // same as above, though bad practice 
  };




  createthePOLLDB = () => {
    let DB = this.props.DB;
    console.log(cart)
    DB.push(this.props.convertformat)
    this.props.update_database(DB)
    // this.state.cart.push(this.state.input); // same as above, though bad practice 
  };


  

  render() {



    return (
      <div>
        <div>
        <input
          type="text"
          onChange={this.saveInput}
        />
         <button onClick={()=>this.props.addQuestion(this.state.input)}> Add Question </button>
      </div>

        <div>
        <input
          type="text"
          onChange={this.saveInput}
        />
        <button onClick={this.addNewItem}> Add Item </button>

        </div>


      <div>
        <ol>
          {this.state.cart.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems}</li>
          })}
        </ol>

        </div>

        <div>


        <button onClick={this.createThePUBLICPOLL}> CreatePublicPoll </button>
        <button onClick={this.createThePRIVATEPOLL}> CreatePrivatePoll </button>

        </div>



        <div>


<button onClick={this.createthePOLLDB}> ADDTODB </button>

</div>
      </div>
    );
  }
}
  const mapDispatchToProps = dispatch => ({
    additem: (cart)=> dispatch(additem(cart)),
    addQuestion:(item)=>dispatch(addQuestion(item)),
    createThePRIVATEPOLL:(items)=>dispatch(createThePRIVATEPOLL(items)),
    createThePUBLICPOLL:(items)=>dispatch(createThePUBLICPOLL(items)),
    update_database:(items)=>dispatch(update_database(items))
    
  });
  
  const mapStateToProps = createStructuredSelector({
    pollparams: selectParamsToCreate,
    convertformat:selectconvertformat,
    DB:selectPublicDB

  });




export default connect(mapStateToProps,mapDispatchToProps)(PollQuestions);
