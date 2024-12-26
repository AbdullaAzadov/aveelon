import styled from 'styled-components';
import { ProjectsListItem } from './../index';
import { media } from '@utils/style-helpers';
import { ProjectsBusinessListData } from '@data/ProtfolioPage';

export const ProjectsList = () => {
  return (
    <Container>
      {ProjectsBusinessListData.map((item, index) => (
        <ProjectsListItem key={index} item={item} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(17.875rem, 38.375rem));
  gap: 1.25rem;

  ${({ theme }) => media.lessThan(theme, 'desktop')} {
    grid-template-columns: repeat(2, minmax(17.875rem, 38.375rem));
  }
  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    grid-template-columns: repeat(1, minmax(17.875rem, 38.375rem));
  }
`;