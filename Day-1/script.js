function Login() {
    return (
        <div className="card m-2 p-1">
            <div className="card-header text-center">
                <h1> <span className="bi bi-person-fill"></span>User Login</h1>
            </div>
            <div className="card-body">
                <label className="form-label m-2">UserName: </label>
                <input className="form-control" type="text" placeholder="Enter Your Name"></input>
                <label className="form-label m-2">Password :</label>
                <input className="form-control" type="password" placeholder="Enter Your Passwprd"></input>

            </div>
            <div className="card-footer">
                <button className="btn w-100 btn-dark m-2 p-1">Login</button>
            </div>

        </div>
    )
}
ReactDOM.render(<Login />, document.getElementById("root"))