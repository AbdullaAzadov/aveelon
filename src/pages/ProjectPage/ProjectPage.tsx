import { useLayoutEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import {
  BackSection,
  Button,
  ProjectMockUpImage,
  Skeleton,
  Text,
} from '@components/index';
import { IProjectListItem, TProjectCategories } from '@data/PortfolioPage';
import { useProject } from '@hooks/useProject';
import { media } from '@utils/style-helpers';
import { useTranslation } from 'react-i18next';
import { AvailableOn } from '@components/AvailableOn';

export const ProjectPage = () => {
  const nav = useNavigate();
  const { t } = useTranslation();
  const [project, setProject] = useState<IProjectListItem | null>(null);
  const { getProjectById } = useProject();
  const params = useParams();
  const category = params.category || '';
  const id = params.id || '';

  useLayoutEffect(() => {
    getProjectById(id, category as TProjectCategories).then((p) => {
      if (!p) return nav('/');
      setProject(p);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, category]);

  if (!project)
    return (
      <BackSection>
        <SWrapper className='skeleton'>
          <Skeleton>1</Skeleton>
          <Skeleton>1</Skeleton>
        </SWrapper>
      </BackSection>
    );

  return (
    <BackSection>
      <SWrapper>
        <div className='img'>
          <ProjectMockUpImage src={project.imageSrc} usage='details' />
        </div>
        <div className='details'>
          <Text as='h1' color='brand' className='title'>
            {t(project.name)}
          </Text>
          <Text
            className='desc'
            style={{ whiteSpace: 'pre', textWrap: 'wrap' }}
          >
            {t(project.desc)}
          </Text>
          <div className='links'>
            <Button
              variant='secondary'
              onClick={() => window.open(project.website, '_blank')}
            >
              {t('go-to-website')}
            </Button>
            <div className='apps'>
              {project.ios && (
                <AvailableOn link={project.ios} store='app-store' />
              )}
              {project.android && (
                <AvailableOn link={project.android} store='play-store' />
              )}
            </div>
          </div>
        </div>
      </SWrapper>
    </BackSection>
  );
};

const SWrapper = styled.div`
  display: grid;
  gap: 5rem;
  grid-template-columns: 65% 30%;
  padding-bottom: clamp(3.125rem, 3.268vw + 2.3284rem, 6.25rem);

  ${({ theme }) => media.lessThan(theme, 'desktop')} {
    gap: 1.25rem;
    grid-template-columns: 100%;
  }

  &.skeleton {
    min-height: 60vh;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    ${({ theme }) => media.lessThan(theme, 'wideTablet')} {
      gap: 1rem;
      .desc {
        max-height: 75vw;
      }
    }
  }
  .links,
  .apps {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
  }
  .desc {
    max-height: 33vw;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0.375rem;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 0.625rem;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(121, 121, 121, 0.2);
      border-radius: 0.625rem;
    }
  }
`;
