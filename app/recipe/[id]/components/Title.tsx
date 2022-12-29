interface Props {
  children: React.ReactNode;
}

export function Title(props: Props): React.ReactElement {
  return <h2 className="font-cursive text-title">{props.children}</h2>;
}
