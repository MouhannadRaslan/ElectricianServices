import Team1 from '../assets/img/team-1.jpg';
import Team2 from '../assets/img/team-2.jpg';
import Team3 from '../assets/img/team-3.jpg';
import Team4 from '../assets/img/team-4.jpg';
import Team5 from '../assets/img/team-5.jpg';
import Team6 from '../assets/img/team-6.jpg';


function HomeTestimonials() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <div>
              <h1 className="fw-bolder text-center display-5 mb-4">
                Testimonials
              </h1>
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
            <div className="col-md-5">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <img src={Team1} alt="" className="img-fluid rounded-circle w-75" style={{height:'130px'}} />
                    </div>
                    <div className="col-md-8">
                            <div className='pt-3'>
                                <p className='lead'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                                <h3 className='fw-normal text-uppercase h4'>stella larson</h3>
                            </div>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <img src={Team2} alt="" className="img-fluid rounded-circle w-75" style={{height:'130px'}} />
                    </div>
                    <div className="col-md-8">
                            <div className='pt-3'>
                                <p className='lead'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                                <h3 className='fw-normal text-uppercase h4'>stella larson</h3>
                            </div>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <img src={Team3} alt="" className="img-fluid rounded-circle w-75" style={{height:'130px'}} />
                    </div>
                    <div className="col-md-8">
                            <div className='pt-3'>
                                <p className='lead'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                                <h3 className='fw-normal text-uppercase h4'>stella larson</h3>
                            </div>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <img src={Team4} alt="" className="img-fluid rounded-circle w-75" style={{height:'130px'}} />
                    </div>
                    <div className="col-md-8">
                            <div className='pt-3'>
                                <p className='lead'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                                <h3 className='fw-normal text-uppercase h4'>stella larson</h3>
                            </div>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <img src={Team5} alt="" className="img-fluid rounded-circle w-75" style={{height:'130px'}} />
                    </div>
                    <div className="col-md-8">
                            <div className='pt-3'>
                                <p className='lead'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                                <h3 className='fw-normal text-uppercase h4'>stella larson</h3>
                            </div>
                    </div>
                </div>
            </div>
            <div className="col-md-5">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <img src={Team6} alt="" className="img-fluid rounded-circle w-75" style={{height:'130px'}} />
                    </div>
                    <div className="col-md-8">
                            <div className='pt-3'>
                                <p className='lead'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                                <h3 className='fw-normal text-uppercase h4'>stella larson</h3>
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

export default HomeTestimonials;
