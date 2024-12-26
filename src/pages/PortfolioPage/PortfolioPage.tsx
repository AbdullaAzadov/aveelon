import { ProjectsList } from '@components/index';
import styled from 'styled-components';

export const PortfolioPage = () => {
  return (
    <SContainer>
      <ProjectsList />
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.875rem, 1.9608vw + 1.3971rem, 3.75rem);
  margin-bottom: 6.25rem;
`;

//   <Text style={{ whiteSpace: 'pre', textWrap: 'wrap' }}>{t('temp')}</Text>
