import React, { Suspense, useState } from "react";
import { ThemeProvider } from 'styled-components';
import CharactersList from "./components/CharactersList";
import { theme } from "./theme"
import "./index.css";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import SwitchTheme from "./components/SwitchTheme";
import AppTitle from "./components/AppTitle";
import "./i18n";
import { createRoot } from 'react-dom/client';
import LanguageSelect from "./components/LanguageSelect";
import i18nRMInstance from "./i18n";
import { I18nextProvider } from 'react-i18next';
import { ErrorBoundary } from "react-error-boundary";


const App = () => {
  const [themeMode, setThemeMode] = useState<string>("light");
  const [selectedLanguage, setSelectedLanguage] = useState<string>(i18nRMInstance.language);

  const toggleTheme = (): void => {
    themeMode === "light" ? setThemeMode("dark") : setThemeMode("light");
  };

  const onLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    i18nRMInstance.changeLanguage(language);
  };

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <I18nextProvider i18n={i18nRMInstance}>
        <Suspense fallback="loading...">
          <ThemeProvider theme={themeMode === 'light' ? theme.light : theme.dark}>
            <GlobalStyles />
            <div className="container">
              <Navbar>
                <Container>
                  <AppTitle />
                  <SwitchTheme onChange={() => toggleTheme()}></SwitchTheme>
                </Container>
              </Navbar>
              <Container>
                <LanguageSelect selectedLanguage={selectedLanguage} onLanguageChange={onLanguageChange} />
              </Container>
              <CharactersList />
            </div>
          </ThemeProvider >
        </Suspense>
      </I18nextProvider>
    </ErrorBoundary>
  );
}

const domNode = document.getElementById('app');
if (!domNode) throw new Error('Failed to find the root element');
const root = createRoot(domNode);
root.render(
  <App />
);