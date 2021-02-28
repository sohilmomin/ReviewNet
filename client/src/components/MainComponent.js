import React, { Component } from 'react'
import { Route, BrowserRouter, Switch, Redirect, withRouter } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import queryString from 'query-string';
import { connect } from 'react-redux'
//compoenents
import Index from './IndexComponent'
import Header from './HeaderComponent'
import SideBar from './SidebarComponent'
import Footer from './FooterComponent'
import Login from './LoginComponent'
import Signup from './SignupComponent'
import CompanyLogin from './CompanyLoginComponent'
import CompanySignup from './CompanySignupComponent'
import Home from './HomeComponent'
import UserProfile from './UserProfileComponent'
import Products from './ProductsComponent'
import AboutUs from './AboutUsComponent'
import ContactUs from './ContactUsComponent'
import CatogeryProducts from './CatogeryProductComponent'
import SubCatogeryProducts from './SubCatogeryProductComponent'
import MyProducts from './MyProductsComponent'
import ProductForm from './ProductFormComponent'
import Reviews from './ReviewsComponent'

import { fetchProducts, fetchReviews, fetchUser, fetchCompany, postReview, postProduct, editProduct, postLike, postDislike, deleteReview, editReview, signUp, signIn, logout, companySignIn, companySignUp, logoutCompany } from '../redux/ActionCreaters'

const mapStateToProps = state => {
    return {
        products: state.products,
        reviews: state.reviews,
        user: state.user,
        company: state.company
    }
}

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => { dispatch(fetchProducts()) },
    fetchReviews: () => { dispatch(fetchReviews()) },
    fetchUser: () => { dispatch(fetchUser()) },
    fetchCompany: () => { dispatch(fetchCompany()) },
    postReview: (rating, tags, review, product) => { dispatch(postReview(rating, tags, review, product)) },
    postProduct: (productName, price, catogery, subCatogery, description, featured, pic) => { dispatch(postProduct(productName, price, catogery, subCatogery, description, featured, pic)) },
    editProduct: (productId, productName, price, catogery, subCatogery, description, featured, pic) => { dispatch(editProduct(productId, productName, price, catogery, subCatogery, description, featured, pic)) },
    postLike: (reviewId) => { dispatch(postLike(reviewId)) },
    postDislike: (reviewId) => { dispatch(postDislike(reviewId)) },
    editReview: (reviewId, rating, tags, review, product) => { dispatch(editReview(reviewId, rating, tags, review, product)) },
    deleteReview: (reviewId) => { dispatch(deleteReview(reviewId)) },
    signUp: (name, email, password, fullname) => { dispatch(signUp(name, email, password, fullname)) },
    signIn: (email, password) => { dispatch(signIn(email, password)) },
    logout: () => { dispatch(logout()) },
    companySignUp: (name, email, password, fullname) => { dispatch(companySignUp(name, email, password, fullname)) },
    companySignIn: (email, password) => { dispatch(companySignIn(email, password)) },
    logoutCompany: () => { dispatch(logoutCompany()) }
})

class Main extends Component {
    componentDidMount() {
        this.props.fetchReviews()
        this.props.fetchProducts()
        this.props.fetchUser()
        this.props.fetchCompany()
    }
    render() {
        return (
            <>
                <ToastContainer autoClose={4000} />
                <Header logout={this.props.logout} user={this.props.user} company={this.props.company} logoutCompany={this.props.logoutCompany} history={this.props.history} />
                <Switch>
                    <Route exact path='/notavaliable'>
                        <div className='container'>
                            <div className='row mt-5 mb-5' align='center'>
                                <div className='col-lg-4 col-12 m-auto bg-info pt-5 pb-5 text-white'>
                                    <h1 className='not-avaliable-heading'>Sorry, this feature is currently not avalable. We are working very hard on our next major update where we will include this feature.</h1>
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path='/'>
                        <Index history={this.props.history} />
                    </Route>
                    <Route exact path='/home'>
                        <Home user={this.props.user} company={this.props.company} history={this.props.history} />
                    </Route>
                    <Route exact path='/userprofile'>
                        <UserProfile user={this.props.user} />
                    </Route>
                    <Route path='/signin'>
                        <Login signIn={this.props.signIn} user={this.props.user} history={this.props.history} />
                    </Route>
                    <Route path='/signup'>
                        <Signup signUp={this.props.signUp} />
                    </Route>
                    <Route path='/company/signin'>
                        <CompanyLogin companySignIn={this.props.companySignIn} />
                    </Route>
                    <Route path='/company/signup'>
                        <CompanySignup companySignUp={this.props.companySignUp} />
                    </Route>
                    <Route exact path='/products'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-2 d-lg-block d-none pl-0 pr-0 sidebar-block'>
                                    <SideBar />
                                </div>
                                <div className='col-12 col-md-10 ml-auto'>
                                    <Products products={this.props.products} reviews={this.props.reviews} history={this.props.history} company={this.props.company} postProduct={this.props.postProduct} editProduct={this.props.editProduct} />
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path='/addproduct'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-2 d-lg-block d-none pl-0 pr-0'>
                                    <SideBar />
                                </div>
                                <div className='col-md-10 col-12 ml-auto'>
                                    <ProductForm history={this.props.history} company={this.props.company} postProduct={this.props.postProduct} editProduct={this.props.editProduct} />
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path='/editproduct/:productId'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-2 d-lg-block d-none pl-0 pr-0'>
                                    <SideBar />
                                </div>
                                <div className='col-md-10 col-12 ml-auto'>
                                    <ProductForm product={(this.props.products.products.filter(product => product._id === (window.location.pathname.split('/')[2]))[0])} history={this.props.history} company={this.props.company} postProduct={this.props.postProduct} editProduct={this.props.editProduct} />
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path='/products/myproducts'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-2 d-lg-block d-none pl-0 pr-0'>
                                    <SideBar />
                                </div>
                                <div className='col-md-10 col-12 ml-auto'>
                                    <MyProducts products={this.props.products} reviews={this.props.reviews} history={this.props.history} company={this.props.company} postProduct={this.props.postProduct} editProduct={this.props.editProduct} />
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path='/products/catogery/:catogery'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-2 d-lg-block d-none pl-0 pr-0'>
                                    <SideBar />
                                </div>
                                <div className='col-md-10 col-12 ml-auto'>
                                    <CatogeryProducts products={this.props.products} reviews={this.props.reviews} history={this.props.history} />
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path='/products/subcatogery/:subCatogery'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-2 d-lg-block d-none pl-0 pr-0'>
                                    <SideBar />
                                </div>
                                <div className='col-md-10 col-12 ml-auto'>
                                    <SubCatogeryProducts products={this.props.products} reviews={this.props.reviews} history={this.props.history} />
                                </div>
                            </div>
                        </div>
                    </Route>

                    <Route exact path='/reviews'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-2 d-lg-block d-none pl-0 pr-0'>
                                    <SideBar />
                                </div>
                                <div className='col-md-10 col-12 ml-auto'>
                                    <Reviews reviews={this.props.reviews} postReview={this.props.postReview} postLike={this.props.postLike} postDislike={this.props.postDislike} deleteReview={this.props.deleteReview} editReview={this.props.editReview} products={this.props.products} user={this.props.user} />
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path='/aboutus'>
                        <AboutUs />
                    </Route>
                    <Route exact path='/contactus'>
                        <ContactUs />
                    </Route>
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));