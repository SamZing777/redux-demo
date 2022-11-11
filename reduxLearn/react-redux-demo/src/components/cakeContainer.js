import React from 'react';
import { connect } from 'react-redux';

import buyCake from '../redux/cakes/cakeActions';

const mapStateToProps = state => {
	return{
		numberOfCakes: state.cake.numberOfCakes
	}
}

const mapDispatchToProps = dispatch => {
	return{
		buyCake: () => dispatch(buyCake())
	}
}

const CakeContainer = (props) =>{
	return(
		<div>
			<h2> Number of Cakes - {props.numberOfCakes} </h2>
			<button onClick={props.buyCake}> Buy Cake </button>
		</div>
	)
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
		)(CakeContainer);
