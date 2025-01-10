export interface IDrawerBodyItems {
  text: string;
  action: () => void;
  icon?: JSX.Element;
  disabled?: boolean;
}
