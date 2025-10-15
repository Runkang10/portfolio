import { AlertTitle } from "@/components/templates/alert";
import KASAISORA from "@/public/others/kasaisora.svg";
import GUAVADEALER from "@/public/others/guavadealer.svg";
import SPAWNER from "@/public/others/spawner.webp";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AlertType = {
  variant: "default" | "destructive";
  children: ReactNode;
};

const alert: AlertType = {
  variant: "default",
  children: (
    <AlertTitle className="flex justify-center items-center">
      <div
        className={cn(
          "w-full lg:w-auto bg-background lg:border-x-3 lg:border-t-3 px-4 py-2 rounded-x-4xl lg:rounded-t-2xl",
          "flex flex-col sm:flex-row justify-center items-center gap-x-4 gap-y-2",
        )}
      >
        <div className="flex justify-center items-center gap-1">
          <Image src={KASAISORA} alt="KasaiSora" />
          <Link
            href="https://youtube.com/@KasaiSora"
            className="hover:text-muted-foreground"
          >
            <span className="text-[1rem] font-medium">
              Subscribe to KasaiSora :D
            </span>
          </Link>
        </div>
        <span className="hidden sm:block font-black">|</span>
        <div className="flex justify-center items-center gap-1">
          <Image src={GUAVADEALER} alt="GuavaDealer" width={16} height={16} />
          <Link
            href="https://youtube.com/@KasaiSora"
            className="hover:text-muted-foreground"
          >
            <span className="text-[1rem] font-medium">
              KasaiSora like his spawner
            </span>
          </Link>
          <Image src={SPAWNER} alt="Spawner" width={18} height={18} />
        </div>
      </div>
    </AlertTitle>
  ),
};

export default alert;
