getMovies();

// request API get all movies
function getMovies() {
  apiGetMovie()
    .then((response) => {
      console.log(response.data);
      if (response.data) {
        let movies = response.data.map(movie => {
          return new Movie(movie._id, movie.name, movie.poster, movie.link, movie.desc)
        });
        // Hiển thị danh sách phim ra giao diện
        console.log(movies);
        display(movies);
      } else {
        alert("Dữ liệu rỗng !!!!");
      }
    })
    .catch((error) => {
      console.log(error);
    })
}

//==============================================

function dom(params) {
  return document.querySelector(params);
}

// Render data to UI
function display(movies) {
  let output = movies.reduce((result, movie, index) => {
    return result + `
        <div class="col-sm-6 col-lg-4">
        <div class="movie-grid">
          <div class="movie-thumb c-thumb" style="height: 500px">
            
              <img src=${movie.poster} alt="movie" data-id="${movie.id}" data-type="details"/>
          </div>
          <div class="movie-content">
          <h5 class="title m-0">
            <div data-id="${movie.id}" data-type="details" style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden; width: 300px;" title="${movie.name}">
            ${movie.name}
            </div>
          </h5>
            <ul class="movie-rating-percent">
              <li></li>
              <li>
                <i class="fal fa-star"></i>
                <span class="content">5.0</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
        `
  }, "");
  dom('#tblDanhSachPhim').innerHTML = output;
}
// ============= Model Form =================

dom('#tblDanhSachPhim').addEventListener('click', (evt)=>{
  let id = evt.target.getAttribute("data-id");
  let elementType = evt.target.getAttribute("data-type");
  if (elementType === "details") {
    window.location.href = "moviedetails.html?id=" + id;
  }
});

{/* <div class="container">
<div class="details-banner-wrapper">
  <div class="details-banner-thumb">
    <img src="<?php echo $mv['poster']; ?>" alt="movie" />
    <a
      href="https://www.youtube.com/watch?v=<?php echo $mv['link'] ?>"
      class="video-button video-popup"
    >
      <i class="fal fa-play"></i>
    </a>
  </div>
  <div class="details-banner-content offset-lg-4">
    <h3 class="title"><?php echo $mv['movieName']; ?></h3>
    <div class="tags">
      <a href="#">2D</a>
    </div>
    <a href="#" class="button"><?php echo $mv['type'] ?></a>
    <div class="social-and-duration">
      <div class="duration-area">
        <div class="item">
          <i class="fal fa-clock"></i
          ><span
            ><?php echo $movie['time']; ?>
            phút</span
          >
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>

<section class="book-section">
<div class="container">
<div class="book-wrapper offset-lg-4">
  <div class="left-side">
    <div class="item">
      <div class="item-header">
        <h5 class="title">5.0</h5>
        <div class="rated">
          <i class="fas fa-star"></i>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="item-header">
        <div class="rated rate-it">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <h5 class="title">0.0</h5>
      </div>
    </div>
  </div>
</div>
</div>
</section>

<section class="movie-details-section padding-top padding-bottom">
<div class="container" style="padding-top: 10rem">
<div class="row justify-content-center flex-wrap-reverse mb--50">
  <div class="col-lg-9 mb-50">
    <div class="movie-details">
      <div class="tab summery-review">
        <ul class="tab-menu">
          <li class="active">Chi tiết</li>
        </ul>
        <div class="tab-area">
          <div class="tab-item active">
            <div class="item">
              <p><?php echo $movie['description']; ?></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section> */}
