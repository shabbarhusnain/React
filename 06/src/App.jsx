import { ThemeProvider } from "./ThemeContext";

import useTheme from "./ThemeContext";
import Child from "./Child";
function App() {
  const {themeMode,darkTheme,lightTheme}=useTheme
  return (
  <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <Child/>
  </ThemeProvider>
  )
}
export default App;

