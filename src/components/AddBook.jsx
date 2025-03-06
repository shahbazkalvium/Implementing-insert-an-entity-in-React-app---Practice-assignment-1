import React from 'react';
import './AddBook.css';

const AddBook = () => {
  return (
    <div>
      <h1>Add a New Book</h1>
      <form>
        <div>
          <label>Title:</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" name="author" />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description"></textarea>
        </div>
        <div>
          <label>Cover Image URL:</label>
          <input type="url" name="coverImageUrl" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;