import { ColumnDef } from '@tanstack/react-table';
import useWhyDidYouUpdate from '../../hooks/useWhyDidYouUpdate';
import { useEffect, useState } from 'react';

export function ImageCell(props: Parameters<Exclude<ColumnDef<any, Blob>['cell'], undefined | string>>[0]) {
    useWhyDidYouUpdate('ImageCell', props);
    const { getValue } = props;
    const [src, setSrc] = useState<undefined | string>();
    useEffect(() => {
        const $src = URL.createObjectURL(getValue());
        setSrc($src);
        return () => {
            URL.revokeObjectURL($src);
        };
    }, [getValue]);
    return <img className='object-scale-down h-40' src={src} />;
}
