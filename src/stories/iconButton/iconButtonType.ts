export type iconButtonType = {
  roll?: "normal" | "danger" | "submit";
  size?: "small" | "medium" | "large";
  label: any;
  abled?: boolean;
  img: "search" | "externallink" | "internallink" | "none";
  onClick?: () => void;
  ajustClass?: string;
}
