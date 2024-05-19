'use client'

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { useQuery } from "react-query";

export default function Home() {

  const { data, isLoading, isError } = useQuery(['products'], () =>
    fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC')
      .then(response => response.json())
  );

  return (
    <>
      <Header />
      <main>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading products</p>}
        {data && (
          <ul>
            {data?.products.map(product => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
