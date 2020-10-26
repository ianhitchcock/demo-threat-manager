import './style.scss';

function ThreatForm({threat}) {
	const { id, title, description, asset, classification, impact, likelihood, risk} = threat
	return (
		<div className='ThreatForm'>
			<div className='ThreatForm__id'>{id}</div>
			<h2 className='ThreatForm__title'>{title}</h2>
			<p className='ThreatForm__description'>{description}</p>
			<div className='ThreatForm__asset-container'><img src={asset} alt={title} /></div>
			<div className='ThreatForm__classification'>{classification}</div>
			<div className='ThreatForm__impact'>{impact}</div>
			<div className='ThreatForm__likelihood'>{likelihood}</div>
			<div className='ThreatForm__risk'>{risk}</div>
		</div>
	);
}

export default ThreatForm;
