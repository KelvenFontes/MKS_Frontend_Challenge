import React from 'react';
import styled from 'styled-components';

import closeCart from '../../assets/Close_cart.png';
import Image from 'next/image';

const StyledCartMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 300px;
  background: #0F52BA;
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;

  .card {
    cursor: pointer;
  }

  .testeCard {
    display: flex;
    justify-content: space-between;
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

  return (
    <StyledCartMenu>
      <div className='testeCard'>
        <MenuTitle>Carrinho de compras</MenuTitle>
        <div className='card' onClick={toggleMenu}>
          <Image src={closeCart} alt='closeCart' />
        </div>
      </div>
    </StyledCartMenu>
  );
};

export default CartMenu;
