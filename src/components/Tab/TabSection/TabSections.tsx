import styled from 'styled-components';
import { TabSectionItem } from './TabSectionItem';
import clsx from 'clsx';

interface TabSectionsProps extends React.HTMLAttributes<HTMLDivElement> {
  sections: string[];
  selectedIndex: number;
  onSelectSection: (index: number) => void;
  size?: 's' | 'm' | 'l';
  outline?: boolean;
}

export const TabSections: React.FC<TabSectionsProps> = ({
  sections,
  selectedIndex,
  onSelectSection,
  size = 'm',
  outline = true,
}) => {
  return (
    <SContainer className={clsx(size)}>
      {sections.map((section, index) => (
        <TabSectionItem
          key={index}
          onClick={() => onSelectSection(index)}
          active={index === selectedIndex}
          size={size}
          className={clsx('tab-section', !outline && 'no-outline')}
        >
          {section}
        </TabSectionItem>
      ))}
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
  max-width: 90vw;
  padding-bottom: 0.25rem;

  &.s {
    overflow-x: scroll;
  }

  &.l {
    gap: clamp(0.5rem, 4.5139vw + -1.6667rem, 3.75rem);
  }

  &::-webkit-scrollbar {
    height: clamp(0rem, 2.2059vw + -0.6618rem, 0.75rem);
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 0.625rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.colors.grayLight};
    border-radius: 0.625rem;
  }
`;
