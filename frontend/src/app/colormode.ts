/** Function to get the current color mode. */
export const getColorMode = () => {
    const colorMode = document.cookie.split('; ').find(row => row.startsWith('colorMode='));
    return colorMode ? colorMode.split('=')[1] : 'light';
};

/** Function to set the color mode. */
export const setColorMode = (mode: string) => {
    document.cookie = `colorMode=${mode}`;
    return mode;
};

/** Function to toggle the color mode. */
export const toggleColorMode = () => {
  const currentMode = getColorMode();
  const newMode = currentMode === 'light' ? 'dark' : 'light';
  setColorMode(newMode);
  console.log(`Changed color mode from ${currentMode} to ${newMode}`);
  return newMode;
};