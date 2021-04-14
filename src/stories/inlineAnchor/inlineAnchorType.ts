export type inlineAnchorType = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  decoration?: "underline" | "lineThrough" | "none";
  url: string;
  target: "internal" | "external" | "tel" | "mail" | "any";
  img: "search" | "externallink" | "internallink" | "tel" | "mail" | "none";
  color: "blue"
  ajustClass: string;
}
