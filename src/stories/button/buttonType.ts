export type buttonType = {
  roll?: "normal" | "danger" | "submit";
  size?: "small" | "medium" | "large";
  label: string;
  abled?: boolean;
  onClick?: () => void;
  adjustClass: string;
}
