import AuthBox from '../AuthBox/AuthBox';
import './style.scss';

function Header({ title }) {
	return (
		<header className='Header'>
			<h1 className='Header__title'>{title}</h1>
			<AuthBox className='Header__auth'/>
		</header>
	);
}

export default Header;
