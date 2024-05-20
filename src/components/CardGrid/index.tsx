import Image from "next/image";
import { CardContainer } from "./styles";

import { Product } from "@/types/Product";

import iconbuy from '@/assets/iconBuy.png';
import formatCurrency from "@/util/formatCurrency";

import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '@/lib/cartReducer';
import { RootState } from '@/types/RootState';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface CardProps {
  product: Product;
}

const CardGrid = ({ product }: CardProps) => {

  const [showModal, setShowModal] = useState(false);

  const cartItems = useSelector((state: RootState) => state?.cart.items);

  const dispatch = useDispatch();

  const addItemToCart = () => {
    const quantity = 1;
    const item = { ...product, quantity };
    dispatch(addToCart(item));
    setShowModal(true);
    setTimeout(() => setShowModal(false), 1000);

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

      <motion.div
        className="image-button-container"
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.8 }}
        onClick={addItemToCart}
      >
        <Image
          src={iconbuy}
          alt='comprar'
          width={14}
          height={16}
        />
        <button>
          Comprar
        </button>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              top: '25%',
              left: '25%',
              width: '50%',
              height: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              fontSize: '1.2em',
              textAlign: 'center',
              borderRadius: '10px',
              zIndex: 10
            }}
          >
            Item adicionado ao carrinho!
          </motion.div>
        )}
      </AnimatePresence>

    </CardContainer>
  );
}

export default CardGrid;
