import React from 'react';

const Information = () => {
	return (
		<div>
			<h4>Thông tin cá nhân</h4>
			<form className='form-inline' action='/action_page.php'>
				<div className='form-group'>
					<label for='email'>Email address:</label>
					<input type='email' className='form-control' id='email' />
				</div>
				<div className='form-group'>
					<label for='pwd'>Password:</label>
					<input type='password' className='form-control' id='pwd' />
				</div>
				<div className='checkbox'>
					<label>
						<input type='checkbox' /> Remember me
					</label>
				</div>
				<button type='submit' className='btn btn-default'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Information;
