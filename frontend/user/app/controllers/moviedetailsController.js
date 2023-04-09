// get value after "?" from window.location.href 
var id = location.href.substr(location.href.search("\\?")).split("=")[ 1 ];
console.log(id);

apiGetMovieById(id)
  .then((response) => {
    console.log(response.data);
    let detail = response.data;
    if (detail) {
      display(detail);
    }
  })
  .catch((error) => {
    console.log(error);
  })

function dom(params) {
  return document.querySelector(params);
}

// Render data to UI
function display(detail) {
  document.title = detail.name;
  dom('#body').innerHTML = `
    <div class="container">
    <div class="details-banner-wrapper">
      <div class="details-banner-thumb">
        <img src=${detail.poster} alt="movie" />
        <a
          href="https://www.youtube.com/watch?v=${detail.link}"
          class="video-button video-popup"
        >
          <i class="fal fa-play"></i>
        </a>
      </div>
      <div class="details-banner-content offset-lg-4">
        <h3 class="title">${detail.name}</h3>
        <div class="tags">
          <a href="#">2D</a>
        </div>
        <a href="#" class="button">Type</a>
        <div class="social-and-duration">
          <div class="duration-area">
            <div class="item">
              <i class="fal fa-clock"></i
              ><span
                >${detail.times}
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
                  <p>${detail.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
        `
}