import './button.css';

export const Button = ({
	size,
	className,
	label,
	onclick,
	bg,
	textColor,
	disabled,
}) => {
	const echoBtnSize =
		size === 'sm'
			? '.75em'
			: size === 'md'
			? '1em'
			: size === 'lg'
			? '1.25em'
			: '1em';

	return (
		<button
			className={`echo-btn ${className}`}
			onClick={(e) => onclick}
			aria-label={label}
			disabled={disabled}
			style={{
				fontSize: `${echoBtnSize}`,
				background: bg,
				color: textColor,
			}}
		>
			<h4>{label ? label : 'Submit'}</h4>
		</button>
	);
};
