import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Button, Text, Skeleton, ProjectMockUpImage } from '@components/index';
import { IProjectListItem } from '@data/ProtfolioPage';
import { RouteNames } from '@routes/RouteNames';
import { scrollToTop } from '@utils/screen';

type Tprops = {
  item: IProjectListItem;
  isLoading: boolean;
};

export const ProjectsListItem: FC<Tprops> = ({ item, isLoading }) => {
  const { t } = useTranslation();
  const nav = useNavigate();

  const onClick = () => {
    nav(`${RouteNames.PROJECT}${item.category}/${item.id}`);
    scrollToTop();
  };

  if (isLoading) {
    return (
      <Container>
        <ProjectMockUpImage skeleton />
        <div className='info'>
          <Skeleton $borderRadius='0.25rem'>
            <Text as='h2' className='title'>
              1
            </Text>
          </Skeleton>
          <Skeleton $borderRadius='0.25rem'>
            <Text className='desc'>1</Text>
          </Skeleton>
        </div>
        <div className='btn'>
          <Skeleton $borderRadius='0.25rem'>
            <Button variant='secondary' className='btn'>
              1
            </Button>
          </Skeleton>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <ProjectMockUpImage src={item.imageSrc} />
      <div className='info'>
        <Text as='h2' color='brand' className='title'>
          {t(item.name)}
        </Text>
        <Text className='desc'> {t(item.desc)}</Text>
      </div>
      <div className='btn'>
        <Button variant='secondary' className='btn' onClick={onClick}>
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

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

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
