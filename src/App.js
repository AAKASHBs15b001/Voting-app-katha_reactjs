import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import './App.css';

import SignInAndSignUpPage from './pages/sign-in-page/sign-in-page.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { clickonPOLE } from './redux/poll-redux/poll-redux.actions';
import { selectCurrentVotes } from './redux/poll-redux/poll-redux.selectors';
import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUser } from './redux/user/user.actions';

import Header from './components/header/header.components';
import Poll from './components/poll/poll.component';
import TimeComponent from './components/lifecycle-component/lifecycle.component'
import Yourpolls from './pages/Your-Polls/your-polls.component';
import HomePage from './components/poll/poll.component';
import PollQuestions from './components/create-polls/create-polls.component';
import {selectPublicDB} from './redux/create-poll-redux/create-poll-redux.selectors'
// Declaring poll question and answers
class App extends Component{
	unsubscribeFromAuth = null;
  currentDB=this.props.currentDB.filter(item=>item!==null)
  publicDB=this.props.currentDB
  privateDB=this.props.currentDB.filter(item=>item[0].type=='private')
  

  componentDidMount() {
    const { setCurrentUser } = this.props;
    

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

	// vote (i) {
  //   const {languages}=this.props.languages
  //   console.log(languages)
	// 	let newLanguages = [...this.state.languages];
	// 	newLanguages[i].votes++;
	// 	function swap(array, i, j) {
	// 		var temp = array[i];
	// 		array[i] = array[j];
	// 		array[j] = temp;
	// 	}
  //   this.setState({languages: newLanguages});
		
	// }

  

	render(){
    console.log('overall',this.props.currentDB)
    console.log('pubic',this.props.currentDB.filter(item=>item!==null).filter(item=>item[0].type=='Public'))
    console.log('private',this.props.currentDB.filter(item=>item!==null).filter(item=>item[0].type=='private'))
		return(
			
      <div>
        <Header></Header>    
        <Switch>
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.User ? (
                <HomePage></HomePage>    

              ) : (
                <SignInAndSignUpPage />
              )
            }
          />

        
         <Route
            exact
            path='/create-polls'
            render={() =>
              <PollQuestions></PollQuestions>
            }
          />

<Route
            exact
            path='/'
            render={() =>
              this.props.currentDB.filter(item=>item!==null).filter(item=>item[0].type=='Public').map(item=><Poll lang={item}></Poll>)}
            
          />



          <Route
            exact
            path='/your-polls'
            render={() =>
              <Yourpolls currentDB={this.props.PublicDB}></Yourpolls>
            }
          />


<Route
            exact
            path='/lifecycle'
            render={() =>
              <TimeComponent></TimeComponent>
            }
          />


        </Switch>
      </div>
			
		);
	}
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


const mapStateToProps = createStructuredSelector({
  languages:selectCurrentVotes,
  User: selectCurrentUser,
  currentDB:selectPublicDB


});




export default connect(
  mapStateToProps,
  mapDispatchToProps
) (App)