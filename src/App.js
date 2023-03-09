import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import Information from './components/Information';

function App() {
	return (
		<div className='px-3'>
			<Search />
      <Table />
      <Information/>
		</div>
	);
}

export default App;
