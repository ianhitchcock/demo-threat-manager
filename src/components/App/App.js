import { useState } from 'react';
import Header from '../Header';
import ThreatForm from '../ThreatForm';
import ThreatList from '../ThreatList';
import './style.scss';

function App() {
	const [index, setIndex] = useState(0)
	const threats = [{}].concat([])

	return (
		<div className='App'>
			<Header title='Threat Manager'/>
			<main className="App__main">
				<div className="App__main__list"><ThreatList threats={threats}/></div>
				<div className="App__main__view" ><ThreatForm threat={threats[index]}/></div>
			</main>
		</div>
	);
}

export default App;
