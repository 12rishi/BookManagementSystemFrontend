import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [datas, setDatas] = useState({
    bookName: "",
    authorName: "",
    isBnNumber: null,
    bookPrice: null,
    publishedAt: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatas({ ...datas, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(datas).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("image", image);
    const response = await axios.patch(
      `https://bookmanagementsystem-hc9x.onrender.com/book/${id}`,
      formData
    );
    if (response.status === 200) {
      navigate(`/singlebook/${id}`);
    } else {
      alert(response.data.meesage);
    }
  };
  const fetchBook = async () => {
    const response = await axios.get(
      `https://bookmanagementsystem-hc9x.onrender.com/book/${id}`
    );
    console.log(response.data.data);

    setDatas(response.data.data);
  };
  useEffect(() => {
    fetchBook();
  }, []);
  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700 animate-fade-in">
          Add New Book
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="bookName" className="mb-1 text-gray-600">
              Book Name
            </label>
            <input
              type="text"
              id="bookName"
              name="bookName"
              onChange={handleInputChange}
              value={datas.bookName}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Enter book name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="authorName" className="mb-1 text-gray-600">
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              value={datas.authorName}
              name="authorName"
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Enter author name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="isbnNumber" className="mb-1 text-gray-600">
              ISBN Number
            </label>
            <input
              type="text"
              id="isBnNumber"
              name="isBnNumber"
              value={datas.isBnNumber}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Enter ISBN number"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="bookPrice" className="mb-1 text-gray-600">
              Book Price ($)
            </label>
            <input
              type="number"
              id="bookPrice"
              name="bookPrice"
              value={datas.bookPrice}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Enter book price"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="publishedAt" className="mb-1 text-gray-600">
              Published At
            </label>
            <input
              type="date"
              id="publishedAt"
              name="publishedAt"
              value={datas.publishedAt}
              onChange={handleInputChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="image" className="mb-1 text-gray-600">
              Book Cover Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
