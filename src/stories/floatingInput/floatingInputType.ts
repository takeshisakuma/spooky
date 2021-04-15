export type floatingInputType = {
  type: "text" | "email" | "number" | "search" | "password" | "tel";
  maxLength?: number;
  required?: boolean;
  name?: string;
  display: string;
  placeholder?: string;
  pattern?: string;
  id?: string;
  adjustClass?: string,
}
