import FooterBrand from "@/components/footer/FooterBrand";
import FooterCategories from "@/components/footer/FooterCategories";

const Footer = () => (
  <footer className="flex flex-row items-center justify-center bg-background border-t-1">
    <div className="w-full">
      <div className="mx-10 my-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-4">
        <FooterBrand />
        <FooterCategories />
      </div>
    </div>
  </footer>
);

export default Footer;
