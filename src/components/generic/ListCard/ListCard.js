import './style.scss';

function ListCard({title, description, onClick, background}) {
	return (
		<div onClick={onClick} style={background && "background-colour:" +background} className={'ListCard' + (onClick ? ' ListCard--clickable' : '')}>
			<h3 className='ListCard__title'>{title}</h3>
			<p className='ListCard__desc'>{description}</p>
		</div>
	);
}

export default ListCard;
