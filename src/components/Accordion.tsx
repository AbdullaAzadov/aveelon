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
        <SIconSpan
          rotateAngle={ActiveIcon ? 0 : rotateAngle}
          className={clsx('icon', isOpen && 'active')}
        >
          {isOpen ? ActiveIcon ?? BaseIcon : BaseIcon}
        </SIconSpan>
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
    justify-content: space-between;
    cursor: pointer;
    @include p1();
  }
  main {
    max-height: 0;
    margin-top: 0;
    transition: height 500ms ease, margin 300ms ease;

    &.active {
      margin-top: 16px;
      max-height: fit-content;
    }
  }
`;

const SIconSpan = styled.span<{ rotateAngle: number }>`
  padding: 18px;
  transition: all 0.3s ease;
  svg {
    width: 18px;
    height: 18px;
  }

  &.active {
    transform: ${(p) => `rotateZ(${p.rotateAngle ?? 180}deg)`};
    svg path {
      stroke: color(brand-1);
    }
  }
`;
