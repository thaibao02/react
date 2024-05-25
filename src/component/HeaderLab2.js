import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const HeaderLab2 = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-secondary">
          <div class="container">
            <h3 style={{ color: "white" }}>Pizza House</h3>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 pl-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <form class="d-flex " role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn bg-danger" type="submit">
                  <FontAwesomeIcon
                    className="text-light"
                    icon={faMagnifyingGlass}
                  />
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./images/banner1.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Neapolitan Pizza</h5>
                <p>
                  If you are looking for a traditional Italian pizza, the
                  Neapolitan is the best option{" "}
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="./images/banner2.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Neapolitan Pizza</h5>
                <p>
                  If you are looking for a traditional Italian pizza, the
                  Neapolitan is the best option{" "}
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="./images/banner3.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Neapolitan Pizza</h5>
                <p>
                  If you are looking for a traditional Italian pizza, the
                  Neapolitan is the best option{" "}
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    </>
  );
};
