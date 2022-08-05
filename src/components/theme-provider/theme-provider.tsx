import React, { PropsWithChildren, ReactElement } from "react";
import { useTheme, IUseThemeContext } from "./use-theme";
import './theme-provider.scss';

export const ThemeContext = React.createContext<IUseThemeContext>({} as IUseThemeContext);


export default function ThemeProvider(props: PropsWithChildren<any>): ReactElement  {
  const theme = useTheme();
  return (
    <ThemeContext.Provider value={theme}>
      <div className={`theme-provider-wrapper`}>
        {props.children}
      </div>
    </ThemeContext.Provider>
  );
}