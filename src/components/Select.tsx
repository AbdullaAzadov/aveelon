import { useOutside } from "@hooks/useOutside";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ArrowDownIcon } from "@components/icons/index";
import { Text } from "@components/index";

export interface IselectOption {
    value: string,
    label: string
}

interface SelectProps {
    defaultValue?: string | null,
    options: IselectOption[],
    onChange: (value: string) => void
    placeholder?: string
    width?: string | number;
}

export const Select: FC<SelectProps> = ({defaultValue=null, options, onChange, placeholder="Select...", width="fit-content"}) => {
    const {t} = useTranslation()
    const [value, setValue] = useState<IselectOption | null>(options.find(option => option.value === defaultValue) || null)
    const {ref: wrapperRef, isShow, setIsShow} = useOutside(false)

    const handleChange = (option: IselectOption) => {
        setValue(option)
        onChange(option.value)
        setIsShow(false)
    }

    return (
    <StyledWrapper ref={wrapperRef} style={{width: width}}>
        <StyledSelect onClick={() => setIsShow(v=>!v)} style={{width: width}}>
            <Text>{t(value?.label || placeholder)}</Text>
            <ArrowDownIcon />
        </StyledSelect>
        {isShow && (
            <StyledOptions style={{width: width}}>
                {options.map(option => <StyledOptionItem style={{width: width}} key={option.value} onClick={() => handleChange(option)}>
                    <Text>{t(option.label)}</Text>
                    </StyledOptionItem>)}
            </StyledOptions>
        )}
    </StyledWrapper>
  )
};

const StyledWrapper = styled.div`
    position: relative;
`

const StyledSelect = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    user-select: none;
    cursor: pointer;
`

const StyledOptions = styled.div`
    position: absolute;
    top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0;
    background-color: ${p=>p.theme.colors.darkLight};
    box-shadow: 2px 3px 20px 0px hsla(0, 0%, 0%, 0.12);
    border-radius: 1rem;
    gap: 20px;
`
const StyledOptionItem = styled.div`
    text-align: center;
    user-select: none;
    cursor: pointer;
`