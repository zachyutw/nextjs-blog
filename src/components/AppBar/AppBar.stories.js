import React from 'react';
import AppBar from './AppBar';

import { Meta, Story, Preview, Props } from '@storybook/addon-docs/blocks';
<Meta title="Test" component={AppBar} />;

export default {
    title: 'AppBar',
    component: AppBar,
};

export const renderAppBar = () => <AppBar />;
