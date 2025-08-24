import React from "react";
import Header from "../components/Header";
import CardList from "../components/Card/CardList";
import MyCardList from "../components/Card/MyCardList";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <CardList />
          <MyCardList />
        </div>
      </main>
    </>
  );
};

export default Home;
