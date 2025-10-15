import Link from "next/link";
import { ReactNode } from "react";

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <Link href={href} className="text-chart-1 hover:underline">
    {children}
  </Link>
);

export default FooterLink;
