import "@/styles/globals.css";
import "@/components/header/ad/ad.css";
import "@/components/header/navbar/navbar.css";
import "@/components/header/header.css";
import "@/components/main/main.css";
import "@/components/main/shopping_cart/shoppingcart.css";
import "@/components/main/shopping_cart/product/product.css";
import "@/components/main/shopping_cart/confirm_buy_modal/confirmbuymodal.css"
import "@/components/main/carousel/carousel.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
