import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import './style.scss';

function TextInput({label, placeholder, initialValue, hider, size, errorText}) {
	const [value, setValue] = useState(initialValue || "")
	const [hidden, setHidden] = useState(!!hider)
	const onChange = (event) => {
		const value = event.target.value

		setValue(value)
	}

	return (
		<div className='TextInput'>
			<label className="TextInput__label">
				{label}
				<input className={"TextInput__input " + (errorText ? "TextInput__input--error": "")} type={hidden ? "password" : "text"} value={value} onChange={onChange} placeholder={placeholder} size={size || 12} autoComplete></input>
			</label>
			{hider && <FontAwesomeIcon className='TextInput__hider' onClick={()=>setHidden(!hidden)} icon={hidden ? faEye : faEyeSlash}/>}
			{errorText && <div className='TextInput__error'>{errorText}</div> }
		</div>
	);
}

export default TextInput;
