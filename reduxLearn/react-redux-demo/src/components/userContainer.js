import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { fetchUsers } from "../redux/user/userActions";

const mapStateToProps = state =>{
	return{
		userData: state.user
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		fetchUsers: () => dispatch(fetchUsers())
	}
}

const UserContainer = ({ userData, fetchUsers }) =>{

	useEffect(() => {
		fetchUsers()
		}, [])

	 return userData.loading ? 
	 (
	 	<div>
	 		<h2> Loading </h2>
	 	</div>
	 )
	 : userData.error ? 
	 (
	 	<div>
	 		<h2> { userData.error } </h2>
	 	</div>
	 )
	 :
	 (
	 	<div>
	 		<h2> User List </h2>
	 		<div>
	 			{
	 				userData &&
	 				userData.users &&
	 				userData.users.map(
	 							user => <p key={user.id}>
	 									{user.name}
	 								</p>
	 						)
	 			}
	 		</div>
	 	</div>
	 )
}

export default connect(
				mapStateToProps, 
				mapDispatchToProps)
				(UserContainer)
