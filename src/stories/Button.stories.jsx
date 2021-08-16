import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../components/Button';

const stories = storiesOf('Button', module);

stories.add('small', () => {
	return <Button size="1" label="Submit" />;
});
stories.add('blue button', () => {
	return <Button size="1" label="Submit" bg="#000" textColor="green" />;
});
