import './button.css';

export const Button = ({className, label, onclick, bg, textColor, disabled}) => {
	return (
		<button
			className={`echo-btn ${className}`}
			onClick={() => onclick}
			aria-label={label}
			disabled={disabled}
			style={{
				background: bg,
				color: textColor
			}}
		>
			<h4>{label ? label : "Submit"}</h4>
		</button>
	);
};
