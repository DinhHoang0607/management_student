import React from 'react';

const Table = () => {
	return (
		<div>
			<div className='float-right'>
				<button>Thêm mới</button>
			</div>
			<table class='table table-bordered table-hover '>
				<thead className='bg-warning'>
					<tr className='text-center'>
						<th scope='col'>STT</th>
						<th scope='col'>Xử lý</th>
						<th scope='col'>Họ tên</th>
						<th scope='col'>Mã SV</th>
						<th scope='col'>Email</th>
						<th scope='col'>SĐT</th>
						<th scope='col'>Số CCCD</th>
						<th scope='col'>Quê quán</th>
						<th scope='col'>Nơi TT</th>
						<th scope='col'>Ngày sinh</th>
						<th scope='col'>Chuyên ngành</th>
						<th scope='col'>Dân tộc</th>
						<th scope='col'>Tôn giáo</th>
						<th scope='col'>Giới tính</th>
						<th scope='col'>Ảnh chân dung</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope='row'>1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope='row'>2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope='row'>3</th>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
