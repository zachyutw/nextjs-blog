import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { select } from "@storybook/addon-knobs";

import RetroWave from "../../src/styles/themes/retroWave";
import Garden from "../../src/styles/themes/garden";

const themes = { Garden: Garden, RetroWave: RetroWave };
const themeNames = Object.keys(themes);

export default ({ children }) => {
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