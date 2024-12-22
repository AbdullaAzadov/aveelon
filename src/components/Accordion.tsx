import { FC, useState } from 'react';
import clsx from 'clsx';

import { ArrowDownIcon } from '@components/icons/index';
import styled from 'styled-components';

type AccordionProps = {
  title: string | React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  initialOpen?: boolean;
  BaseIcon?: React.ReactNode;
  ActiveIcon?: React.ReactNode | null;
  rotateAngle?: number;
};

export const Accordion: FC<AccordionProps> = ({
  title,
  className,
  children,
  initialOpen = false,
  BaseIcon = <ArrowDownIcon />,
  ActiveIcon = null,
  rotateAngle = 180,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);

  return (
    <SContainer className={className}>
      <header onClick={() => setIsOpen((prev) => !prev)}>
        <span>{title}</span>
        <SIcon
          $rotateAngle={ActiveIcon ? 0 : rotateAngle}
          className={clsx('icon', isOpen && 'active')}
        >
          {isOpen ? ActiveIcon ?? BaseIcon : BaseIcon}
        </SIcon>
      </header>
      <main className={clsx(isOpen && 'active')}>
        {isOpen ? children : null}
      </main>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    cursor: pointer;
    @include p1();
  }
  main {
    margin-left: 0.5rem;
    max-height: 0;
    margin-top: 0;
    transition: height 500ms ease, margin 300ms ease;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    &.active {
      margin-top: 0.625rem;
      max-height: fit-content;
    }
  }
`;

const SIcon = styled.div<{ $rotateAngle: number }>`
  margin-top: 2px;
  transition: all 0.3s ease;
  height: 100%;
  svg {
    width: 0.875rem;
    height: 0.875rem;
  }

  &.active {
    transform: ${(p) => `rotateZ(${p.$rotateAngle ?? 180}deg)`};
    svg path {
      stroke: color(brand-1);
    }
  }
`;

SIcon.defaultProps = {
  $rotateAngle: 0,
};
