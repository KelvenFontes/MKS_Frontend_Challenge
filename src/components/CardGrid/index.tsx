import Image from "next/image";
import { CardContainer } from "./styles";

import { Product } from "@/types/Product";

import iconbuy from '@/assets/iconbuy.png';
import formatCurrency from "@/util/formatCurrency";

interface CardProps {
  product: Product;
}

const CardGrid = ({ product }: CardProps) => {
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

      <div className="image-button-container">
        <Image
          src={iconbuy}
          alt='comprar'
          width={14}
          height={16}
        />
        <button>Comprar</button>
      </div>

    </CardContainer>
  );
}

export default CardGrid;
