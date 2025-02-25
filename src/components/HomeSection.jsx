

function HomeSection(){
    return(
        <>
            <div className="container">
                <div className="row bg-warning p-4 mt-5" style={{height:'20vh'}}>
                    <div className="col-md-12">
                        <div className="row mt-3 mb-5 justify-content-center">
                            <div className="col-md-8">
                                <div>
                                    <h1 className="fw-bolder">Safety and Service, Always our Priority</h1>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div>
                                    <a className="btn btn-dark rounded-4 fw-bold mt-2" href="">GET A FREE QUOTE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div style={{height:'100px'}}></div>
                    <div className="col-md-5">
                        <h1 className="fw-bolder display-4">Satisfaction <br /> Guaranteed</h1>
                        <p className="lead mt-3">We treat every project with the respect it deserves, <br /> and don't stop until you are satisfied.</p>
                        <a href="" className="btn btn-warning rounded-4 fw-bold mt-3">VIEW ALL SERVICES</a>
                    </div>
                    <div className="col-md-5">
                        <div>
                            <p className="h3 fw-semibold mb-3 text-dark"><span className="text-warning">●</span> All our technicians are trained and certified</p>
                            <p className="h3 fw-semibold mb-3 text-dark"><span className="text-warning">●</span> Satisfaction guaranteed on every project</p>
                            <p className="h3 fw-semibold mb-3 text-dark"><span className="text-warning">●</span> Three generations and 40+ years experience</p>
                            <p className="h3 fw-semibold mb-3 text-dark"><span className="text-warning">●</span> Residential and commercial services</p>
                        </div>
                    </div>
                    <div style={{height:'100px'}}></div>
                </div>
            </div>
        </>
    );
}

export default HomeSection;