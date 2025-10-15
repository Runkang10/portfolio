import HomePageLinks from "@/app/(home)/components/HomePageLinks";
import Image from "next/image";
import LOGO from "@/public/graphene-logo.svg";

const Hero = () => (
  <section className="m-16 my-20 grid lg:grid-cols-2">
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <h1 className="text-5xl md:text-6xl font-medium text-glow">
          Hi, I&#39;m Runkang10!
        </h1>
        <span className="text-lg md:text-xl text-muted-foreground">
          The first carbon to learn coding :D
        </span>
        <br />
        <HomePageLinks />
      </div>
    </div>
    <div className="hidden lg:flex justify-center">
      <Image src={LOGO} alt="LOGO" width={320} height={320} />
    </div>
  </section>
);

export default Hero;
