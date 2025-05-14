import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    onSearch(searchTerm); // Pass query to parent (Menu)
  };

  return (
    <>
      <Row>
        <Col xs={12}>
          <input
            className="w-75 p-1 border border-black"
            type="text"
            style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for products..."
          />
          <button
            className="w-25 p-1 mb-1 btn btn-outline-primary"
            style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
            onClick={handleSearchClick}
          >
            Search
          </button>
        </Col>
      </Row>
    </>
  );
};

export default SearchBar;
