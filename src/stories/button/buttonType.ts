export type buttonType = {
  roll?: "normal" | "danger";
  size?: "small" | "medium" | "large";
  label: any;
  abled?: boolean;
  onClick?: () => void;
}
