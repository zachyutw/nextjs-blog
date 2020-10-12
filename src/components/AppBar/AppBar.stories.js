import React from 'react';
import AppBar from './AppBar';
import ThemeKnob from '../../../utils/story/ThemeKnob';
import { withKnobs } from "@storybook/addon-knobs";


import { Meta } from '@storybook/addon-docs/blocks';
<Meta title="Test" component={AppBar} />;

export default {
    title: 'AppBar',
    component: AppBar,
    decorators:[withKnobs]
};

export const renderAppBar = () => <ThemeKnob> <AppBar /></ThemeKnob>;
