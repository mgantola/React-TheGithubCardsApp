import React from 'react';
import '../styles/Style.css';

class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} style={{width: '75px'}}  />
        <div className="info" style={{display: 'inline-block', marginLeft:12}}>
          <div className="name" style={{fontSize: '125%'}}>{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

export default Card;