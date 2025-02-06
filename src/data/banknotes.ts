import { Banknote } from '../types';
import USFront from '../images/100-american-dollars-banknote-obverse-1.jpg';
import USBack from '../images/100-american-dollars-banknote-reverse-1.jpg';
import JapanFront from '../images/10000-japanese-yen-banknote-2004-series-yukichi-fukuzawa-obverse-1.jpg';
import JapanBack from '../images/10000-japanese-yen-banknote-2004-series-yukichi-fukuzawa-reverse-1.jpg';
import VietnamFront from '../images/500000-vietnamese-dong-banknote-obverse-1.jpg';
import VietnamBack from '../images/500000-vietnamese-dong-banknote-reverse-1-433x183.jpg';


export const banknotes: Banknote[] = [
  {
    id: 1,
    country: "United States",
    currency: "American Dollars",
    denomination: "100",
    frontImage: USFront,
    backImage: USBack,
    description: "Reverse view"
  },
  {
    id: 2,
    country: "Japan",
    currency: "Japanese Yen",
    denomination: "10,000",
    frontImage: JapanFront,
    backImage: JapanBack,
    description: "Reverse view"
  },
  {
    id: 3,
    country: "Vietnam",
    currency: "Vietnamese Dong",
    denomination: "500,000",
    frontImage: VietnamFront,
    backImage: VietnamBack,
    description: "Reverse view"
  },
  // ... Add 28 more banknotes with similar structure
];