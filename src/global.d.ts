import { Db, MongoClient } from 'mongodb';
import { QueryClient } from '@tanstack/react-query';
import { OnChangeFn } from '@tanstack/react-table';

declare global {
    declare module '*.png' {
        const value: any;
        export default value;
    }
    type IPredicate<T extends any[] = never[]> = (...x: T) => boolean;
    type IConditional<T extends any[] = never[]> = IPredicate<T> | boolean;
    type IExecute<T extends any[] = never[]> = (...x: T) => () => void;
    type Children = React.ReactNode | React.ReactNode[] | undefined;
    type IEventAction = () => void;

    type IFlagsObject = Record<string, boolean>;
    type AnimationState = 'hidden' | 'hiding' | 'showing' | 'shown';
    type IFlagsDependentAnimation = (animationState: AnimationState) => IFlagsObject;
    type IFlags = IFlagsDependentAnimation | IFlagsObject;
    type ControlSizes = 'tiny' | 'small' | 'medium' | 'large' | 'huge';
    type Colors = 'rose' | 'pink' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'emerald' | 'green' | 'blue' | 'sky' | 'cyan' | 'teal' | 'indigo' | 'purple' | 'violet' | 'fuchsia' | 'white' | 'black' | 'gray' | 'slate' | 'zinc';
    type SingleInteract = 'hover' | 'focus' | 'disable' | 'pressed' | 'active';
    type Interactions =
        | { [P1 in SingleInteract]: `${P1}` }[SingleInteract]
        | {
              [P1 in SingleInteract]: {
                  [P2 in Exclude<SingleInteract, P1>]: `${P1},${P2}`;
              }[Exclude<SingleInteract, P1>];
          }[SingleInteract]
        | {
              [P1 in SingleInteract]: {
                  [P2 in Exclude<SingleInteract, P1>]: {
                      [P3 in Exclude<SingleInteract, P1 | P2>]: `${P1},${P2},${P3}`;
                  }[Exclude<SingleInteract, P1 | P2>];
              }[Exclude<SingleInteract, P1>];
          }[SingleInteract]
        | {
              [P1 in SingleInteract]: {
                  [P2 in Exclude<SingleInteract, P1>]: {
                      [P3 in Exclude<SingleInteract, P1 | P2>]: {
                          [P4 in Exclude<SingleInteract, P1 | P2 | P3>]: `${P1},${P2},${P3},${P4}`;
                      }[Exclude<SingleInteract, P1 | P2 | P3>];
                  }[Exclude<SingleInteract, P1 | P2>];
              }[Exclude<SingleInteract, P1>];
          }[SingleInteract]
        | {
              [P1 in SingleInteract]: {
                  [P2 in Exclude<SingleInteract, P1>]: {
                      [P3 in Exclude<SingleInteract, P1 | P2>]: {
                          [P4 in Exclude<SingleInteract, P1 | P2 | P3>]: {
                              [P5 in Exclude<SingleInteract, P1 | P2 | P3 | P4>]: `${P1},${P2},${P3},${P4},${P5}`;
                          }[Exclude<SingleInteract, P1 | P2 | P3 | P4>];
                      }[Exclude<SingleInteract, P1 | P2 | P3>];
                  }[Exclude<SingleInteract, P1 | P2>];
              }[Exclude<SingleInteract, P1>];
          }[SingleInteract];
    type IProps = {
        className?: string;
        children?: Children;
        controlSize?: ControlSizes;
        color?: Colors;
        interactions?: Interactions;
        animate?: boolean;
        flags?: IFlagsObject;
    };
    type IRouterContext = {
        queryClient: QueryClient;
        getMongo: () => Promise<Db>;
    };

    interface Window {
        db: Db;
    }

   interface ICollectionQueryContext {
        queryKey: readonly unknown[];
        signal: AbortSignal;
        meta?: Record<string, unknown>
        // meta?: {
        //     getMongo: () => Promise<Db>;
        // }
   }
   interface ICrudActionsTableState {
        editingRow: string | undefined;
        creatingRow: boolean;
   }
   interface ICrudActionsOptions {
       enableEditing?: boolean;
       enableCreating?: boolean;
       onEditingRowChange?: OnChangeFn<string | undefined>;
       onCreatingRowChange?: OnChangeFn<boolean>;
   }
   interface CrudActionsTableInstance<TData> {
       setEditingRow: (updater: Updater<string | undefined>) => void;
       setCreatingRow: (updater: Updater<boolean>) => void;
       closeEditRow: () => void;
       closeCreateRow: () => void;
       getIsEditing: () => boolean;
       getIsCreating: () => boolean;
   }
   interface CRUDActionsRowInstance<TData> {
       getIsRowEditing: () => boolean;
   }
   type IEnumInfo = {
        label: string;
        value: string;
        selector?: string;
        groups?: string[];
   }
   interface Array {
        toEnumInfo(this: string[]): IEnumInfo[];
   }
}
export const c = 1;

declare module '@tanstack/react-table' {
    interface TableMeta<TData extends RowData, TValue> {
        FormControls: React.FunctionComponent<{ toggle: () => void }>;
        collection?: string;
        labelProperty?: string;
    }

    interface TableState extends ICrudActionsTableState {}
    interface TableOptionsResolved<TData extends RowData> extends ICrudActionsOptions {}
    interface Table<TData extends RowData> extends CrudActionsTableInstance<TData> {}
    interface Row<TData extends RowData> extends CRUDActionsRowInstance<TData> {}
} 