import { FC } from 'react';
import { styled } from 'styled-components';
import { theme } from '@styles/theme';
import { media } from '@utils/style-helpers';

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

  ${({ theme }) => media.lessThan(theme, 'desktop')} {
    font-size: ${(props) => {
      const size = props.theme.font.size.m[`${props.as}`];
      if (!size) return props.theme.font.size.m.p;
      return size;
    }};
  }

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    font-size: ${(props) => {
      const size = props.theme.font.size.s[`${props.as}`];
      if (!size) return props.theme.font.size.s.p;
      return size;
    }};
  }
`;

type TextProps = {
  color?: keyof typeof theme.colors;
  className?: string;
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

export const Text: FC<TextProps> = ({
  color = 'white',
  children,
  as = 'p',
  className = '',
}) => {
  return (
    <StyledText as={as} color={color} className={className}>
      {children}
    </StyledText>
  );
};
