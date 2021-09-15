
function Welcome () {
    return (
      <div className="welcomePage">
        <h2>Welcome to Gtalk Family</h2>

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://collegeforward.org/wp-content/uploads/2020/12/GettyImages-874140210-5ae33b7543a103003685eb37.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption  d-md-block">
        <h3 style={{marginBottom:"60px",fontSize:"50px",color:"black"}}>Join a new community</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://happinessmatters.com/wp-content/uploads/2016/12/Make-New-Friends-FB.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.happierhuman.com/wp-content/uploads/2020/07/apps-make-new-friends.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3 style={{marginBottom:"60px",fontSize:"50px" }}>Get in touch with your beloved ones</h3>
      </div>
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

      </div>
    );
  }
export default Welcome;