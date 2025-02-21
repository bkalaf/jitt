import { useMemo } from 'react';
import { Overlay } from './Overlay';
import { useParams } from '@tanstack/react-router';
import { GenericInsertForm } from './Controls/GenericInsertForm';

export function CreateModal({
    open,
    toggle,
    FormControls
}: {
    toggle: () => void;
    open: boolean;
    FormControls: React.FunctionComponent<{ toggle: () => void; open: boolean; }>;
}) {
    const { collection } = useParams({ from: '/data/$collection/' });
    const FormContainer = useMemo(() => GenericInsertForm(collection), [collection])
    return (
        <Overlay toggle={toggle} open={open}>
            <FormContainer toggle={toggle}>
                <FormControls toggle={toggle} open={open} />
            </FormContainer>
        </Overlay>
    );
}
