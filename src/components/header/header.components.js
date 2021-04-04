import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import './header.styles.scss'



const Header = ({ currentUser }) => (
  
  
  <div className='header'>
   
  <div className='options'>
    
    {
    
    
    currentUser ?(
      <div className='option' onClick={() => auth.signOut()}>
        SIGN OUT
      </div>
    ) : (
      <Link className='option' to='/signin'>
        SIGN IN
      </Link>
    )}


<Link className='option' to='/create-polls'>
        Create-polls
      </Link>

      <Link className='option' to='/your-polls'>
        yourpolls
      </Link>

      <Link className='option' to='/'>
        homepage
      </Link>



    </div>


  
</div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser});

export default connect(mapStateToProps)(Header);
