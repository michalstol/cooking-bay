interface Props {
  children: React.ReactNode;
}

export function Pill(props: Props): React.ReactElement {
  return (
    <div className="px-4 py-[6px] rounded-full shadow-current shadow-[inset_0px_0px_0px_2px]">
      {props.children}
    </div>
  );
}
