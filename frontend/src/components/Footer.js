import React from 'react'
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div >
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 fst-italic fw-bold mx-5">
            Appoint-Well
          </Link>
          <div className="text-muted mx-5">© 2021 Company, Inc</div>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><Link className="text-muted" to="#"></Link></li>
          <li className="ms-3"><Link className="text-muted" to="#"></Link></li>
          <li className="ms-3"><Link className="text-muted" to="#"></Link></li>
        </ul>
      </footer>
    </div>
  )
}
