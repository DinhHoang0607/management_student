import React from 'react';
import { FaSearch } from 'react-icons/fa';
const Search = () => {
	return (
		<div class='input-group py-3'>
			<div class='dropdown'>
				<button
					class='btn btn-secondary dropdown-toggle'
					type='button'
					id='dropdownMenuButton'
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'
				>
					Tìm kiếm theo ...
				</button>
				<div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
					<a class='dropdown-item' href='#'>
						Action
					</a>
					<a class='dropdown-item' href='#'>
						Another action
					</a>
					<a class='dropdown-item' href='#'>
						Something else here
					</a>
				</div>
			</div>
			<input
				type='search'
				class='form-control rounded'
				placeholder='Tìm kiếm theo mã/ tên nhân viên'
				aria-label='Search'
				aria-describedby='search-addon'
			/>
			<span class='input-group-text border-0' id='search-addon'>
				<FaSearch />
			</span>
		</div>
	);
};

export default Search;
