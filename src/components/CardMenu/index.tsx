import Image from "next/image";
import { CardContainer } from "./styles";

import less from '@/assets/less.svg';
import more from '@/assets/more.svg';
import iconRemove from '@/assets/CloseCartDesktop.png';
import removeItem from '@/assets/removeItem.png';
import formatCurrency from "@/util/formatCurrency";
import { addToCart, removeFromCart, removeItemFromCart } from "@/lib/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '@/types/RootState';

interface CardMenuProps {
  product: any;
}

const CardMenu = ({ product }: CardMenuProps) => {
  const cartItems = useSelector((state: RootState) => state?.cart.items);
  // const cartItems = useSelector(state => state?.cart.items);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const quantity = 1;
    const item = { ...product, quantity };
    dispatch(addToCart(item));
    console.log(cartItems);
  };

  const handleremoveFromCart = () => {
    const item = product.id;
    dispatch(removeFromCart(item));
    console.log(cartItems);
  };

  const handleremoveItemFromCart = () => {
    const item = product.id;
    dispatch(removeItemFromCart(item));
  };

  return (
    <CardContainer>

      <div className="div-image">
        <Image src={product.photo} alt={product.name} fill objectFit="contain" />
      </div>

      <p className="produc-name">{product.name}</p>

      <div className="name-price-container">

        <div className="container-quantity">
          <div className="less" onClick={handleremoveFromCart}>
            <Image src={less} alt='less' />
          </div>

          <p>{product.quantity}</p>

          <div className="more" onClick={addItemToCart}>
            <Image src={more} alt='more' />
          </div>
        </div>

        <div className="price-item">
          <p>{formatCurrency(product.price)}</p>
        </div>
      </div>

      <div className="icon-remove icon-remove-mobile" onClick={handleremoveItemFromCart}>
        <Image src={removeItem} alt='icon remove' layout="fill" objectFit="cover"/>
      </div>

      <div className="icon-remove icon-remove-desktop" onClick={handleremoveItemFromCart}>
        <Image src={iconRemove} alt='icon remove' layout="fill" objectFit="cover"/>
      </div>


    </CardContainer>
  );
}

export default CardMenu;
