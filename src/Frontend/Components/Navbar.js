import React from "react";

function Navbar() {
  return (
    <div>
      
        <nav class="navbar p-2 navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand ms-5" href="#">
              Campus Quarters
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto me-5">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Signup
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
     
    </div>
  );
}

export default Navbar;
