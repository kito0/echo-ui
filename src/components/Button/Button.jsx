import './button.css';

export const Button = ({label, onclick}) => {
	return (
		<button
			className={`echo-btn`}
			onclick={onclick}
		>
			<h4>{label}</h4>
		</button>
	);
};
