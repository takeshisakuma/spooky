export type iconButtonType = {
  roll?: "normal" | "danger";
  size?: "small" | "medium" | "large";
  label: any;
  abled?: boolean;
  img: "search" | "externallink";
  onClick?: () => void;
}
