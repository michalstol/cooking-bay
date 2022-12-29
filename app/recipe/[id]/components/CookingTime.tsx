interface Props {
  label: string;
  hours?: string;
  minutes?: string;
}

export function CookingTime(props: Props): React.ReactElement {
  return (
    <div className="flex flex-col gap-2 items-stretch">
      <div className="leading-4">{props.label}</div>

      <div className="font-cursive text-timer">
        {!!props.hours && `${props.hours}h`}
        {!!props.hours && !!props.minutes && " "}
        {!!props.minutes && `${props.minutes}m`}
      </div>
    </div>
  );
}
