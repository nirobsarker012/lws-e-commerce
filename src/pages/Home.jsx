import React from "react";
import Header from "../components/Header";
import CardList from "../components/Card/CardList";
import MyCardList from "../components/Card/MyCardList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ProductProvider from "../contexts/ProductProvider";

const Home = () => {
  return (
    <>
      <ProductProvider>
        <Header />
        <main className="container mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CardList />
            <MyCardList />
          </div>
        </main>
      </ProductProvider>
      {/* NewsLetter Sections */}
      <Newsletter />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
