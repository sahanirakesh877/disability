import React from 'react'

const Featured = () => {
  return (
    <>
   {/* Featured_job_start */}
<section className="featured-job-area section-padding30 section-bg2" data-background="assets/img/gallery/section_bg03.png">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-7 col-lg-9 col-md-10 col-sm-12">
        {/* Section Tittle */}
        <div className="section-tittle text-center mb-80">
          <span>What we are Doing</span>
          <h2>We arrange many social events for Disable person</h2>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-9 col-md-12">
        {/* single-job-content */}
        <div className="single-job-items mb-30">
          <div className="job-items">
            <div className="company-img">
              <a href="#"><img src="./src/assets/img/gallery/socialEvents1.png" alt /></a>
            </div>
            <div className="job-tittle">
              <a href="#"><h4>Donation is Hope</h4></a>
              <ul>
                <li><i className="far fa-clock" />8:30 - 9:30am</li>
                <li><i className="fas fa-sort-amount-down" />18.01.2021</li>
                <li><i className="fas fa-map-marker-alt" />Athens, Greece</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-12">
        {/* single-job-content */}
        <div className="single-job-items mb-30">
          <div className="job-items">
            <div className="company-img">
              <a href="#"><img src="./src/assets/img/gallery/socialEvents2.png" alt /></a>
            </div>
            <div className="job-tittle">
              <a href="#"><h4>A hand for Children</h4></a>
              <ul>
                <li><i className="far fa-clock" />8:30 - 9:30am</li>
                <li><i className="fas fa-sort-amount-down" />18.01.2021</li>
                <li><i className="fas fa-map-marker-alt" />Athens, Greece</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-12">
        {/* single-job-content */}
        <div className="single-job-items mb-30">
          <div className="job-items">
            <div className="company-img">
              <a href="#"><img src="./src/assets/img/gallery/socialEvents3.png" alt /></a>
            </div>
            <div className="job-tittle">
              <a href="#"><h4>Help for Children</h4></a>
              <ul>
                <li><i className="far fa-clock" />8:30 - 9:30am</li>
                <li><i className="fas fa-sort-amount-down" />18.01.2021</li>
                <li><i className="fas fa-map-marker-alt" />Athens, Greece</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Featured_job_end */}

    </>
  )
}

export default Featured
