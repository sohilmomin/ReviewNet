import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { BreadcrumbItem, Breadcrumb } from 'reactstrap'
class UserProfile extends Component {
    render() {
        return (
            <div className='container-fluid'>
                {Object.keys(this.props.user.user).length !== 0 ?
                    <div className='row justify-content-center profile-back'>
                        <div className='col-12 p-0 mt-1' align="center">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Profile</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                        <div className='col-md-5 col-12 user-profile-block' align='center'>
                            <h1 className='welcome-heading text-white'>Welcome {this.props.user.user.user.fullname}</h1>
                            <img src={this.props.user.user.user.pic} alt='profile pic' />
                            <div className='row justify-content-center pl-2 pl-md-0 pr-2 pr-md-0' >
                                <div className='col-md-3 col-4 profile-key profile-key-top'>User name</div>
                                <div className='col-md-8 col-8 profile-value profile-value-top'>{this.props.user.user.user.name}</div>
                            </div>
                            <div className='row justify-content-center pl-2 pl-md-0 pr-2 pr-md-0'>
                                <div className='col-md-3 col-4 profile-key'>Full name</div>
                                <div className='col-md-8 col-8 profile-value'>{this.props.user.user.user.fullname}</div>
                            </div>
                            <div className='row justify-content-center pl-2 pl-md-0 pr-2 pr-md-0'>
                                <div className='col-md-3 col-4 profile-key profile-key-bottom'>Email </div>
                                <div className='col-md-8 col-8 profile-value profile-value-bottom'>{this.props.user.user.user.email}</div>
                            </div>

                            <div className='row'>
                                <div className='col-md-6 col-6'><button className='edit-profile'>Edit Profile</button></div>
                                <div className='col-md-6 col-6'><button className='reset-password'>Reset Password</button></div>
                            </div>
                        </div>
                    </div>
                    :
                    <p>You are not logged In</p>
                }
            </div>
        )
    }
}
export default withRouter(UserProfile)