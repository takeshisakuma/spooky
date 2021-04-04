export type inputWithLabelType = {
  type: "text" | "email" | "number" | "search" | "password" | "tel";
  maxLength?: number;
  required?: boolean;
  name?: string;
  display: string;
  placeholder?: string;
  pattern?: string;
  inputId?: string;
  labelId?: string;

}
