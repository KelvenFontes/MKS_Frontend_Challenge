import Image from 'next/image';
import cart from '../../assets/cart.png';

import { Container, Content } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export function Header({ isMenuOpen, toggleMenu }: HeaderProps) {

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Container>
      <Content>

        <div className='header-content'>
          <h1>mks</h1>
          <span>Sistemas</span>
        </div>

        <div className='header-cart' onClick={toggleMenu}>
          <Image src={cart} alt='cart' />
          <p>{totalItems}</p>
        </div>

      </Content>
    </Container>
  );
}
