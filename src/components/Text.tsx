import { FC } from 'react'
import {styled} from 'styled-components'
import { theme } from '@styles/theme'

const StyledText = styled.h1`
font-family: ${props => props.theme.font.family};
color: ${props => props.theme.colors[props.color as keyof typeof theme.colors]};

font-weight: ${props => {
    switch (props.as) {
        case 'h1':
            return props.theme.font.weight.h1
        case 'h2':
            return props.theme.font.weight.h2
        case 'h3':
            return props.theme.font.weight.h3
        default:
            return props.theme.font.weight.p
    }
}};

font-size: ${props => {
    switch (props.as) {
        case 'h1':
            return props.theme.font.size.l.h1
        case 'h2':
            return props.theme.font.size.l.h2
        case 'h3':
            return props.theme.font.size.l.h3
        default:
            return props.theme.font.size.l.p
    }
}};

@media (max-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: ${props => {
    switch (props.as) {
        case 'h1':
            return props.theme.font.size.m.h1
        case 'h2':
            return props.theme.font.size.m.h2
        case 'h3':
            return props.theme.font.size.m.h3
        default:
            return props.theme.font.size.m.p
    }
}};
    
};

@media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => {
    switch (props.as) {
        case 'h1':
            return props.theme.font.size.s.h1
        case 'h2':
            return props.theme.font.size.s.h2
        case 'h3':
            return props.theme.font.size.s.h3
        default:
            return props.theme.font.size.s.p
    }
}};
    
};
`

type TextProps = {
    color?: keyof typeof theme.colors
    children?: React.ReactNode,
    as?: keyof JSX.IntrinsicElements
}

export const Text:FC<TextProps> = ({color='white', children, as='p'}) => {
  return (
    <StyledText as={as} color={color}>{children}</StyledText>
  )
}

