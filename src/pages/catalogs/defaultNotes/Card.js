import React from 'react';

import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ defaultNote, setDefaultNote }) => {
  const priorityColors = ['bg-danger', 'bg-warning', 'bg-success'];
  const color = priorityColors[defaultNote.priorityId - 1];

  return (
    <div className="defaultNote bg-white shadow-sm border-0 rounded-4">
      <div className="border-bottom defaultNote__title">
        <h5 className="m-0">{defaultNote.name}</h5>
        <div className="defaultNote__priority">
          <p className="m-0">Prioridad</p>
          <span className={`badge ${color}`}>{defaultNote.priority}</span>
        </div>
      </div>
      <div className="border-bottom d-flex justify-content-start align-items-center">
        <p className="m-0 fw-bold">{defaultNote.description}</p>
      </div>
      <div className="d-flex justify-content-end align-items-center">
        <button
          type="button"
          className="defaultNote__button green-icon"
          onClick={() => setDefaultNote(defaultNote.id)}
        >
          <FontAwesomeIcon icon={faPen} />
          &nbsp; Editar Nota
        </button>
      </div>
    </div>
  );
};

export default Card;
