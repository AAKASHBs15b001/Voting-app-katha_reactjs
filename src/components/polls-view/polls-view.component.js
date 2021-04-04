import React from 'react';
import Poll from '../poll/poll.component'
import './poll-view.styles.scss'
const PollView=({DB})=>{
return(
<div className='preview'>
{DB.map(item=><Poll lang={item}></Poll>)
}

</div>
)

}



export default PollView;