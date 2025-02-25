

function HomeBoxes(){
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="box box1 mt-4 ">
                            <div className="row justify-content-center pt-5">
                                <div className="col-md-10">
                                <div className="text-center bg-warning p-5 mt-5">
                                <h1>Recent Projects</h1>
                                <p className="h5">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ​Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="box box2 mt-4"></div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="box box3 mt-4"></div>
                    </div>
                    <div className="col-md-5">
                        <div className="box box4 mt-4"></div>
                    </div>
                </div>
                <div style={{height:'75px'}}></div>
            </div>
        </>
    );
}

export default HomeBoxes;