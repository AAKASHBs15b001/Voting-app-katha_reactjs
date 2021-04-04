import React from 'react';


import Poll from '../../components/poll/poll.component';
import { selectPublicDB } from '../../redux/create-poll-redux/create-poll-redux.selectors';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import './your-polls.styles.scss'
import PollView from '../../components/polls-view/polls-view.component'



const Yourpolls = ({currentDB}) => {
    const currentDBD=[[{name:'Ques1',votes:0,type:'private'},{name:'Question1ans1',votes:0},{name:'Question1ans2',votes:0}],[{name:'Ques2',votes:0,type:'private'},{name:'Question2ans1',votes:0},{name:'Question2ans2',votes:0}],[{name:'Ques3',votes:0,type:'public'},{name:'Question3ans1',votes:0},{name:'Question3ans2',votes:0}],[{name:'Ques4',votes:0,type:'private'},{name:'Question4ans1',votes:0},{name:'Question4ans2',votes:0}]]
    
    currentDB=currentDB.filter(item=>item!==null)
   const  publicDB=currentDB.filter(item=>item[0].type=='Public')
   const  privateDB=currentDB.filter(item=>item[0].type=='private')

    console.log(currentDB)
    console.log('public',publicDB)
    console.log('private',privateDB)
    // return(<h1>we are here</h1>)
    

    
    
    return(

 
<div >
<PollView DB={currentDB}></PollView>


</div>


        // <div className='collection-preview'>
        //  <h>public polls</h>
        //   <div className='preview'>
        //     {publicDB
        // .
        //       map(item => (
        //         <div className='collection-preview'>
        //         <Poll lang={item} /></div>
        //       ))}
        //   </div>


        //   <h>private polls</h>
        //   <div className='preview'>
        //     {privateDB
        //       .map(item => (
        //         <div className='collection-preview'>
        //         <Poll lang={item}/>
        //         </div>
        //       ))}
        //   </div>
        // </div>
    )
              };
      



const mapStateToProps = createStructuredSelector({
    currentDB: selectPublicDB})  




export default connect(mapStateToProps)(Yourpolls)