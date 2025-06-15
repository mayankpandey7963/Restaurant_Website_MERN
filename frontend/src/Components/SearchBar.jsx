import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    onSearch(searchTerm); // Pass query to parent (Menu)
  };

  return (
    <>
      <Row className="mb-4">
        <Col xs={12} md={8} className="mx-auto">
          <form onSubmit={(e) => {
              e.preventDefault();
              handleSearchClick();
            }}>
            <div className="input-group">
              <input
                type="search"
                className="form-control border-dark"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </Col>
      </Row>


    </>
  );
};

export default SearchBar;
