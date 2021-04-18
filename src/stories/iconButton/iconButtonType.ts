export type iconButtonType = {
  roll?: "normal" | "danger" | "submit";
  size?: "small" | "medium" | "large";
  label: string;
  abled?: boolean;
  img: "search" | "externallink" | "internallink" | "none";
  onClick?: () => void;
  adjustClass?: string;
}
