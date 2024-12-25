import styled from 'styled-components';
import { TabSectionItem } from './TabSectionItem';
import clsx from 'clsx';

interface TabSectionsProps extends React.HTMLAttributes<HTMLDivElement> {
  sections: string[];
  selectedIndex: number;
  onSelectSection: (index: number) => void;
  size?: 's' | 'm' | 'l';
}

export const TabSections: React.FC<TabSectionsProps> = ({
  sections,
  selectedIndex,
  onSelectSection,
  size = 'm',
}) => {
  return (
    <SContainer>
      {sections.map((section, index) => (
        <TabSectionItem
          key={index}
          onClick={() => onSelectSection(index)}
          active={index === selectedIndex}
          size={size}
          className={clsx('tab-section', size)}
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

  &.l {
    gap: 3.75rem;
  }
`;
