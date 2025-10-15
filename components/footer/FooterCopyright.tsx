import getCurrentYear from "@/lib/YearFetcher";
import FooterLink from "@/components/footer/FooterLink";

const FooterCopyrightConfig = () => (
  <span className="text-xs text-muted-foreground">
    © {getCurrentYear()} Runkang10,{" "}
    <FooterLink href="https://github.com/Runkang10/portfolio">
      MIT License
    </FooterLink>
    .
  </span>
);

export default FooterCopyrightConfig;
