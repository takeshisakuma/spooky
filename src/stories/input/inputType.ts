export type inputType = {
  type: "text" | "email" | "number" | "search" | "password" | "tel";
  maxLength: number;
  required: boolean;
  name?: string;
}
