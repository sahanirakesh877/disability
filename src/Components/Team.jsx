import React from 'react'

const Team = () => {
  return (
    <>
   {/*? Team Ara Start */}
<div className="team-area pt-160 pb-160">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
        {/* Section Tittle */}
        <div className="section-tittle section-tittle2 text-center mb-70">
          <span>What we are doing</span>
          <h2>Our Expert Volunteer Alwyes ready</h2>
        </div> 
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-team mb-30">
          <div className="team-img">
            <img src="/team1.png" alt />
            {/* Blog Social */}
            <ul className="team-social">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fas fa-globe" /></a></li>
            </ul>
          </div>
          <div className="team-caption">
            <h3><a href="instructor.html">Bruce Roberts</a></h3>
            <p>Volunteer leader</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-team mb-30">
          <div className="team-img">
            <img src="/team2.png" alt />
            {/* Blog Social */}
            <ul className="team-social">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fas fa-globe" /></a></li>
            </ul>
          </div>
          <div className="team-caption">
            <h3><a href="instructor.html">Robart Rechard</a></h3>
            <p>Volunteer leader</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-team mb-30">
          <div className="team-img">
            <img src="/team3.png" alt />
            {/* Blog Social */}
            <ul className="team-social">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fas fa-globe" /></a></li>
            </ul>
          </div>
          <div className="team-caption">
            <h3><a href="instructor.html">Brendon Tailor</a></h3>
            <p>Volunteer leader</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-team mb-30">
          <div className="team-img">
            <img src="/team4.png" alt />
            {/* Blog Social */}
            <ul className="team-social">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fas fa-globe" /></a></li>
            </ul>
          </div>
          <div className="team-caption">
            <h3><a href="instructor.html">Walshr Hasgt</a></h3>
            <p>Volunteer leader</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Team Ara End */}

      
    </>
  )
}

export default Team
