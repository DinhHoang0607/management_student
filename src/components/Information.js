import React from 'react';
import '../App.css';
const Information = () => {
	return (
		<div className='login-box'>
			<h4>Thông tin cá nhân</h4>
			<form>
				<div className='user-box'>
					<input type='text' name='' required='' />
					<label>Username</label>
				</div>
				<div className='user-box'>
					<input type='password' name='' required='' />
					<label>Password</label>
				</div>
				<a href='#'>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Submit
				</a>
			</form>
		</div>
	);
};

export default Information;
