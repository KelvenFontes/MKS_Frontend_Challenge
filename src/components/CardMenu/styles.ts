import styled from 'styled-components';

export const CardContainer = styled.div`

  @media screen and (min-width: 20em){
    position: relative;
    background-color: #FFF;
    width: 251px;
    height: 328px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em 0;
    border-radius: 0.5em;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
    padding: 0;

    @media screen and (min-width: 20em){
      width: 250px;
      height: 220px;
      display: flex;

      .div-image {
        position: relative;
        width: 86px;
        height: 100px;
      }

      .produc-name{
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: #2C2C2C;
      }

      .name-price-container{
        display: flex;
        align-items: center;
        gap: 2em;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
      }

      .price-item {
        width: 84px;
        height: 34.81px;
        top: 163.17px;
        left: 143px;
        gap: 0px;
        border-radius: 5px;
        opacity: 0px;
        background: #373737;
        display: flex;
        align-items: center;
        justify-content: center;


        p {
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 15px;
          color: #FFF;
        }
      }

      .icon-remove-desktop {
        display: none;
      }

      .icon-remove-mobile {
        position: absolute;
        top: 0.5em;
        right: 0.7em;
        cursor: pointer;
        width: 22px;
        height: 22px;
      }

    }



    .container-quantity{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    border-radius: 4px;
    border: 1px solid #BFBFBF;
    padding: 0.1em 0;
    width: 100px;
    height: 34.5px;

    .less {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 0.5em;
      border-right: 1px solid #BFBFBF;

    }

    .more {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 0.5em;
      border-left: 1px solid #BFBFBF;
    }
  }

  @media screen and (min-width: 48em){
    display: flex;
    flex-direction: row;
    width: 385px;
    height: 101px;
    gap: 1em;
    margin: 22px 0;

    .div-image {
      width: 46px;
      height: 58px;
    }

    .name-price-container{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1em;
    }

    .produc-name {
      width: 114px;
      font-family: 'Montserrat', sans-serif;
      font-size: 13px;
      font-weight: 400;
      line-height: 17px;
      color: #2C2C2C;
    }

    .container-quantity{
      width: 50px;
      height: 19px;
      justify-content:center;
      gap: .3em;

      p{
         font-size: 8px;
         line-height: 9.75;
         font-weight: 400;
         font-family: 'Montserrat', sans-serif;
         padding: 0;
      }

      .less {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 0.3em;
        border-right: 1px solid #BFBFBF;
      }

      .more {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 0.1em 0.2em;
        border-left: 1px solid #BFBFBF;
      }

    }
    .price-item {
        width: 100%;
        height: 100%;
        background: none;

        p{
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        color: #000;
      }
    }

    .icon-remove-mobile{
      display: none;
    }

    .icon-remove-desktop{
      display: flex;
    }

    .icon-remove {
      position: absolute;
      top: -9px;
      right: -9px;
      cursor: pointer;
      width: 18px;
      height: 18px;
    }

  }

  }
`;
