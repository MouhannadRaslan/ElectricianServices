function ContactInfo() {
  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="bg-light p-3 text-center">
              <h1 className="fw-bolder text-warning display-4 text-center">
                01
              </h1>
              <h4 className="fw-normal mt-3">Call Us</h4>
              <p className="lead mt-3">
                1 (234) 567-891 <br /> 1 (234) 987-654
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-3 text-center">
              <h1 className="fw-bolder text-warning display-4 text-center">
                02
              </h1>
              <h4 className="fw-normal mt-3">Location</h4>
              <p className="lead mt-3">
                121 Rock Sreet, 21 Avenue, <br />
                New York, NY 92103-9000
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bg-light p-3 text-center">
              <h1 className="fw-bolder text-warning display-4 text-center">
                03
              </h1>
              <h4 className="fw-normal mt-3">Our Top Services</h4>
              <p className="lead mt-3">
                Self-Studying <br />
                Online Courses
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{height:'100px'}}></div>
    </>
  );
}

export default ContactInfo;
