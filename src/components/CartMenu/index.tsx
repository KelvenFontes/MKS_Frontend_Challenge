import React from 'react';
import styled from 'styled-components';

import closeCart from '../../assets/Close_cart.png';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import CardMenu from '../CardMenu';
import { RootState } from '@/types/RootState';

const StyledCartMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 330px;
  background: #0F52BA;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 48em){
    width: 480px;

  }

  .card {
    cursor: pointer;
  }

  .testeCard {
    display: flex;
    justify-content: space-between;
  }

  .cart-items {
    max-height: calc(100% - 60px);
    overflow-y: auto;
    padding-right: 10px;

    scrollbar-width: thin;
    scrollbar-color: #ffffff #0F52BA;


    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #0F52BA;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ffffff;
      border-radius: 8px;
      border: 2px solid #0F52BA;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #ffffff;
    }

  }
`;

const MenuTitle = styled.h2`
  color: #FFF;
`;

const MenuItem = styled.div`
  margin-bottom: 10px;
`;

interface CardMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const CartMenu = ({ isMenuOpen, toggleMenu }: CardMenuProps) => {

  const cartItems = useSelector((state: RootState) => state?.cart.items);
  // const cartItems = useSelector(state => state?.cart.items);
  // const totalItems = useSelector(state => state?.cart.totalItems);

  console.log(cartItems);
  // console.log(totalItems);

  return (
    <StyledCartMenu>
      <div className='testeCard'>
        <MenuTitle>Carrinho de compras</MenuTitle>
        <div className='card' onClick={toggleMenu}>
          <Image src={closeCart} alt='closeCart' />
        </div>
      </div>

      <div className='cart-items'>
        {/* <h3>Total de itens no carrinho: {totalItems}</h3> */}
        <ul>
          {cartItems.map((item: any) => (
            <CardMenu key={item.id} product={item} />
          ))}
        </ul>
      </div>

    </StyledCartMenu>
  );
};

export default CartMenu;
