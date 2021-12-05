import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../components/Button';

const stories = storiesOf('Button', module);

stories.add('small', () => {
	return <Button size="sm" label="Submit" />;
});
stories.add('blue button', () => {
	return <Button size="md" label="Submit" bg="blue" textColor="black" />;
});
