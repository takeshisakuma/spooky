export type buttonType = {
  roll?: "normal" | "danger" | "disabled";
  size?: "small" | "medium" | "large";
  label: string;
  abled?: boolean;
  onClick?: () => void;
}
