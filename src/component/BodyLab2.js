import React from "react";

export const BodyLab2 = () => {
  return (
    <div class="container">
      <section id="menu">
        <div class="row">
          <div class="col-md-12">
            <h2 >Our Menu</h2>
          </div>
        </div>

        <div class="row row-body">
          <div class="col-md-3">
            <div class="card">
              <div class="sale-badge">SALE</div>
              <img
                src="/images/p1.jpg"
                alt="Pizza Margherita"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Margherita Pizza</h5>
                <p>
                <del class="card-text">$40.00</del>
                <span class=" new-price">$21.00</span>
                </p>
                <a href="#" class="btn btn-dark w-100">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img
                src="/images/p2.jpg"
                alt="Pizza Nấm"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Mushroom Pizza</h5>
                <p class="card-text">$25.00</p>
                <a href="#" class="btn btn-dark w-100">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="sale-badge">New</div>
              <img
                src="/images/p3.jpg"
                alt="Pizza Hawaii"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Hawaiian Pizza </h5>
                <p class="card-text">$30.00</p>
                <a href="#" class="btn btn-dark w-100">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="sale-badge">SALE</div>
              <img
                src="/images/p4.jpg"
                alt="Pizza Hawaii"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title"> Pesto Pizza</h5>
                <p>
                <del class="card-text">$50.00</del>
                <span class="new-price">$30.00</span>
                </p>
                <a href="#" class="btn btn-dark w-100">
                  {" "}
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class=" text-center">
        <h2>Book your table </h2>
        <div class="row booktable">
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Your Name *"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="Your Email *"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div class="col">
            <select class="form-control" aria-label="Select a service">
              <option selected>Select a Service</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
          </div>
        </div>
        <div >
          <textarea
            class="form-control "
            placeholder="Please write your commnet"
            id="floatingTextarea2"
            rows = "5"
          ></textarea>
        </div>
      </div>
      <div class="send">
        <button>Send Message</button>
      </div>
    </div>
  );
};
