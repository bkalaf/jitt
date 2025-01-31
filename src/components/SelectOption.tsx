import useWhyDidYouUpdate from '../hooks/useWhyDidYouUpdate';
import { $className } from '../util/$className';

export type ISelectOptionProps = {
    label: string;
    value: string;    
} & IProps;

export function SelectOption(props: ISelectOptionProps) {
    useWhyDidYouUpdate('SelectOption', props);
    const { value, label, ...remain } = props;
    const spread = $className(remain, {}, 'w-full font-medium text-sm')
    return <option value={value} {...spread}>{label}</option>
}

export type ISelectProps = {
    name?: string;
}