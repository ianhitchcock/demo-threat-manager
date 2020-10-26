import AuthBox from '../AuthBox/AuthBox';
import './style.scss';

function Header({ title }) {
	return (
		<div className='Header'>
			<h1 className='Header__title'>{title}</h1>
			<AuthBox className='Header__auth'/>
		</div>
	);
}

export default Header;
