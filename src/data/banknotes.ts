import { Banknote } from '../types';
import USFront from '../images/100-american-dollars-banknote-obverse-1.jpg';
import USBack from '../images/100-american-dollars-banknote-reverse-1.jpg';
import EuroFront from '../images/200-euros-banknote-second-series-obverse.jpg';
import EuroBack from '../images/200-euros-banknote-second-series-reverse-433x215.jpg';
import ChinaFront from '../images/100-chinese-yuan-banknote-mao-type-2015-obverse-2.jpg';
import ChinaBack from '../images/100-chinese-yuan-banknote-mao-type-2015-reverse-2.jpg';
import EnglandFront from '../images/bank-of-england-50-pounds-sterling-polymer-banknote-alan-turing-obverse.jpg';
import EnglandBack from '../images/bank-of-england-50-pounds-sterling-polymer-banknote-alan-turing-reverse.jpg';
import JapanFront from '../images/10000-japanese-yen-banknote-2004-series-yukichi-fukuzawa-obverse-1.jpg';
import JapanBack from '../images/10000-japanese-yen-banknote-2004-series-yukichi-fukuzawa-reverse-1.jpg';
import AustraliaFront from '../images/100-australian-dollars-banknote-dame-nellie-melba-obverse-1.jpg';
import AustraliaBack from '../images/100-australian-dollars-banknote-dame-nellie-melba-reverse-1.jpg';
import VietnamFront from '../images/500000-vietnamese-dong-banknote-obverse-1.jpg';
import VietnamBack from '../images/500000-vietnamese-dong-banknote-reverse-1-433x183.jpg';


export const banknotes: Banknote[] = [
  {
    id: 1,
    country: "United States",
    currency: "American Dollars",
    denomination: "100",
    frontImage: USFront,
    backImage: USBack
  },
  {
    id: 2,
    country: "United Kingdom",
    currency: "British Pounds",
    denomination: "50",
    frontImage: EnglandFront,
    backImage: EnglandBack
  },
  {
    id: 3,
    country: "Eurozone",
    currency: "Euro",
    denomination: "200",
    frontImage: EuroFront,
    backImage: EuroBack
  },
  {
    id: 4,
    country: "China",
    currency: "Chinese Yuan",
    denomination: "100",
    frontImage: ChinaFront,
    backImage: ChinaBack
  },
  {
    id: 5,
    country: "Japan",
    currency: "Japanese Yen",
    denomination: "10,000",
    frontImage: JapanFront,
    backImage: JapanBack
  },
  {
    id: 6,
    country: "Australia",
    currency: "Australian Dollars",
    denomination: "100",
    frontImage: AustraliaFront,
    backImage: AustraliaBack
  },
  {
    id: 10,
    country: "Vietnam",
    currency: "Vietnamese Dong",
    denomination: "500,000",
    frontImage: VietnamFront,
    backImage: VietnamBack
  },
  // ... Add 28 more banknotes with similar structure
];