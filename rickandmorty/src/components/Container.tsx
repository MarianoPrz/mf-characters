import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import classNames from 'classnames';

const ContainerStyled = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  ${theme.breakpoints.sm}{ max-width: 540px  }
  ${theme.breakpoints.md}{ max-width: 720px  }
  ${theme.breakpoints.lg}{ max-width: 960px  }
  ${theme.breakpoints.xl}{ max-width: 1140px }
`

const Container: React.FC<{ className?: string, children: React.ReactNode }> = ({ className, children }) => {

    const classConfig = classNames({
        'container': true,
        [`${className}`]: className
    })

    return (
        <ContainerStyled className={classNames(classConfig)}>
            {children}
        </ContainerStyled>
    )
}

export default Container;