
function NetflixHeader() {
    return (
        <div className="d-flex m-3 ms-5 ps-5 justify-content-between align-items-center">
            <div className="title fw-bold">NETFLIX</div>
            <div className="me-5">
                <div className="input-group">
                    <span className="bi bi-translate input-group-text"></span>
                    <select className="form-control">
                        <option>English</option>
                        <option>हिंदी</option>
                    </select>
                    <span className="bi bi-caret-down-fill input-group-text"></span>

                    <button className="btn btn-danger mx-1">Signin</button>
                </div>
            </div>

        </div>
    )
}

function Netflixlogin() {
    return (
        <div className="text-center">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="d-flex justify-content-center align-items-center">
                <input className="form-control w-50 p-3" placeholder="Email Address"></input>
                <button className="btn fw-bold ms-1 p-3"> Get Started <span className="bi bi-chevron-right"></span></button>
            </div>
        </div>

    )
}

function NetflixMain() {
    return (
        <main className="d-lg-flex justify-content-center align-items-center">
            <div className="data">
                <h1>Unlimited movies, TV shows and more</h1>
                <h4>Watch anywhere. Cancel anytime.</h4>
                <Netflixlogin />
            </div>
        </main>
    )
}




function NetflixIndex() {
    return (
        <div className="shade">
            <NetflixHeader />
            <NetflixMain />
        </div>
    )
}
ReactDOM.render(<NetflixIndex />, document.getElementById("root"))