import React from 'react';
import { connect } from 'react-redux';

import { buyIceCream } from '../redux/iceCreams/iceCreamActions';


const mapStateToProps = state => {
	return{
		numberOfIceCream: state.iceCream.numberOfIceCream
	}
}

const mapDispatchToProps = dispatch => {
	return{
		buyIceCream: () => dispatch(buyIceCream())
	}
}

const IceCreamContainer = (props) =>{
	return(
		<div>
			<h2> Number of Ice Cream - {props.numberOfIceCream} </h2>
			<button onClick={props.buyIceCream}> Buy Ice Cream </button>
		</div>
	)
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
		)(IceCreamContainer);
