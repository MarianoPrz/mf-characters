import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { useTranslation } from 'react-i18next';

export const AppTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`
export const AppTitleText = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.3;
  color: ${(props) => props.theme.color};
  label {
    color: ${theme.colors.primary};
  }
`
const AppTitle = () => {
  const { t } = useTranslation();

  return (
    <AppTitleContainer>
      <AppTitleText><label>Futurama</label></AppTitleText>
      <AppTitleText>{t("cast")}</AppTitleText>
    </AppTitleContainer>
  )
}

export default AppTitle;