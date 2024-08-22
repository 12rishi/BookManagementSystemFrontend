import React from "react";
import { Link } from "react-router-dom";
const Card = ({ book }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-7 mt-11">
      <img
        className="w-56"
        src={
          book?.image
            ? book.image
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVt6lVU0BbsDjfqURi0RUO0GJvGWXHE8Lcg&s"
        }
        alt={book.bookName}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{book.bookName}</div>
        <p className="text-gray-700  text-xs">{`Rs.${book.bookPrice}`}</p>
      </div>
      <Link to={`/singlebook/${book._id}`}>
        <button>See More</button>
      </Link>
    </div>
  );
};

export default Card;
