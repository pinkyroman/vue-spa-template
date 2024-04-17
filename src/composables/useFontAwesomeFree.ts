import { fas as faSolid } from "@fortawesome/free-solid-svg-icons";
import { fab as faBrand } from "@fortawesome/free-brands-svg-icons";
import { far as faRegular } from "@fortawesome/free-regular-svg-icons";

export function useFontAwesomeFree() {
  function fas(iconName: string) {
    return faSolid[`fa${kebabToPascal(iconName)}`];
  }

  function fab(iconName: string) {
    return faBrand[`fa${kebabToPascal(iconName)}`];
  }

  function far(iconName: string) {
    return faRegular[`fa${kebabToPascal(iconName)}`];
  }

  function kebabToPascal(kebab: string): string {
    return kebab
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  }

  return {
    fas,
    fab,
    far,
  };
}
