export interface TextInputProps {
  name: string;
  required: boolean;
  onChange: React.FormEventHandler<HTMLInputElement>;
}