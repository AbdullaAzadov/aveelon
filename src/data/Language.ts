import { IselectOption } from "@components/Select"

export type TLanguage = "ru" | 'kz' | "en"


export const LanguageData: IselectOption[] = [
{
    value: 'ru',
    label: 'russian'
},
{
    value: 'kz',
    label: 'kazakh'
},
{
    value: 'en',
    label: 'english'
},
]