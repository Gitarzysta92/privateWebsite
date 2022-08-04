export interface INavigationMenuItem {
  title: string;
  link?: string;
  appearance: string;
  childerns?: INavigationMenuItem[];
}