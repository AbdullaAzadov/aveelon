import { useOutside } from '@hooks/useOutside';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ArrowDownIcon } from '@components/icons/index';
import { Text } from '@components/index';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface IselectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface SelectProps {
  defaultValue?: string | null;
  options: IselectOption[];
  onChange: (value: string) => void;
  placeholder?: string;
  width?: string | number;
  onToggle?: () => void;
}

export const Select: FC<SelectProps> = ({
  defaultValue = null,
  options,
  onChange,
  placeholder = 'Select...',
  width = '100%',
  onToggle = () => {},
}) => {
  const { t } = useTranslation();
  const [value, setValue] = useState<IselectOption | null>(
    options.find((option) => option.value === defaultValue) || null
  );
  const { ref: wrapperRef, isShow, setIsShow } = useOutside(false);

  const handleToggle = () => {
    setIsShow((v) => !v);
    onToggle();
  };

  const handleChange = (option: IselectOption) => {
    setValue(option);
    onChange(option.value);
    setIsShow(false);
  };

  return (
    <StyledWrapper ref={wrapperRef} style={{ width: width }}>
      <StyledSelect onClick={handleToggle} style={{ width: width }}>
        <div className='icon'>{value?.icon}</div>
        <Text>{t(value?.label || placeholder)}</Text>
        <div>
          <ArrowDownIcon className={clsx('icon', isShow && 'active')} />
        </div>
      </StyledSelect>
      {isShow && (
        <StyledOptions style={{ width: width }}>
          {options.map((option, index) => (
            <StyledOptionItem
              style={{ width: width }}
              key={option.value}
              className={clsx(value?.value === option.value && 'active')}
              onClick={() => handleChange(option)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
              }}
            >
              <div className='icon'>{option.icon}</div>
              <Text className='text'>{t(option.label)}</Text>
            </StyledOptionItem>
          ))}
        </StyledOptions>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;

  &:hover,
  .active {
    path {
      stroke: ${(p) => p.theme.colors.brand};
    }
  }
`;

const StyledSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.25rem, 0.375vw + 0.175rem, 0.625rem);
  user-select: none;
  cursor: pointer;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    svg {
      width: clamp(0.875rem, 0.375vw + 0.8rem, 1.25rem);
      height: clamp(0.875rem, 0.375vw + 0.8rem, 1.25rem);
    }
    path {
      transition: stroke 0.15s ease-in;
    }
    &.active {
      transform: rotate(180deg);
    }
  }
`;

const StyledOptions = styled.div`
  position: absolute;
  top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem clamp(0.125rem, 0.744vw + -0.1429rem, 0.75rem);
  background-color: ${(p) => p.theme.colors.darkLight};
  box-shadow: 2px 3px 20px 0px hsla(0, 0%, 0%, 0.12);
  border-radius: 1rem;
  gap: 20px;
  z-index: 10000;
`;
const StyledOptionItem = motion.create(styled.div`
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: clamp(0.125rem, 0.6944vw + -0.2083rem, 0.625rem);

  .text {
    transition: color 0.15s ease-in;
  }

  &:hover > .text,
  &.active > .text {
    color: ${(p) => p.theme.colors.brand};
  }

  .icon {
    display: flex;
    align-items: center;
    svg {
      width: clamp(0.875rem, 0.375vw + 0.8rem, 1.25rem);
      height: clamp(0.875rem, 0.375vw + 0.8rem, 1.25rem);
    }
  }
`);
