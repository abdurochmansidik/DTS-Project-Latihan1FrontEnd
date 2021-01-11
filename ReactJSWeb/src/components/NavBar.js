import React from 'react';
class NavBar extends React.Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-dark justify-content-between fixed-top" style={{ backgroundColor: '#5E5E5E'}}>
                    <a className="navbar-brand" href="">
                        <img src="./harvard1.png" width="30" height="30" alt=""/>
                    </a>
                    <a className="text-light" href="" style={{textDecorationStyle: 'none'}}>
                        LOGIN
                        <img src="./user.png" width="30" height="30" alt="" />
                    </a>
                </nav>
            </div>
        );
    }
}

export default NavBar;