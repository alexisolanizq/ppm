import React from 'react'
import { Link } from 'react-router-dom'

const NotesForm = () => (
    <div>
        <div className="container-fluid d-flex justify-content-between align-items-center p-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/catalogos/empleados" className="fw-bold green-color">
                Lista de empleados
              </Link>
            </li>
            <li className="fw-bold breadcrumb-item active" aria-current="page">
              employeeTitle
            </li>
          </ol>
        </nav>
      </div>
      <div className="w-75 mx-auto bg-white shadow-sm">
        <p className='green-color fw-bold fs-5 text-center py-3'>Crear nota</p>
      </div>
    </div>
  )

export default NotesForm