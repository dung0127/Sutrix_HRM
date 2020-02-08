import React from 'react';
import Header from './header';

class Login extends React.Component {
    
    render() {
        
        return (
            <div>
                <h1>{this.props.customProps}</h1>
                <Header></Header>
                <article>
                
                <div className="content">
                    <form>
                    Username:
                    <input type="text" name="firstname" />
                    Password:
                    <input type="text" name="lastname" />
                    <button>Login</button>
                    </form>
                </div>
            </article>
            </div>
            
        );
    }
}

export default Login;