import React from 'react';
import styled from 'styled-components';

import closeCart from '../../assets/Close_cart.png';
import closeCartDesktop from '../../assets/CloseCartDesktop.png';
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
  /* padding: 20px; */
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;

  .button-finish {
    background: #000;
    color: #FFF;
    cursor: pointer;
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;

    p {
      font-family: 'Montserrat', sans-serif;
      font-size: 20px;
      font-weight: 700;
      line-height: 15px;
    }
  }


  @media screen and (min-width: 48em){
    width: 480px;
  }

  .card {
    cursor: pointer;
  }

  .displayCart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.5em;
    margin-top: 25px;
  }

  .closeCartDesktop {
    display: none;
  }

  @media screen and (min-width: 48em) {
    .displayCart {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10em;
      margin-top: 25px;
    }

    .closeCartDesktop {
      display: block;
    }

    .closeCartMobile {
      display: none;
    }
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
  width: 178px;
  font-family: 'Montserrat', sans-serif;
  font-size: 27px;
  font-weight: 700;
  line-height: 32px;

  span {
    display: block;
  }

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

      <div className='displayCart'>
        <MenuTitle>Carrinho <span>de compras</span></MenuTitle>
        <div className='card closeCartMobile' onClick={toggleMenu}>
          <Image src={closeCart} alt='closeCart' />
        </div>
        <div className='card closeCartDesktop' onClick={toggleMenu}>
          <Image src={closeCartDesktop} alt='closeCartDesktop' />
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

      <div className='button-finish'>
        <p>Finalizar Compra</p>
      </div>

    </StyledCartMenu>
  );
};

export default CartMenu;
