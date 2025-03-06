import React from "react";
import { useNavigate } from "react-router-dom";
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const navigateToAddBook = () => {
    navigate('/add-book');
  };

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <button onClick={navigateToAddBook} className="addbook-button">Add Book</button>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;