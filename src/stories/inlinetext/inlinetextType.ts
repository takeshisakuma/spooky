export type inlinetextType = {
  text: string;
  size: "small" | "medium" | "large" | "xtraLarge";
  color: "white" | "light" | "silver" | "ash" | "dark" | "black";
  bold?: boolean;
  italic?: boolean;
  decoration?: "underline" | "lineThrough" | "none";
}
