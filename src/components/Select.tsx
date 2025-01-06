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
}

interface SelectProps {
  defaultValue?: string | null;
  options: IselectOption[];
  onChange: (value: string) => void;
  placeholder?: string;
  width?: string | number;
}

export const Select: FC<SelectProps> = ({
  defaultValue = null,
  options,
  onChange,
  placeholder = 'Select...',
  width = '100%',
}) => {
  const { t } = useTranslation();
  const [value, setValue] = useState<IselectOption | null>(
    options.find((option) => option.value === defaultValue) || null
  );
  const { ref: wrapperRef, isShow, setIsShow } = useOutside(false);

  const handleChange = (option: IselectOption) => {
    setValue(option);
    onChange(option.value);
    setIsShow(false);
  };

  return (
    <StyledWrapper ref={wrapperRef} style={{ width: width }}>
      <StyledSelect
        onClick={() => setIsShow((v) => !v)}
        style={{ width: width }}
      >
        <Text>{t(value?.label || placeholder)}</Text>
        <ArrowDownIcon className={clsx('icon', isShow && 'active')} />
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

  .icon {
    transition: all 0.3s;
    path {
      transition: stroke 0.15s ease-in;
    }
    &.active {
      transform: rotate(180deg);
    }
  }
`;

const StyledSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  user-select: none;
  cursor: pointer;
`;

const StyledOptions = styled.div`
  position: absolute;
  top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  background-color: ${(p) => p.theme.colors.darkLight};
  box-shadow: 2px 3px 20px 0px hsla(0, 0%, 0%, 0.12);
  border-radius: 1rem;
  gap: 20px;
  z-index: 10000;
`;
const StyledOptionItem = motion.create(styled.div`
  text-align: center;
  user-select: none;
  cursor: pointer;

  .text {
    transition: color 0.15s ease-in;
  }

  &:hover > .text,
  &.active > .text {
    color: ${(p) => p.theme.colors.brand};
  }
`);
