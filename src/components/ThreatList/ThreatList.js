import ListCard from '../generic/ListCard/ListCard';
import './style.scss';

function ThreatList({threats}) {
	function handleSelection(index) {
		//
	}
	return (
		<div className='ThreatList'>
			{threats.map(({title, description, risk}, index) => 
				<div className={"ThreatList--risk--" + risk || 0} key={index}>
					<ListCard title={title || "New Threat"} description={description || "Click here to submit a new threat!"} onClick={handleSelection.bind(index)}/>
				</div>
			)}
		</div>
	);
}

export default ThreatList;
