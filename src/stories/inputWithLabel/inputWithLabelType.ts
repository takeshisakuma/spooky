export type inputWithLabelType = {
  type: "text" | "email" | "number" | "search" | "password" | "tel";
  maxLength?: number;
  required?: boolean;
  name?: string;
  text: string;
  placeholder?: string;
  pattern?: string;
  inputId?: string;
  labelId?: string;
  adjustClass?: string;
  id?: string;
  color: "white" | "light" | "silver" | "ash" | "dark" | "black";
}
