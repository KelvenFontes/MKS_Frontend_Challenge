import Image from 'next/image';
import cart from '../../assets/cart.png';

import { Container, Content } from './styles';
import { useState } from 'react';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export function Header({ isMenuOpen, toggleMenu }: HeaderProps) {

  return (
    <Container>
      <Content>

        <div className='header-content'>
          <h1>mks</h1>
          <span>Sistemas</span>
        </div>

        <div className='header-cart' onClick={toggleMenu}>
          <Image src={cart} alt='cart' />
          <p>0</p>
        </div>

      </Content>
    </Container>
  );
}
