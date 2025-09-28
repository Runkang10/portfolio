import footerCategories from "@/config/FooterCategories";
import { NavBarLinkComponent } from "@/components/navbar/NavBarLinkComponent";

const FooterCategories = () =>
  footerCategories.map((category) => (
    <div className="flex flex-col gap-3" key={category.label}>
      <span className="font-bold">{category.label}</span>
      <div className="flex flex-col gap-1 w-max">
        {category.items.length <= 0 ? (
          <span className="text-muted-foreground">Nothing to show :p</span>
        ) : (
          category.items.map((item) => (
            <NavBarLinkComponent href={item.url} key={item.label}>
              {item?.icon}
              {item.label}
            </NavBarLinkComponent>
          ))
        )}
      </div>
    </div>
  ));

export default FooterCategories;
