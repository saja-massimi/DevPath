function OurStory(){

    return(
        <div className="section-area bg-gray section-sp1 our-story">
  <div className="container">
    <div className="row align-items-center d-flex">
      <div className="col-lg-5 col-md-12 heading-bx">
        <h2 className="m-b10">Our Story</h2>
        <h5 className="fw4">It is a long established fact that a reade.</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
      <div className="col-lg-7 col-md-12 heading-bx p-lr">
        <div className="video-bx">
          <img src="assets/images/about/pic1.jpg" alt="" />
          <a
            href="https://www.youtube.com/watch?v=x_sJzVe9P_8"
            className="popup-youtube video"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default OurStory;