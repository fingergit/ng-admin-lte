
export enum AltPageType {
  DEFAULT,
  TOP_NAVIGATION,
  BOXED,
  FIXED,
  COLLAPSED_SIDEBAR,
  CUSTOM
}

export interface AltPageConfig {
  title: string;
  subTitle?: string;
  customUI?: boolean;
  containerFluid?: boolean;  // container-fluid
  pageType?: AltPageType;
}

