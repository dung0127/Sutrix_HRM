import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
            <span className="title">SUTRIX HRM</span>
            <div className="fa fa-bars my-icon" aria-hidden="true" /> 
            <div className="line">
              <hr width="100%" align="center" />
            </div>
          </header>
        );
    }
}

export default Header;