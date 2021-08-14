import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../components/Button';

const stories = storiesOf('Button', module);

stories.add('small', () => {
	return <Button size="1" label="hello" />;
});
