import React, { Component } from 'react'

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SMEName: "",
            email: "",
            password: "",
            postcode: "",
            industry: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { SMEName, Postcode, email, industry } = this.state;
        console.log(SMEName, Postcode, email, industry)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="mb-3">
                    <label>SME Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="SME Name"
                        onChange={(e) => this.setState({ SMEName: e.target.value })}
                    />
                </div>


                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(e) => this.setState({ password: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label>Postcode</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Postcode"
                        onChange={(e) => this.setState({ Postcode: e.target.value })} />
                </div>

                <div className="mb-3">
                    <label>Industry</label>
                    <input
                        type="industry"
                        className="form-control"
                        placeholder="Enter industry"
                        onChange={(e) => this.setState({ industry: e.target.value })}
                    />
                </div>


                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        )
    }
}