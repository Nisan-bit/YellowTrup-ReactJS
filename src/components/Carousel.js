
import React from 'react'

export default function caraousel() {
  return (
    <>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="images/c63cae1344766f14d9d184e5aafed065.gif" class="d-block w-100" alt="..." style={{ height: '500px' }} />
          </div>
          <div class="carousel-item">
            <img src="images/c63cae1344766f14d9d184e5aafed065.gif" class="d-block w-100" alt="..." style={{ height: '500px' }} />
          </div>
          <div class="carousel-item">
            <img src="images/c63cae1344766f14d9d184e5aafed065.gif" class="d-block w-100" alt="..." style={{ height: '500px' }} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
