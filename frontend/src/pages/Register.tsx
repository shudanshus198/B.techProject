import React from "react";
import { Form, Input } from "semantic-ui-react";
import "../assets/scss/pages/login.scss";
import { withRouter } from "react-router-dom";
import AuthBackendApiService from "../services/authBackendApi.service";
import { Layout } from "./Layout";

interface IState {
    [key: string]: any; // or the type of your input
    email: string,
    password: string,
    name: string
}

class Register extends React.Component<any,IState>{
    state = {
      email: "",
      password: "",
      name: ""
    }

    changeHandler = (e: any): void => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    continue=async ()=>{
      const res = await AuthBackendApiService.register(this.state);
      console.log(res);
      this.props.history.push("/");
    }

    render() {
      return(
        <Layout>
          <div className='signin-main-container'>
            <div className='signin-content-container'>
              <div className='signin-header'>
                <span>Welcome to Market Buzz</span>
              </div>
              <Form>
                <div className='signin-email-container'>
                  <div className='signin-email-header'><span>Email Address</span></div>
                  <Input onChange={this.changeHandler}
                    type='email'
                    name='email'
                    placeholder='johndoe@gmail.com'
                    icon='user'
                    iconPosition='left'
                    style={{ width: "100%" }}/>
                </div>
                <div className='signin-email-container'>
                  <div className='signin-email-header'><span>Name</span></div>
                  <Input onChange={this.changeHandler}
                    type='text'
                    name='name'
                    placeholder='John Doe'
                    icon='user'
                    iconPosition='left'
                    style={{ width: "100%" }}/>
                </div>
                <div className='signin-password-container'>
                  <div className='signin-password-header'>
                    <span className='signin-password-header-primary'>Password</span>
                  </div>
                  <Input onChange={this.changeHandler}
                    icon='lock'
                    iconPosition='left'
                    type='password'
                    name='password'
                    placeholder='**********'
                    style={{ width: "100%" }}/>
                </div>
              </Form>
              <div onClick={this.continue} className='signin-button'>
                <span>Register</span>
              </div>
            </div>
          </div>
        </Layout>
      );
    }
}

export default withRouter(Register);
