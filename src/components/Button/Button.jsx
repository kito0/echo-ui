import './button.css';

export const Button = ({label, onclick, bg, textColor}) => {
	return (
		<button
			className={`echo-btn`}
			onClick={() => onclick}
			aria-label={label}
			style={
				{background: bg},
				{color: {textColor}}
			}
		>
			<h4>{label}</h4>
		</button>
	);
};
