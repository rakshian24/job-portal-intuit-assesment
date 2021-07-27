import { TOGGLE_THEME } from './actionType';

export const toggleTheme = (isDarkMode) => {
  return {
    type: TOGGLE_THEME,
    payload: isDarkMode,
  };
};
