import ContactImg from "../assets/img/contact-img.jpg";

function OurContact() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mb-5 g-5">
          <div className="col-md-5">
            <div>
              <h5 className="fw-normal text-uppercase">Our Contact</h5>
              <h1 className="fw-bolder display-5 mt-3 mb-5">
                Feel Free To Ask Me Anything
              </h1>
            </div>
            <div className="row">
              <div className="col-md-12">
                <form action="">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="form-control rounded-0 bg-light mt-2 border-0 p-3"
                  />
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    placeholder="Enter A Valid Email Address"
                    className="form-control rounded-0 bg-light mt-2 border-0 p-3"
                  />
                  <label htmlFor="">Message</label>
                  <textarea
                    name=""
                    placeholder="Enter Your Message"
                    rows={5}
                    className="form-control rounded-0 bg-light mt-2 border-0 p-3"
                    id=""
                  ></textarea>
                  <a
                    href=""
                    className="btn btn-warning fw-bold w-100 mt-4 rounded-5 p-2"
                  >
                    SUBMIT
                  </a>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={ContactImg}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{ height: "150px" }}
                />
              </div>
              <div className="col-md-12">
                <h5 className="fw-normal text-uppercase mt-4">
                  Join Our Movement
                </h5>
                <p className="lead">
                  Every pleasure is to welcome pain avoided owing to the duty
                  the obligations of business It will frequently occur that
                  pleasures have
                </p>
                <p className="lead">
                  How is all this mistaken idea of denouncing pleasure and
                  praising pain born & we will give you a complete account of
                  the system and expound on the actual teaching of the great
                  explorer.
                </p>
              </div>
              <div className="col-md-12">
                <div className="bg-light p-4 border-start border-5 border-warning">
                    <p className="lead fst-italic">Every pleasure is to welcome pain avoided owing to the duty the obligations of business It will frequently</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{height:'100px'}}></div>
      </div>
    </>
  );
}

export default OurContact;
