import FooterBrand from "@/components/footer/FooterBrand";
import FooterCategories from "@/components/footer/FooterCategories";
import FooterCopyright from "@/components/footer/FooterCopyright";

const Footer = () => (
  <footer className="flex py-4 flex-col items-center justify-center bg-background border-t-1">
    <div className="w-full">
      <div className="mx-10 my-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-4">
        <FooterBrand />
        <FooterCategories />
      </div>
    </div>
    <FooterCopyright />
  </footer>
);

export default Footer;
