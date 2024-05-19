import styled from 'styled-components';

export const FooterContainer = styled.footer`

  @media screen and (min-width: 20em){
    background: #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 34px;

    p{
      font-size: 12px;
      font-weight: 400;
    }

    span{
      text-transform: uppercase;
    }
  }
`;

// export const FooterText = styled.footer`

//   @media screen and (min-width: 20em){
//     background: #EEEEEE;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 48px;
//   }
// `;
