const presets = ['next/babel', '@babel/preset-react'];
const plugins = [
    ['styled-components', { ssr: true, displayName: true, preprocess: false }],
];

module.exports = { presets, plugins };
