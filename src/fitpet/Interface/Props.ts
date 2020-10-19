export interface IHeader {
  isNext?: boolean;
  isPrev?: boolean;
}
export interface ITitle {
  targetName?: string;
  curQuestionNum?: number;
  totalQuestionLength?: number;
  title?: string[];
  notice?: string;
  min?: number;
  max?: number;
}
export interface IContent extends ITitle{
  data?: IData[],
  typeName?: string;
  type?: string;
}

export interface IData {
  text?: string;
  subText?: string;
  imgSrc?: string;
}