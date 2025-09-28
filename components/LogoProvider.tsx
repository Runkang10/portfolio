import Image from "next/image";
import _GrapheneLogo from "@/public/graphene-logo.svg";
import Link from "next/link";

const GrapheneLogo = ({
  iconSize,
  iconClassName,
  textClassName,
}: {
  iconSize: number;
  iconClassName: string;
  textClassName: string;
}) => (
  <>
    <Image
      src={_GrapheneLogo}
      alt="Runkang10"
      width={iconSize}
      height={iconSize}
      className={iconClassName}
    />
    <span className={textClassName}>Runkang10</span>
  </>
);

function NavBarLogo() {
  return (
    <Link href="/">
      <div className="group flex flex-row justify-center items-center gap-2">
        <GrapheneLogo
          iconSize={28}
          iconClassName={"group-hover:rotate-90 transition-all duration-500"}
          textClassName={
            "lg:block hidden text-lg font-medium transition-all duration-500"
          }
        />
      </div>
    </Link>
  );
}

export { NavBarLogo, GrapheneLogo };
