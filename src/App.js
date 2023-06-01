import React, { useState } from 'react';
import Card from './Components/Card';

const App = () => {
  const [inputName, setInputName] = useState('');
  const [inputBook, setInputBook] = useState('');
  const [showData, setShowData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  };

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleBookChange = (e) => {
    setInputBook(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputName} onChange={handleNameChange} placeholder="Autor" />
        <input type="text" value={inputBook} onChange={handleBookChange} placeholder="Libro" />
        <button type="submit">Send</button>
      </form>

      {showData && <Card name={inputName} book={inputBook} />}
    </div>
  );
};

export default App;