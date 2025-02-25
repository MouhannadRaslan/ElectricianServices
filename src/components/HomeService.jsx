import Logo1 from "../assets/img/logo-1.png";
import Logo2 from "../assets/img/logo-2.png";
import Logo3 from "../assets/img/logo-3.png";
import Logo4 from "../assets/img/logo-4.png";
import Logo5 from "../assets/img/logo-5.png";
import Logo6 from "../assets/img/logo-6.png";

function HomeService() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div>
              <h1 className="fw-bolder text-center display-5 mb-4">
                Our Services
              </h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="bg-warning p-4">
              <div className="row justify-content-center">
                <div className="col-md-3">
                  <img src={Logo1} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h3 className="fw-normal text-center mt-4">Lighting</h3>
                  <p className="text-center lead mt-4">
                    Any time you are dealing with electricity, you need a
                    certified expert. Anything less simply isn't safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-4">
              <div className="row justify-content-center">
                <div className="col-md-3">
                  <img src={Logo2} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h3 className="fw-normal text-center mt-4">Wiring</h3>
                  <p className="text-center lead mt-4">
                    Any time you are dealing with electricity, you need a
                    certified expert. Anything less simply isn't safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-warning p-4">
              <div className="row justify-content-center">
                <div className="col-md-3">
                  <img src={Logo3} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h3 className="fw-normal text-center mt-4">Repair</h3>
                  <p className="text-center lead mt-4">
                    Any time you are dealing with electricity, you need a
                    certified expert. Anything less simply isn't safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-md-3">
            <div className="p-4">
              <div className="row justify-content-center">
                <div className="col-md-3">
                  <img src={Logo4} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h3 className="fw-normal text-center mt-4">Installation</h3>
                  <p className="text-center lead mt-4">
                    Any time you are dealing with electricity, you need a
                    certified expert. Anything less simply isn't safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-warning p-4">
              <div className="row justify-content-center">
                <div className="col-md-3">
                  <img src={Logo5} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h3 className="fw-normal text-center mt-4">Heating</h3>
                  <p className="text-center lead mt-4">
                    Any time you are dealing with electricity, you need a
                    certified expert. Anything less simply isn't safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-4">
              <div className="row justify-content-center">
                <div className="col-md-3">
                  <img src={Logo6} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h3 className="fw-normal text-center mt-4">Security</h3>
                  <p className="text-center lead mt-4">
                    Any time you are dealing with electricity, you need a
                    certified expert. Anything less simply isn't safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeService;
