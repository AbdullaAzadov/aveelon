import styled from 'styled-components';
import { ProjectMockUpImage } from '@components/ProjectMockUpImage';
import { Button, Text } from '@components/index';
import { IProjectListItem } from '@data/ProtfolioPage';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type Tprops = {
  item: IProjectListItem;
};

export const ProjectsListItem: FC<Tprops> = ({ item }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <ProjectMockUpImage src={item.imageSrc} />
      <div>
        <Text as='h2' color='brand' className='title'>
          {t(item.name)}
        </Text>
        <Text className='desc'> {t(item.desc)}</Text>
      </div>
      <div className='btn'>
        <Button variant='secondary' className='btn'>
          {t('details')}
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .title {
    margin-bottom: 0.25rem;
  }
  .desc {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
  .btn button {
    width: max-content;
  }
`;
