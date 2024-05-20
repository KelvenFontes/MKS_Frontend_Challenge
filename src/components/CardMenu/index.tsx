import Image from "next/image";
import { CardContainer } from "./styles";

import less from '@/assets/less.svg';
import more from '@/assets/more.svg';
import formatCurrency from "@/util/formatCurrency";
import { addToCart, removeFromCart } from "@/lib/cartReducer";
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

  return (
    <CardContainer>

      <Image
        src={product.photo}
        alt={product.name}
        width={128}
        height={158}
        style={{ marginTop: '1.5em' }}
      />

      <p>{product.name}</p>

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


    </CardContainer>
  );
}

export default CardMenu;
