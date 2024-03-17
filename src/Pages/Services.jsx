import React from 'react'

const Services = () => {
  return (
    <>
     {/*? Services Area Start */}
     <main>
<div className="service-area section-padding30">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10">
        {/* Section Tittle */}
        <div className="section-tittle text-center mb-80">
          <span>What we are doing</span>
          <h2>We Are In A Mission To Help Disable People</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="single-cat text-center mb-50">
          <div className="cat-icon">
            <span className="flaticon-null-1" />
          </div>
          <div className="cat-cap">
            <h5><a href="services.html">Training</a></h5>
            <p>We provide comprehensive skill development programs tailored to meet the unique needs of individuals with disabilities, helping them unlock their full potential</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="single-cat active text-center mb-50">
          <div className="cat-icon">
            <span className="flaticon-think" />
          </div>
          <div className="cat-cap">
            <h5><a href="services.html">Age care</a></h5>
            <p>Our support services encompass a range of assistance including personal care, emotional support, and accessibility solutions,  and independence.</p>

          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="single-cat text-center mb-50">
          <div className="cat-icon">
            <span className="flaticon-gear" />
          </div>
          <div className="cat-cap">
            <h5><a href="services.html">Services</a></h5>
            <p>We actively engage with communities to promote inclusivity and accessibility, fostering a society where everyone, regardless of ability, is embraced .</p>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
{/* Services Area End */}

    </>
  )
}

export default Services
