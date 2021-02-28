import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Card, CardImg, CardTitle, CardSubtitle, CardText, Button, CardBody, BreadcrumbItem, Breadcrumb, Row, Label, FormGroup, Col, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Loading } from './LoadingComponent'
import { LocalForm, Control, Errors } from 'react-redux-form'
import moment from 'moment';
import ReactQuill, { Quill } from 'react-quill'
import { ImageResize } from 'quill-image-resize-module';
import { ImageDrop } from 'quill-image-drop-module'
import Parser from 'html-react-parser'
import ReactTooltip from 'react-tooltip';
import 'react-quill/dist/quill.snow.css';
import Editor from './EditorComponent'
import ProductForm from './ProductFormComponent'
Quill.register('modules/imageResize', ImageResize);

const minLength = (len) => (value) => value && value.length >= len
const maxLength = (len) => (value) => !value || value.length <= len
const required = (value) => value && value.length



// class ProductForm extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isModalOpen: false,
//             productName: this.props.product ? this.props.product.productName : '',
//             price: this.props.product ? this.props.product.price : 0,
//             catogeryList: [],
//             inputCatogeryList: this.props.product ? this.props.product.catogery : [],
//             subcatogeryList: [],
//             inputSubCatogeryList: this.props.product ? this.props.product.subCatogery : [],
//             featured: this.props.product ? this.props.product.featured : false,
//             description: this.props.product ? this.props.product.description : ""
//         }
//         this.toggleModal = this.toggleModal.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
//         this.handlePriceChange = this.handlePriceChange.bind(this)
//         this.handleProductNameChange = this.handleProductNameChange.bind(this)
//         this.handleCatogeryChange = this.handleCatogeryChange.bind(this)
//         this.handleCatogerySelect = this.handleCatogerySelect.bind(this)
//         this.handleSubCatogeryChange = this.handleSubCatogeryChange.bind(this)
//         this.handleSubCatogerySelect = this.handleSubCatogerySelect.bind(this)
//         this.handleFeatureChange = this.handleFeatureChange.bind(this)
//     }
//     handleSubmit(value) {
//         this.toggleModal()
//         console.log(this.state.productName, this.state.price, this.state.inputCatogeryList, this.state.inputSubCatogeryList, this.state.description, this.state.featured)
//         console.log(this.state.description)
//         this.props.product
//             ?
//             this.props.editProduct(this.props.product._id, this.state.productName, this.state.price, this.state.inputCatogeryList, this.state.inputSubCatogeryList, this.state.description, this.state.featured)
//             :
//             this.props.postProduct(this.state.productName, this.state.price, this.state.inputCatogeryList, this.state.inputSubCatogeryList, this.state.description, this.state.featured)
//     }
//     toggleModal() {
//         this.setState({
//             isModalOpen: !(this.state.isModalOpen)
//         })
//     }
//     handleCatogeryChange(value) {
//         const catogeries = ['Electronics', 'Home-Appliances', 'Grocery', 'Books', 'Entertainment', 'Other']
//         if (value === '') {
//             this.setState({
//                 catogeryList: []
//             })
//         }
//         else {
//             const matches = catogeries.filter(catogery => catogery.toLowerCase().includes(value.toLowerCase()))
//             this.setState({
//                 catogeryList: matches
//             })
//         }

//     }
//     handleCatogerySelect(value) {
//         let catogerylist = new Set(this.state.inputCatogeryList)
//         catogerylist.add(value)
//         this.setState({
//             inputCatogeryList: Array.from(catogerylist)
//         })
//     }
//     handleProductNameChange(value) {
//         this.setState({
//             productName: value
//         })
//     }
//     handlePriceChange(value) {
//         this.setState({
//             price: value
//         })
//     }
//     handleSubCatogeryChange(value) {
//         const subcatogeries = ['Electronics', 'Home-Appliances', 'Grocery', 'Books', 'Entertainment', 'Other']
//         if (value === '') {
//             this.setState({
//                 subcatogeryList: []
//             })
//         }
//         else {
//             const matches = subcatogeries.filter(subcatogery => subcatogery.toLowerCase().includes(value.toLowerCase()))
//             this.setState({
//                 subcatogeryList: matches
//             })
//         }

//     }
//     handleSubCatogerySelect(value) {
//         let subcatogerylist = new Set(this.state.inputSubCatogeryList)
//         subcatogerylist.add(value)
//         this.setState({
//             inputSubCatogeryList: Array.from(subcatogerylist)
//         })
//     }
//     handleDescriptionChange(value) {
//         this.setState({
//             description: value
//         })
//         console.log(value)
//         console.log('changed')
//     }
//     handleFeatureChange(value) {
//         this.setState({
//             featured: !(this.state.featured)
//         })
//     }

//     render() {
//         const modules = {
//             toolbar: [
//                 [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
//                 [{ size: [] }],
//                 ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//                 [{ 'list': 'ordered' }, { 'list': 'bullet' },
//                 { 'indent': '-1' }, { 'indent': '+1' }],
//                 ['link', 'image', 'video'],
//                 ['clean']
//             ],
//             imageResize: {
//                 displaySize: true,
//                 resize: true
//             },
//             clipboard: {
//                 // toggle to add extra line breaks when pasting HTML:
//                 matchVisual: false,
//             }
//         }
//         const formats = [
//             'header', 'font', 'size',
//             'bold', 'italic', 'underline', 'strike', 'blockquote',
//             'list', 'bullet', 'indent',
//             'link', 'image', 'video'
//         ]
//         const catogerylist = this.state.catogeryList.map(tag => {
//             return (
//                 <span className='review-tag clickable col-auto' onClick={(e) => this.handleCatogerySelect(e.target.innerText)}>{tag}</span>
//             )
//         })
//         const selectedCatogeryList = this.state.inputCatogeryList.map(catogery => {
//             return (
//                 <span className='mt-2'>
//                     <span className='selected-tag col-auto'>{catogery}</span><span className='cancle-tag clickable'> X </span>
//                 </span>
//             )
//         })
//         const subcatogerylist = this.state.subcatogeryList.map(tag => {
//             return (
//                 <span className='review-tag clickable col-auto' onClick={(e) => this.handleSubCatogerySelect(e.target.innerText)}>{tag}</span>
//             )
//         })
//         const selectedSubCatogeryList = this.state.inputSubCatogeryList.map(subcatogery => {
//             return (
//                 <span className='mt-2'>
//                     <span className='selected-tag col-auto'>{subcatogery}</span><span className='cancle-tag clickable'> X </span>
//                 </span>
//             )
//         })
//         return (
//             <div>
//                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//                     <ModalHeader toggle={this.toggleModal}>
//                         {this.props.product ? <h4>Edit your product here</h4> : <h4>Post your Product Here</h4>}
//                     </ModalHeader>
//                     <ModalBody>
//                         <LocalForm onSubmit={this.handleSubmit} row>
//                             <Row className='form-group'>
//                                 <Label md={12} htmlFor='.productname'>Product name</Label>
//                                 <Col md={12}>
//                                     <Control.text model='.productname'
//                                         id='productname'
//                                         className='form-control'
//                                         placeholder='Iphone 12 pro max Gray'

//                                         onChange={(e) => { this.handleProductNameChange(e.target.value) }}
//                                         validators={{ required, minLength: minLength(3), maxLength: maxLength(50) }}
//                                     />
//                                     <Errors
//                                         className='form-error'
//                                         model='.productname'
//                                         show='touched'
//                                         messages={{
//                                             required: 'Required',
//                                             minLength: 'Must be at least 3 character long ',
//                                             maxLength: 'Must be at most 50 character long '
//                                         }}
//                                     />
//                                 </Col>
//                             </Row>
//                             <Row className='form-group'>
//                                 <Label md={12} htmlFor='.price'>Price</Label>
//                                 <Col md={12}>
//                                     <Control.text model='.price'
//                                         id='price'
//                                         className='form-control'
//                                         placeholder='799'
//                                         onChange={(e) => { this.handlePriceChange(e.target.value) }}
//                                         validators={{ required, minLength: minLength(1), maxLength: maxLength(50) }}
//                                     />
//                                     <Errors
//                                         className='form-error'
//                                         model='.price'
//                                         show='touched'
//                                         messages={{
//                                             required: 'Required',
//                                             minLength: 'Must be at least 1 character long ',
//                                             maxLength: 'Must be at most 50 character long '
//                                         }}
//                                     />
//                                 </Col>
//                             </Row>
//                             <Row>
//                                 {catogerylist.length !== 0 &&
//                                     <div className='col-12'>
//                                         <h6>Suggested Catogeries</h6>
//                                         <div className='row review-tags'>
//                                             {catogerylist}
//                                         </div>
//                                     </div>
//                                 }
//                             </Row>
//                             <Row>
//                                 {this.state.inputCatogeryList.length !== 0 &&
//                                     <div className='col-12'>
//                                         <h6>Selected Catogery</h6>
//                                         <div className='row selected-tags'>
//                                             {selectedCatogeryList}
//                                         </div>
//                                     </div>
//                                 }
//                             </Row>
//                             <Row className='form-group'>
//                                 <Label md={12} htmlFor='.catogeries'>Catogery</Label>
//                                 <Col md={12}>
//                                     <Control.textarea model='.catogeries'
//                                         id='catogeries'
//                                         className='form-control'
//                                         placeholder='Search relevant catogeries here'
//                                         rows='1'
//                                         onChange={(e) => { this.handleCatogeryChange(e.target.value) }} />
//                                 </Col>
//                             </Row>
//                             <Row>
//                                 {subcatogerylist.length !== 0 &&
//                                     <div className='col-12'>
//                                         <h6>Suggested Sub-Catogeries</h6>
//                                         <div className='row review-tags'>
//                                             {subcatogerylist}
//                                         </div>
//                                     </div>
//                                 }
//                             </Row>
//                             <Row>
//                                 {this.state.inputSubCatogeryList.length !== 0 &&
//                                     <div className='col-12'>
//                                         <h6>Selected Sub-Catogery</h6>
//                                         <div className='row selected-tags'>
//                                             {selectedSubCatogeryList}
//                                         </div>
//                                     </div>
//                                 }
//                             </Row>
//                             <Row className='form-group'>
//                                 <Label md={12} htmlFor='.subcatogeries'>Sub-Catogery</Label>
//                                 <Col md={12}>
//                                     <Control.textarea model='.subcatogeries'
//                                         id='subcatogeries'
//                                         className='form-control'
//                                         placeholder='Search relevant Sub-catogeries here'
//                                         rows='1'
//                                         onChange={(e) => { this.handleSubCatogeryChange(e.target.value) }} />
//                                 </Col>
//                             </Row>
//                             <Row className='form-group'>
//                                 <Label md={12} htmlFor='.description'>Description</Label>
//                                 <Col md={12}>
//                                     <ReactQuill
//                                         theme='snow'
//                                         onChange={this.handleDescriptionChange}
//                                         modules={modules}
//                                         formats={formats}
//                                     />
//                                 </Col>
//                             </Row>
//                             <Row className='form-group'>
//                                 <Col md={12} className='feature-form'>
//                                     <div className='row'>
//                                         <div className='col-6 col-md-5 pr-0 ml-auto mr-auto'>
//                                             <span className='feature-question m-auto'>Wants to feature ? </span>
//                                         </div>
//                                         <div className='col-6 pl-0 ml-auto mr-auto'>
//                                             <Label className="switch">
//                                                 <input type="checkbox" onChange={this.handleFeatureChange} />
//                                                 <span className="slider round"></span>
//                                             </Label>
//                                         </div>
//                                     </div>
//                                 </Col>
//                             </Row>
//                             <FormGroup row>
//                                 <Col md={{ size: 12 }} className='text-center'>
//                                     <Button type='submit' color="primary">Submit</Button>
//                                 </Col>
//                             </FormGroup>

//                         </LocalForm>
//                     </ModalBody>
//                 </Modal>
//                 {this.props.product ? <span className='fa fa-edit fa-lg edit-product' data-tip='Edit product Details' data-for='editproduct' onClick={this.toggleModal}></span> : <Button className='btn submit-review' onClick={this.toggleModal} ><span className='fa fa-plus '></span> Add product</Button>}
//                 <ReactTooltip id="editproduct" type="warning" effect='float'>
//                 </ReactTooltip>

//             </div>
//         )
//     }
// }
class Product extends Component {
    constructor(props) {
        super(props)
        this.routeChange = this.routeChange.bind(this)
    }
    routeChange(productId) {
        let path = '/reviews?product=' + productId;
        this.props.history.push(path);
    }
    render() {
        const product = this.props.product
        const productPic = product.pic || "https://res.cloudinary.com/sohil/image/upload/v1599586001/zwjupmysyf20v3yfpfus.jpg"
        return (
            <Card className='col-lg-3 col-md-4 col-sm-6 col-12 m-md-0 pl-0 pr-0 m-auto'>
                <div className='image'>
                    {Object.keys(this.props.company.company).length !== 0 && this.props.company.company.company._id === product.company._id &&
                        <span onClick={() => { this.props.history.push('/editproduct/' + product._id) }} className='edit-product fa fa-pencil'></span>
                    }
                    <img className="img img-responsive thumb product-image" src={productPic} alt="Card image " />
                </div>
                <CardBody >
                    <h2 className='product-card-title' data-tip={product.productName} data-for="producttitle">{product.productName}
                    </h2>
                    <ReactTooltip effect="float" id="producttitle" type="warning" />
                    <span>
                        {
                            isNaN(product.averageReview)
                                ? <span className='product-review'></span>
                                : <span className='product-review review-rating'>{product.averageReview}<span className='fa fa-star small-star'></span></span>
                        }
                        <span className='no-of-reviews'> {this.props.noOfreviews} {this.props.noOfreviews > 1 ? <span className='no-of-reviews'> Reviews</span> : <span>Review</span>} </span>
                    </span>
                    <div className='row' >
                        <div className='col-md-6 col-12 text-muted company-name pb-1'>
                            {product.company.fullname}
                        </div>
                        <div className='col-md-6 col-12'>
                            {product.price} Rs.
                            </div>
                    </div>
                    <div className='review-tags'>
                        <p className='product-subcatogery review-tag'>{product.subCatogery[0]}</p>
                    </div>
                    <Button className='explore-review-button' onClick={() => this.routeChange(product._id)}>Explore All Reviews</Button>
                </CardBody>
            </Card>
        )
    }
}
class Products extends Component {
    constructor(props) {
        super(props)
        this.avgReview = this.avgReview.bind(this)
    }
    avgReview(reviews) {
        var reviewSum = 0;
        var totalReviews = 0;
        for (var i = 0; i < reviews.length; i++) {
            reviewSum = reviewSum + reviews[i].rating;
            totalReviews = totalReviews + 1;
        }
        return (reviewSum / totalReviews);
    }
    render() {
        if (this.props.products.isLoading) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <Loading />
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.props.products.errMess) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <p>{this.props.products.errMess}</p>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            console.log('Hi i am in product component')
            const products = this.props.products.products.map((product) => {
                var averageReview = 0
                if (this.props.reviews.reviews.length > 0) {
                    averageReview = this.props.reviews.reviews.filter(review => review.product === product._id)
                    averageReview = this.avgReview(averageReview);
                }
                product.averageReview = averageReview.toFixed(1)
                return (
                    <Product product={product} history={this.props.history} company={this.props.company} editProduct={this.props.editProduct} noOfreviews={this.props.reviews.reviews.filter(review => review.product === product._id).length} />
                )
            })
            return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 p-0 mt-1'>
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Products</BreadcrumbItem>
                            </Breadcrumb>
                        </div>

                        <div className='col-12 p-0'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h1 className='product-heading'>Products</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='row'>
                        {products}
                    </div>
                </div>
            )
        }
    }
}
export default withRouter(Products);