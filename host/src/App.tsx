
import React, { useState } from "react";
import ReactDOM from "react-dom";
import RMCharactersList from "rickandmorty/CharactersList";
import FUTCharactersList from "futurama/CharactersList";
import "./index.css";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from './theme'
import useSwitchLanguage from "./hooks/useSwitchLanguage";
import LanguageSelect from "./components/LanguageSelect";
import { I18nextProvider } from "react-i18next";
import i18nRMInstance from "rickandmorty/i18nInstance";
import i18nFutInstance from "futurama/i18nInstance";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import AppTitle from "./components/AppTitle";
import SwitchTheme from "./components/SwitchTheme";
import { ButtonPrimary } from "./components/Button";
import ButtonsContainer from "./components/ButtonsContainer";

const App = () => {
  const [themeMode, setThemeMode] = useState<string>("light");
  const { selectedLanguage, switchAllLanguages } = useSwitchLanguage();
  const [showApp, setShowApp] = useState<{ rickandmorty: boolean, futurama: boolean, [key: string]: boolean }>({ rickandmorty: true, futurama: false });
  const toggleTheme = (): void => {
    themeMode === "light" ? setThemeMode("dark") : setThemeMode("light");
  };

  const onLanguageChange = (language: string) => {
    switchAllLanguages(language);
  };

  const switchCharactersAppHandler = (e: React.MouseEvent<HTMLButtonElement>, appName: string) => {
    e.preventDefault();
    setShowApp((state) => {
      const updatedState = { ...state };
      Object.keys(updatedState).forEach((key) => {
        updatedState[key] = key === appName;
      });
      return updatedState;
    });
  };

  return (
    <ThemeProvider theme={themeMode === 'light' ? theme.light : theme.dark}>
      <div className="container">
        <GlobalStyles />
        <Navbar>
          <Container>
            <AppTitle />
            <SwitchTheme onChange={() => toggleTheme()}></SwitchTheme>
          </Container>
        </Navbar>

        <ButtonsContainer>
          <ButtonPrimary onClick={(e) => switchCharactersAppHandler(e, "rickandmorty")} >Rick and Morty</ButtonPrimary>
          <ButtonPrimary onClick={(e) => switchCharactersAppHandler(e, "futurama")}>Futurama</ButtonPrimary>
          <LanguageSelect selectedLanguage={selectedLanguage} onLanguageChange={onLanguageChange} />
        </ButtonsContainer>

        {
          showApp.rickandmorty &&
          <I18nextProvider i18n={i18nRMInstance}>
            <RMCharactersList />
          </I18nextProvider>
        }
        {
          showApp.futurama &&
          <I18nextProvider i18n={i18nFutInstance}>
            <FUTCharactersList />
          </I18nextProvider>
        }
      </div>
    </ThemeProvider >
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
