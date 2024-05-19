import styled from 'styled-components';

export const Container = styled.header`

  @media screen and (min-width: 20em){
    background: #0F52BA;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .header-content {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 16px;

    h1 {
      font-size: 32px;
      font-weight: 600;
      color: #fff;
      text-transform: uppercase;
    }

    span {
      font-size: 16px;
      font-weight: 300;
      color: #fff;
      margin-left: 8px;
      line-height: 19px;
    }
  }

  .header-cart {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #fff;
    width: 52px;
    height: 26px;
    border-radius: 8px;
    margin-right: 16px;

    p {
      font-size: 12px;
      font-weight: 700;
    }
  }

`;
