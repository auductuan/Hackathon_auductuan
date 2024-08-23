export interface Product {
    id: number;
    productName: string;
    price: number;
    image: string;
    quantity: number;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      productName: "Quả cam",
      price: 100,
      image: "https://images.search.yahoo.com/images/view;_ylt=Awr4_etxDMdmXUMsHBiJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzc2OGNkOWI5YzA3MzZjZWNmZDAxYjMwYzE2ZDMxODkyBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dorange%26ei%3DUTF-8%26type%3DE211US885G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D1&w=4288&h=2848&imgurl=www.thespruceeats.com%2Fthmb%2FBl53N53DySgYKRYriu4WZYI1Abg%3D%2F4288x2848%2Ffilters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29%2FCut-Oranges-581b2b6f3df78cc2e81b4221.jpg&rurl=https%3A%2F%2Fwww.thespruceeats.com%2Ftypes-of-oranges-and-tangerines-2216772&size=1628.3KB&p=orange&oid=768cd9b9c0736cecfd01b30c16d31892&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Guide+to+Types+of+Winter+Orange+and+Tangerines&b=0&ni=160&no=1&ts=&tab=organic&sigr=EOaJQ3ZZQpT1&sigb=r5fxVNKmJT4S&sigi=bJVvFsDuQhrP&sigt=5ezqBbXUbFvt&.crumb=TWd4geb51ZY&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211US885G0",
      quantity: 10,
    },
    {
      id: 2,
      productName: "Nho",
      price: 200,
      image: "https://tse3.mm.bing.net/th?id=OIP.ycnwTcloErWmc6CuiYaL0AHaFj&pid=Api&P=0&h=220",
      quantity: 5,
    },
  
  ];
  