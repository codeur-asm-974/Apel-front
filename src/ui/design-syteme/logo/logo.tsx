import clsx from "clsx";
import Image from "next/image";

interface props {
  size?: "small" | "medium" | "large";
}

export const Logo = ({ size = "medium" }: props) => {
  let sizeLogo: string;
  switch (size) {
    case "small":
      sizeLogo = "w-[120px] h-[40px]";

      break;
    case "medium":
      sizeLogo = "w-[90px] h-[60px]";

      break;
    case "large":
      sizeLogo = "w-[180px] h-[120px]";

      break;

    //default:
  }

  return (
    <div className={clsx(sizeLogo, "bg-gray-400 rounded-full relative ")}>
      <Image src="/assets/images/apel.jpeg" fill alt="logo apel" />
    </div>
  );
};
