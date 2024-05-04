import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  classeName?: string;
  padding_x?: string;
  padding_y?: string;
}

export const Box = ({
  children,
  classeName,
  padding_x = "px-9",
  padding_y = "py-9",
}: Props) => {
  return (
    <div
      className={clsx(
        "w-full border border-gray-400 bg-white rounded",
        padding_x,
        padding_y,
        classeName
      )}
    >
      {children}
    </div>
  );
};
