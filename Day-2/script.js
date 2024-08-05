
function NetflixHeader() {
    return (
       <div className="d-flex justify-content-between align-items-center">
       <div className="title">NETFLIX</div>

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