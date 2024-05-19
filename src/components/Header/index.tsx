import Image from 'next/image';
import cart from '../../assets/cart.png';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>

        <div className='header-content'>
          <h1>mks</h1>
          <span>Sistemas</span>
        </div>

        <div className='header-cart'>
          <Image src={cart} alt='cart' />
          <p>0</p>
        </div>

      </Content>
    </Container>
  );
}
