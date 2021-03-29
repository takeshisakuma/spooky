export type buttonType = {
  roll?: "normal" | "danger";
  size?: "small" | "medium" | "large";
  label: string;
  abled?: boolean;
  onClick?: () => void;
}
