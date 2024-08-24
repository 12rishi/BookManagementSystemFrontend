import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SingleBook = () => {
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();
  const handleDelete = async () => {
    const response = await axios.delete(
      `https://bookmanagementsystem-hc9x.onrender.com//book/${id}`
    );
    if (response.status === 200) {
      return navigate("/");
    } else {
      alert(response?.data?.message);
    }
  };

  const fetchSingleBook = async () => {
    const response = await axios.get(
      `https://bookmanagementsystem-hc9x.onrender.com//book/${id}`
    );
    setBook(response.data.data);
  };

  useEffect(() => {
    fetchSingleBook();
  }, []);

  return (
    <>
      {book ? (
        <div className="container mx-auto p-4 max-w-3xl mt-10 animate-fadeIn">
          <div className="bg-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out">
            {/* Image Section */}
            <div className="w-full h-96 relative group">
              <img
                src={
                  book?.image
                    ? book.image
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVt6lVU0BbsDjfqURi0RUO0GJvGWXHE8Lcg&s"
                }
                alt={book.bookName}
                className="object-cover w-full h-full group-hover:opacity-80 transition-opacity duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h2 className="text-white text-4xl font-bold">
                  {book.bookName}
                </h2>
              </div>
            </div>
            {/* Details Section */}
            <div className="p-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {book.bookName}
              </h1>
              <p className="text-gray-500 italic mb-2">by {book.authorName}</p>
              <p className="text-2xl font-semibold text-green-500 mb-4">
                {`Rs.${book.bookPrice}`}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">ISBN:</span> {book.isBnNumber}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Published At:</span>{" "}
                {book.publishedAt}
              </p>
              <button onClick={handleDelete}>Delete</button>
              <Link to={`/edit/${book._id}`}>
                <button>Edit</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 animate-pulse">Loading...</p>
      )}
    </>
  );
};

export default SingleBook;
