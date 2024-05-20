import { Montserrat } from 'next/font/google';
import styled from 'styled-components';

export const CardContainer = styled.div`

@media screen and (min-width: 20em){
    background-color: #FFF;
    width: 251px;
    height: 328px;
    display: flex;
    flex-direction: column; /* Alteração para exibir os itens em coluna */
    justify-content: center;
    align-items: center; /* Centraliza horizontalmente */
    margin: 0.5em 0;
    border-radius: 0.5em;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
    padding: 0;
  }

  .name-price-container {
    display: flex;
    justify-content: space-between; /* Isso vai colocar os elementos o mais longe possível */
    width: 80%; /* Ajuste conforme necessário */
    margin-bottom: 0.5em; /* Adiciona um pequeno espaçamento entre o name/price e a descrição */

    p {
      font-size: 16px;
      font-weight: 400;
      color: #2C2C2C;
      line-height: 19px;
      font-family: 'Montserrat', sans-serif;
    }

  }

  .price-item {
    width: 74px;
    height: 30px;
    background: #373737;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    P{
      color: #FFF;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 15px;
      line-height: 15px;
      align-items: center;
    }
  }

  .image-button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8em;
    width: 100%;
    height: 36px;
    margin-top: auto;
    background: #0F52BA;
    border-radius: 0 0 0.5em 0.5em;
    cursor: pointer;

    button {
      background: transparent;
      border: none;
      color: #FFF;
      font-size: 14px;
      font-weight: 600;
      font-family: 'Montserrat', sans-serif;
      cursor: pointer;
    }
  }

  .description {
    width: 220px;
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    color: #2C2C2C;
    margin-bottom: 1em;
    margin-top: 1em;
  }

`;
