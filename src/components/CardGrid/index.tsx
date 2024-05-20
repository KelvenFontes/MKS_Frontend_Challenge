import Image from "next/image";
import { CardContainer } from "./styles";

import { Product } from "@/types/Product";

import iconbuy from '@/assets/iconBuy.png';
import formatCurrency from "@/util/formatCurrency";

import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '@/lib/cartReducer';
import { RootState } from '@/types/RootState';

interface CardProps {
  product: Product;
}

const CardGrid = ({ product }: CardProps) => {


  const cartItems = useSelector((state: RootState) => state?.cart.items);

  // const cartItems = useSelector(state => state?.cart.items);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const quantity = 1;
    const item = { ...product, quantity };
    dispatch(addToCart(item));
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

      <div className="name-price-container">
        <p>{product.name}</p>

        <div className="price-item">
          <p>{formatCurrency(product.price)}</p>
        </div>
      </div>
      <p className="description">{product.description}</p>

      <div className="image-button-container" onClick={addItemToCart}>
        <Image
          src={iconbuy}
          alt='comprar'
          width={14}
          height={16}
        />
        <button >
          Comprar
        </button>
      </div>

    </CardContainer>
  );
}

export default CardGrid;
