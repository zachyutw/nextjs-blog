import React from 'react';
import CoverProfile from './CoverProfile';
import ThemeKnob from '../../../utils/story/ThemeKnob';
import { withKnobs } from '@storybook/addon-knobs';

import { Meta } from '@storybook/addon-docs/blocks';
<Meta title="Profile" component={CoverProfile} />;
export default {
    title: 'Profile',
    component: CoverProfile,
    decorators: [withKnobs],
};

export const renderAppBar = () => (
    <ThemeKnob>
        <div style={{ width: '50%' }}>
            <CoverProfile />
        </div>
    </ThemeKnob>
);
