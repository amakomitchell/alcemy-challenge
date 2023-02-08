import { createContext, FC, ReactNode, useState } from 'react';

const DEFAULT_SETTINGS_CONTEXT_VALUE = {
  '2d': 'red',
  '7d': 'blue',
  '28d': 'green',
};

const getLocalStorageSettings = () => {
  const settings = localStorage.getItem('cement_settings');
  if (settings) {
    return JSON.parse(settings);
  }
  return DEFAULT_SETTINGS_CONTEXT_VALUE;
};

type SettingsContext = {
  value: SettingsValue;
  updateColor: (day: string, color: string) => void;
};

// context for color picker settings
const SettingsContext = createContext<SettingsContext>({
  value: getLocalStorageSettings(),
  updateColor: () => {},
});

type SettingsValue = {
  '2d': string;
  '7d': string;
  '28d': string;
};

type SettingsContextProviderProps = {
  children: ReactNode;
};

export const SettingsContextProvider: FC<SettingsContextProviderProps> = ({
  children,
}) => {
  const updateColor = (day: string, color: string) => {
    // update local storage
    localStorage.setItem(
      'cement_settings',
      JSON.stringify({
        ...getLocalStorageSettings(),
        [day]: color,
      })
    );

    // update context
    setSettings((prev) => ({
      ...prev,
      value: {
        ...prev.value,
        [day]: color,
      },
    }));
  };

  const [settings, setSettings] = useState<SettingsContext>({
    value: getLocalStorageSettings(),
    updateColor,
  });

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};
export default SettingsContext;
