export interface IHeader {
  isNext?: boolean;
  isPrev?: boolean;
}

export interface ICheckList {
  curQuestionNum: number;
  totalQuestionLength: number;
  title?: string;
  notice?: string;
  data?: IData[]
}

export interface IData {
  text?: string;
  imgSrc?: string;
}

export interface IRadioList extends ICheckList {
  type?: string;
}

export interface IUpDown extends ICheckList {}
export interface IRange extends ICheckList {
  min?: number;
  max?: number;
}