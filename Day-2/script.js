
function NetflixHeader() {
    return (
        <div className="d-flex m-3 ms-5 ps-5 justify-content-between align-items-center">
            <div className="title">NETFLIX</div>
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








function NetflixIndex() {
    return (
        <div className="shade">
            <NetflixHeader />
        </div>
    )
}
ReactDOM.render(<NetflixIndex />, document.getElementById("root"))