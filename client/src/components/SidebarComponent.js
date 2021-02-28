import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { UncontrolledDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.changeRoute = this.changeRoute.bind(this)
    }
    changeRoute(catogery) {
        const path = '/products?catogery=' + catogery
        this.props.history.push(path);
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Electronics'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-microchip pr-2'></i>Electronics</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem><Link to='/products/subcatogery/Mobiles' className='sub-catogery'><li className=' list-unstyled' >Mobiles</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Computer-Pheripherals' className='sub-catogery'><li className=' list-unstyled' >Computer-Pheripherals</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/MobileAccessory' className='sub-catogery'><li className=' list-unstyled' >Mobile Accessory</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Powerbank' className='sub-catogery'><li className=' list-unstyled' >Powerbank</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Audio' className='sub-catogery'><li className=' list-unstyled' >Audio</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Gaming' className='sub-catogery'><li className=' list-unstyled' >Gaming</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Storage' className='sub-catogery'><li className=' list-unstyled' >Storage</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/LaptopAccessories' className='sub-catogery'><li className=' list-unstyled' >Laptop Accessories</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Camera' className='sub-catogery'><li className=' list-unstyled' >Camera</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Tablets' className='sub-catogery'><li className=' list-unstyled' >Tablets</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/SmartWearables' className='sub-catogery'><li className=' list-unstyled' >Smart Wearables</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/SmartHomeautomation' className='sub-catogery'><li className=' list-unstyled' >Smart Home automation</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/LaptopaAndDesktop' className='sub-catogery'><li className=' list-unstyled' >Laptop and Desktop</li></Link></DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Appliances'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-television pr-2'></i>Appliances</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem><Link to='/products/subcatogery/Televisions' className='sub-catogery'><li className=' list-unstyled' >Televisions</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/WashingMachines' className='sub-catogery'><li className=' list-unstyled' >Washing Machines</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/AirConditioners' className='sub-catogery'><li className=' list-unstyled' >Air Conditioners</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Refrigerators' className='sub-catogery'><li className=' list-unstyled' >Refrigerators</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/HomeApplicances' className='sub-catogery'><li className=' list-unstyled' >Home Applicances</li></Link></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Grocery'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-shopping-basket pr-2'></i>Grocery</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem><Link to='/products/subcatogery/Dairy' className='sub-catogery'><li className=' list-unstyled' >Dairy</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Spices' className='sub-catogery'><li className=' list-unstyled' >Spices</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Beverages' className='sub-catogery'><li className=' list-unstyled' >Beverages</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/SoftDrinks' className='sub-catogery'><li className=' list-unstyled' >Soft Drinks</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Baking' className='sub-catogery'><li className=' list-unstyled' >Baking</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Oils' className='sub-catogery'><li className=' list-unstyled' >Oils</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Snacks' className='sub-catogery'><li className=' list-unstyled' >Snacks</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/FrozenFoods' className='sub-catogery'><li className=' list-unstyled' >Frozen Foods</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Breads' className='sub-catogery'><li className=' list-unstyled' >Breads</li></Link></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Fashion'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-heart pr-2'></i>Fashion</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem><Link to='/products/subcatogery/Men' className='sub-catogery'><li className=' list-unstyled' >Men</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Women' className='sub-catogery'><li className=' list-unstyled' >Women</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Kids' className='sub-catogery'><li className=' list-unstyled' >Kids</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Jeans' className='sub-catogery'><li className=' list-unstyled' >Jeans</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Jacket' className='sub-catogery'><li className=' list-unstyled' >Jacket</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/T-shirt' className='sub-catogery'><li className=' list-unstyled' >T-shirt</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Shirt' className='sub-catogery'><li className=' list-unstyled' >Shirt</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Hoodie' className='sub-catogery'><li className=' list-unstyled' >Hoodie</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/GymClothes' className='sub-catogery'><li className=' list-unstyled' >Gym clothes</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Sunglasses' className='sub-catogery'><li className=' list-unstyled' >Sunglasses</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Shoes' className='sub-catogery'><li className=' list-unstyled' >Shoes</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Purse' className='sub-catogery'><li className=' list-unstyled' >Purse</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Belt' className='sub-catogery'><li className=' list-unstyled' >Belt</li></Link></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Restaurants'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-cutlery pr-2'></i>Restaurants</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem><Link to='/products/subcatogery/Ethnic' className='sub-catogery'><li className=' list-unstyled' >Ethnic</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/FastFood' className='sub-catogery'><li className=' list-unstyled' >Fast Food</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/SnacksBar' className='sub-catogery'><li className=' list-unstyled' >Snacks Bar</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/CasualDining' className='sub-catogery'><li className=' list-unstyled' >Casual dining</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/FamilyStyle' className='sub-catogery'><li className=' list-unstyled' >Family style</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/FineDining' className='sub-catogery'><li className=' list-unstyled' >Fine dining</li></Link></DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/hotel'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-bed pr-2'></i>Hotels</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Movies'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-film pr-2'></i>Movies</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem><Link to='/products/subcatogery/Actions' className='sub-catogery'><li className=' list-unstyled' >Actions</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Comedies' className='sub-catogery'><li className=' list-unstyled' >Comedies</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Romantic' className='sub-catogery'><li className=' list-unstyled' >Romantic</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Adventure' className='sub-catogery'><li className=' list-unstyled' >Adventure</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Musicals' className='sub-catogery'><li className=' list-unstyled' >Musicals</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Drama' className='sub-catogery'><li className=' list-unstyled' >Drama</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Sci-Fi' className='sub-catogery'><li className=' list-unstyled' >Sci-Fi</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Horror' className='sub-catogery'><li className=' list-unstyled' >Horror</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/War' className='sub-catogery'><li className=' list-unstyled' >War</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Biopic' className='sub-catogery'><li className=' list-unstyled' >Biopic</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Animation' className='sub-catogery'><li className=' list-unstyled' >Animation</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Fantasy' className='sub-catogery'><li className=' list-unstyled' >Fantasy</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Thriller' className='sub-catogery'><li className=' list-unstyled' >Thriller</li></Link></DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/music'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-music pr-2'></i>Music</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Books'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-book pr-2'></i>Books</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                                <DropdownItem><Link to='/products/subcatogery/Comedies' className='sub-catogery'><li className=' list-unstyled' >Comedies</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Romantic' className='sub-catogery'><li className=' list-unstyled' >Romantic</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Adventure' className='sub-catogery'><li className=' list-unstyled' >Adventure</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Musicals' className='sub-catogery'><li className=' list-unstyled' >Musicals</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Drama' className='sub-catogery'><li className=' list-unstyled' >Drama</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Sci-Fi' className='sub-catogery'><li className=' list-unstyled' >Sci-Fi</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Horror' className='sub-catogery'><li className=' list-unstyled' >Horror</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Biopic' className='sub-catogery'><li className=' list-unstyled' >Biopic</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Animation' className='sub-catogery'><li className=' list-unstyled' >Animation</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Fantasy' className='sub-catogery'><li className=' list-unstyled' >Fantasy</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Thriller' className='sub-catogery'><li className=' list-unstyled' >Thriller</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Study' className='sub-catogery'><li className=' list-unstyled' >Study</li></Link></DropdownItem>
                                <DropdownItem><Link to='/products/subcatogery/Comic' className='sub-catogery'><li className=' list-unstyled' >Comic</li></Link></DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/Medical'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-heartbeat pr-2'></i>Medical</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/education'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-graduation-cap pr-2'></i>Education</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/mobileapps'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-android pr-2'></i>Mobile Apps</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/travel'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-globe pr-2'></i>Travels</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
                <div className='row sidebar'>
                    <div className='col-10 pl-0 pr-0'>
                        <Link to='/products/catogery/airline'><li className='sidebar-list-item list-unstyled' ><i className='fa fa-plane pr-2'></i>Air line</li></Link>
                    </div>
                    <div className='col-2 p-0'>
                        <UncontrolledDropdown >
                            <DropdownToggle caret className='catogery-dropdown' />
                            <DropdownMenu>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Sidebar)
/*
Blackish: #202020

Dark Grey: #3F3F3F

Medium Grey: #707070

Egg Yellow: #FFD6C

White: #FFFFFF


<div className='sidebar'>
                <div className='sidebar-list'>
                    <ul className='list-unstyled'>
                        <Link to='/products/Electronics'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Electronics</li></Link>
                        <Link to='/products/Home-Appliances'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Home-Appliances</li></Link>
                        <Link to='/products/Grocery'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Grocery</li></Link>
                        <Link to='/products/Books'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Books</li></Link>
                        <Link to='/products/Entertainment'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Entertainment</li></Link>
                        <Link to='/products/Other'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Other</li></Link>
                        <Link to='/products/Electronics'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Electronics</li></Link>
                        <Link to='/products/Home-Appliances'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Home-Appliances</li></Link>
                        <Link to='/products/Grocery'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Grocery</li></Link>
                        <Link to='/products/Books'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Books</li></Link>
                        <Link to='/products/Entertainment'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Entertainment</li></Link>
                        <Link to='/products/Other'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Other</li></Link>
                        <Link to='/products/Electronics'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Electronics</li></Link>
                        <Link to='/products/Home-Appliances'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Home-Appliances</li></Link>
                        <Link to='/products/Grocery'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Grocery</li></Link>
                        <Link to='/products/Books'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Books</li></Link>
                        <Link to='/products/Entertainment'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Entertainment</li></Link>
                        <Link to='/products/Other'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Other</li></Link>
                        <Link to='/products/Electronics'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Electronics</li></Link>
                        <Link to='/products/Home-Appliances'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Home-Appliances</li></Link>
                        <Link to='/products/Grocery'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Grocery</li></Link>
                        <Link to='/products/Books'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Books</li></Link>
                        <Link to='/products/Entertainment'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Entertainment</li></Link>
                        <Link to='/products/Other'><li className='sidebar-list-item' ><i className='fa fa-microchip pr-2'></i>Other</li></Link>
                    </ul>
                </div>
            </div>
*/