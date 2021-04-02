import React,{Component} from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCurrentVotes } from '../../redux/poll-redux/poll-redux.selectors';
import { selectconvertformat } from '../../redux/create-poll-redux/create-poll-redux.selectors';

import { connect } from 'react-redux';
const Poll  =(lang)=> {
	const langi=[{name:'Ques1',votes:0,type:'private'},{name:'Question1ans1',votes:0},{name:'Question1ans2',votes:0}]
	
	const langii=lang.lang
	console.log('item',langii)
	return (        <div className="languages">
		<h1>Question:{langii[0].name}</h1>
					{	
					 langii.filter((item,id)=>id>0).map(item =>(
						<div  className="language">
							<div className="voteCount">
								{item.votes}
							</div>
							<div className="languageName">
								{item.name
								}
							</div>
							<button >Click Here</button>
						</div>
					)
					)
					}

					
				
				</div>)
		
	
				}



const mapStateToProps = createStructuredSelector({
    currentVotes: selectconvertformat
});

export default connect(mapStateToProps)(Poll);