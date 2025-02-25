function AboutCounter() {
  return (
    <>
      <div className="container-fluid counter">
        <div className="row justify-content-around p-5">
          <div className="col-md-2">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <i class="fa-solid fa-mobile-screen-button fa-2xl p-3 pt-4 pb-4 bg-warning rounded-circle"></i>
                  <h3 className="fw-bolder text-light display-4 mt-4">1.2m</h3>
                  <p className="h4 fw-normal text-light mt-4">Hours of Work</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <i class="fa-solid fa-user-group fa-2xl p-3 pt-4 pb-4 bg-warning rounded-circle"></i>
                  <h3 className="fw-bolder text-light display-4 mt-4">3k</h3>
                  <p className="h4 fw-normal text-light mt-4">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <i class="fa-solid fa-pen-to-square fa-2xl p-3 pt-4 pb-4 bg-warning rounded-circle"></i>
                  <h3 className="fw-bolder text-light display-4 mt-4">230</h3>
                  <p className="h4 fw-normal text-light mt-4">Completed Projects</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <i class="fa-solid fa-award fa-2xl p-3 pt-4 pb-4 bg-warning rounded-circle"></i>
                  <h3 className="fw-bolder text-light display-4 mt-4">54</h3>
                  <p className="h4 fw-normal text-light mt-4">Awards Won</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div style={{height:'75px'}}></div>
    </>
  );
}

export default AboutCounter;
