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
`;
