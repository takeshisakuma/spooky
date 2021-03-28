export type iconButtonType = {
  roll?: "normal" | "danger";
  size?: "small" | "medium" | "large";
  label: string;
  abled?: boolean;
  img: "search" | "externallink";
  onClick?: () => void;
}
