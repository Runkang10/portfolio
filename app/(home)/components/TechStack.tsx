import Image from "next/image";
import KOTLIN from "@/public/tech-stack/kotlin.png";
import TYPESCRIPT from "@/public/tech-stack/typescript.svg";
import PYTHON from "@/public/tech-stack/python.svg";
import RUST from "@/public/tech-stack/rust.svg";

const ImageData = [KOTLIN, TYPESCRIPT, PYTHON, RUST];

const TechStack = () => (
  <section className="flex flex-col items-center gap-4">
    <h2 className="font-medium text-4xl text-center text-glow">
      My Tech Stack
    </h2>
    <div className="w-max grid grid-cols-2 sm:grid-cols-4 justify-center items-center gap-4">
      {ImageData.map((image, index) => (
        <div
          className="p-4 rounded-2xl"
          style={{
            boxShadow: "10px 5px 10px rgba(0, 0, 0, 0.5)",
          }}
          key={index}
        >
          <Image src={image} alt="" width={64} height={64} />
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;
