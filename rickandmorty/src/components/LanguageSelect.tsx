import React, { SelectHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Select = styled.select`
  padding: .85rem 1.3rem;
  font-size: 1rem;
  border: 0.125rem solid #ccc;
  border-radius: .25rem;
  background-color: ${(props) => props.theme.buttons.primary.backgroundColor};
  color: ${(props) => props.theme.buttons.primary.color};
  border-color: ${(props) => props.theme.buttons.primary.borderColor};
  &:hover{
    background-color: ${(props) => props.theme.buttons.primary.borderColor};
    color: white;
  }
`;

const Option = styled.option`

`;

const LanguageSelect: React.FC<{ selectedLanguage: string, onLanguageChange: (value: string) => void }> = ({ selectedLanguage, onLanguageChange }) => {
  const { t } = useTranslation();
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    onLanguageChange(value);
  };

  return (
    <Select value={selectedLanguage} onChange={handleLanguageChange}>
      <Option value="en">{t("english_label")}</Option>
      <Option value="es">{t("spanish_label")}</Option>
    </Select>
  );
};

export default LanguageSelect;