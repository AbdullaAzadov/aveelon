import { FC } from 'react';
import { styled } from 'styled-components';
import { theme } from '@styles/theme';

const StyledText = styled.h1`
  font-family: ${(props) => props.theme.font.family};
  color: ${(props) =>
    props.theme.colors[props.color as keyof typeof theme.colors]};

  font-weight: ${(props) => {
    const size = props.theme.font.weight[`${props.as}`];
    if (!size) return props.theme.font.weight.p;
    return size;
  }};

  font-size: ${(props) => {
    const size = props.theme.font.size.l[`${props.as}`];
    if (!size) return props.theme.font.size.l.p;
    return size;
  }};

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: ${(props) => {
      const size = props.theme.font.size.m[`${props.as}`];
      if (!size) return props.theme.font.size.m.p;
      return size;
    }};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => {
      const size = props.theme.font.size.s[`${props.as}`];
      if (!size) return props.theme.font.size.s.p;
      return size;
    }};
  }
`;

type TextProps = {
  color?: keyof typeof theme.colors;
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

export const Text: FC<TextProps> = ({
  color = 'white',
  children,
  as = 'p',
}) => {
  return (
    <StyledText as={as} color={color}>
      {children}
    </StyledText>
  );
};
