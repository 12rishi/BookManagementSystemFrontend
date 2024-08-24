import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import axios from "axios";

const Home = () => {
  const [book, setBook] = useState([]);
  const fetchBook = async () => {
    const response = await axios.get(
      "https://bookmanagementsystem-hc9x.onrender.com/book"
    );
    console.log(response.data.data);

    setBook(response.data.data);
    console.log(book);
  };
  useEffect(() => {
    fetchBook();
  }, []);
  return (
    <>
      <div className="flex flex-wrap justify-evenly  space-x-4 ">
        {book.length > 0 ? (
          book.map((book) => {
            return <Card book={book} />;
          })
        ) : (
          <p className="text-black">Loading.....</p>
        )}
      </div>
    </>
  );
};

export default Home;
