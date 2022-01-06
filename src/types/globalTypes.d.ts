type Component<P = {}> = (props: P) => React.ReactElement<any, any> | null;

type WithChildren<T = {}> = React.FC<T>;

type Nullable<T> = T | null;
