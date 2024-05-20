'use client'

import CardGrid from "@/components/CardGrid";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
// import CartMenu from '@/components/CartMenu';
import 'react-loading-skeleton/dist/skeleton.css';

import { Product } from "@/types/Product";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useQuery } from "react-query";

import styled from "styled-components";
import { useState } from "react";
import CartMenu from "@/components/CartMenu";

const ProductList = styled.ul`

  @media screen and (min-width: 20em){
      display: grid;
      align-items: center;
      justify-content: center;
      margin: 1.4em 0;
  }

  @media screen and (min-width: 48em){
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    list-style: none;
    padding: 0;
  }

`;

const ProductItem = styled.li`
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const { data, isLoading, isError } = useQuery(['products'], () =>
    fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC')
      .then(response => response.json())
  );

  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main>
        {isLoading && (
          <SkeletonTheme baseColor="#ddd" highlightColor="#ccc">
            <ProductList>
              {Array.from({ length: 8 }).map((_, index) => (
                <ProductItem key={index}>
                  <SkeletonWrapper>
                    <Skeleton circle={true} height={100} width={100} />
                    <Skeleton height={20} width={`60%`} style={{ marginTop: 10 }} />
                    <Skeleton height={20} width={`80%`} style={{ marginTop: 10 }} />
                  </SkeletonWrapper>
                </ProductItem>
              ))}
            </ProductList>
          </SkeletonTheme>
        )}
        {isError && <p>Error loading products</p>}
        {data && (
          <ProductList>
            {data.products.map((product: Product) => (
              <CardGrid key={product.id} product={product} />
            ))}
          </ProductList>
        )}
      </main>

      {isMenuOpen && <CartMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}

      <Footer />
    </>
  );
}
