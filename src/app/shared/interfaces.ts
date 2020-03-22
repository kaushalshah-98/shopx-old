export interface IMenu {
  name: string;
  icon?: string;
  url?: string;
  childs?: IMenu[];
}
export interface Product {
  name: string;
  image: string;
  url: string;
}
export interface sliderProduct {
  name: string;
  image: string;
  description: string;
}
export interface Item {
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}
