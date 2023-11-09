const theme = require('./tailwind.config');
const resolveConfig = require('tailwindcss/resolveConfig');
const fs = require('fs');

const fileDir = './src/helpers/tailwindColors.ts';

fs.writeFileSync(
  fileDir,
  `
export const tailwindColors = ${JSON.stringify(
    resolveConfig(theme).theme.colors,
    null,
    2,
  )};
`,
  'utf-8',
);

console.log(`Theme colors copied! -> "${fileDir}"`);
