import React from 'react';
import {storiesOf} from '@storybook/react';
import EventForm from '../src/components/eventForm';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

storiesOf("KPop Events App/eventForm", module).add("default", () => <EventForm />);