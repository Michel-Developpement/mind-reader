import React from "react";

type TableProps = {
  prediction: string;
} & React.ComponentPropsWithoutRef<"div">;
export default function Table({ prediction }: TableProps) {
  const emoji = [
    "👍",
    "👎",
    "🤷‍♂️",
    "🤷‍♀️",
    "🤷",
    "�",
    "🤦‍♂️",
    "👋",
    "👍",
    prediction,
    "👍",
    "👎",
    "🤷‍♂️",
    "🤷‍♀️",
    "🤷",
    "�",
    "🤦‍♂️",
    "👋",
    prediction,
    "👍",
    "👎",
    "🤷‍♂️",
    "🤷‍♀️",
    "🤷",
    "�",
    "🤦‍♂️",
    "👋",
    prediction,
    "👍",
    "👎",
    "🤷‍♂️",
    "🤷‍♀️",
    "🤷",
    "�",
    "🤦‍♂️",
    "👋",
    prediction,
    "👍",
    "👎",
    "🤷‍♂️",
    "🤷‍♀️",
    "🤷",
    "�",
    "🤦‍♂️",
    "👋",
    prediction,
    "👍",
    "👎",
    "🤷‍♂️",
    "🤷‍♀️",
    "🤷",
    "�",
    "🤦‍♂️",
    "👋",
    prediction,
    "👍",
    "👎",
    "🤷‍♂️",
    "🤷‍♀️",
    "🤷",
    "�",
    "🤦‍♂️",
    "👋",
    prediction,
    "👍",
    "👎",
    "🤷‍♂️",
    "🤷‍♀️",
    "🤷",
    "�",
    "🤦‍♂️",
    "👋",
    prediction,
    "👍",
    "👎",
    "🤷‍♂️",
    "🤷‍♀️",
    "🤷",
    "�",
    "🤦‍♂️",
    "👋",
    prediction,
    "👍",
    "👎",
    "🤷‍♂️",
    "🤷‍♀️",
    "🤷",
    "�",
    "🤦‍♂️",
    "👋",
    "👍",
    "👎",
    "🤷‍♂️",
    "🤷‍♀️",
    "🤷",
    "�",
    "🤦‍♂️",
    "👋",
    "👍",
    "👎",
  ];
  return (
    <div className="table">
      {emoji.map((value, key) => (
        <p className="table-cell" key={key}>
          {key} : {value}
        </p>
      ))}
    </div>
  );
}
