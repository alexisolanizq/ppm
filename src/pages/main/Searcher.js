import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LogoVerdeImage from '@Assets/images/ppm-logo-verde.svg';

const Searcher = () => (
  <Container className="bg-white px-0 vh-100" fluid>
    <div className="pt-5">
      <div className="d-block mb-5">
        <img
          src={LogoVerdeImage}
          alt="Panamericanas de patentes y marcas"
          height={80}
        />
      </div>
      <input
        type="text"
        placeholder="Término de búsqueda"
        className="input-main"
      />
      <button type="button" className="button-main">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  </Container>
);

export default Searcher;
