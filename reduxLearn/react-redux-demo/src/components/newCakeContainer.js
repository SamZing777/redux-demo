import React, { useState } from 'react';
import { connect } from 'react-redux';

import buyCake from '../redux/cakes/cakeActions';

const mapStateToProps = state => {
	return{
		numberOfCakes: state.cake.numberOfCakes
	}
}

const mapDispatchToProps = dispatch => {
	return{
		buyCake: number => dispatch(buyCake(number))
	}
}

const NewCakeContainer = (props) =>{
	const[number, setNumber] = useState(1);

	return(
		<div>
			<h2> Number of New Cakes - {props.numberOfCakes} </h2>
			<input type="text" value={number} onChange={e=>setNumber(e.target.value)} />
			<button onClick={()=>props.buyCake(number)}> Buy {number} Cake </button>
		</div>
	)
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
		)(NewCakeContainer);
