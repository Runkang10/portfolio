import Link from "next/link";
import { buttonVariants } from "@/components/templates/button";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

const SocialLinkComponent = ({
  href,
  src,
  alt,
}: {
  href: string;
  src: StaticImageData;
  alt: string;
}) => (
  <Link
    href={href}
    target="_blank"
    className={cn(
      buttonVariants({ variant: "ghost", size: "icon" }),
      "w-7.5 h-7.5",
    )}
  >
    <Image src={src} alt={alt} width={16} height={16} />
  </Link>
);

export default SocialLinkComponent;
