import React from 'react';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="float-left h3">Welcome to the Art Museum of Harvard</div>
                </div>
                <div className="input-group md-form form-sm form-2 pl-0 col-4 float-right">
                    <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-text1"><i className="fas fa-search text-grey"
                                aria-hidden="true"></i></span>
                        </div>
                </div>
            </div>
        )
    }
}

export default Dashboard