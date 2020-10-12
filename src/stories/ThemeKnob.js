import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { select } from "@storybook/addon-knobs";

import RetroWave from "../styles/themes/retroWave";
import Garden from "../styles/themes/garden";

const themes = { Garden: Garden, RetroWave: RetroWave };
const themeNames = Object.keys(themes);

const ThemeKnob =  ({ children }) => {
    const theme = select(
        "Theme",
        themeNames,
        themeNames[0],
        "Themes"
    );

    return (
        <ThemeProvider theme={themes[theme]}>
            {children}
        </ThemeProvider>
    );
};

export default ThemeKnob;