import { AlertTitle } from "@/components/templates/alert";
import KasaiSora from "@/public/kasaisora.svg";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type AlertType = {
  variant: "default" | "destructive";
  children: ReactNode;
};

const alert: AlertType = {
  variant: "default",
  children: (
    <AlertTitle className="flex justify-center items-center">
      <div className="w-full lg:w-auto bg-background lg:border-x-3 lg:border-t-3 px-4 py-2 rounded-x-4xl lg:rounded-t-2xl flex justify-center items-center gap-2">
        <Image src={KasaiSora} alt={"KasaiSora"} />
        <Link
          href="https://youtube.com/@KasaiSora"
          className="hover:text-muted-foreground"
        >
          <span className="text-[1rem] font-bold">
            Subscribe to KasaiSora :D
          </span>
        </Link>
      </div>
    </AlertTitle>
  ),
};

export default alert;
