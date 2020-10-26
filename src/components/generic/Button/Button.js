import './style.scss';

function Button({ type, onClick, value }) {

	const handleClick = (event) => {
		event && event.preventDefault && event.preventDefault()

		onClick(event)
	}


	return (
		<div className='Button'>
			<button type={type} onClick={handleClick} value={value} >{value}</button>
		</div>
	);
}

export default Button;
