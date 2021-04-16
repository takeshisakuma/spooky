export type buttonGroupType = {
  buttons: {
    roll?: "normal" | "danger" | "submit";
    size?: "small" | "medium" | "large";
    label: string;
    abled?: boolean;
    onClick?: () => void;
    adjustClass?: string;

  }[];
  position: "left" | "center" | "right";
  size: "small" | "medium" | "large";
}
