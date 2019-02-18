// TODO: can this be organized better?
export interface IOption {
  value: IValue;
  label: string;
}

export type IValue = string | number;
export type IInputValue = IValue | FileList | null;
export type IInputType =
  | "text"
  | "file"
  | "password"
  | "checkboxes"
  | "radio-buttons";

export interface IInitialInputInfo {
  name: string;
  type: IInputType;
  isRequired?: boolean;
  initialValue?: IInputValue;
  placeholder?: string;
  text?: string;
  options?: IOption[];
  selectedOptions?: IOption[];
  selectedOption?: IOption;
  validationFunc?(value: IInputValue): string | null;
}

export interface IInputInfo extends IInitialInputInfo {
  error: string | null;
  value: IInputValue;
}

export interface INavInfo {
  route: string;
  level: itemLevel;
  text: string;
}

export enum itemLevel {
  heading,
  one,
  two,
  three
}
export interface FileInputProps {
  initialLabel?: string;
  onChange(value: FileList | null): void;
}

export interface ITextInputInfo extends IInputInfo {
  value: string;
}

export interface ILoginInfo {
  email: string;
  password: string;
}

export interface IRegisterInfo {
  email: string;
  password: string;
  name: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  userId: number;
  token: string;
}

export interface IAuthState {
  readonly user: IUser | null;
  readonly error: string | null;
}