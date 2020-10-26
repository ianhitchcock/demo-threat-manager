import { useState } from 'react';
import Button from '../generic/Button/Button';
import TextInput from '../generic/TextInput/TextInput';
import './style.scss';

function AuthBox() {
	const [loggedIn, setLoggedIn] = useState(false)

	const login = () => {}

	const logout = () => {
		//
	}

	return (
		<div className='AuthBox'>
			{loggedIn ? (
				<form className='AuthBox__form'>
					<p >Welcome! </p>
					<Button className='AuthBox__submit' onClick={logout} value="logout" type="submit"/>
				</form>
			) : (
				<form className='AuthBox__form'>
					<TextInput className='AuthBox__input' label="email" placeholder="example@gmail.com" size={18}/>
					<TextInput className='AuthBox__input' label="password" placeholder="********"size={10} hider/>
					<Button className='AuthBox__submit' onClick={login} value="login" type="submit"/>
				</form>
			)}
		</div>
	);
}

export default AuthBox;
