import React from "react"
import {BrowserRouter, Route, Link} from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import americana from './americana.jpg';
import pepperone from './pepperone.jpg';


const history = createBrowserHistory();

const Pizza = () => (
    <div className="Page1">
        <section id="topic-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Products</h1>
                    </div>
                </div>
            </div>
        </section>
        <section id="single-product">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="single-product-img">
                            <img src={americana}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="block">
                            <div className="product-des">
                                <h4>Claritas est etiam</h4>
                                <p className="price">$380</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, culpa, esse, magni omnis blanditiis unde vitae in nobis fuga optio numquam at ipsum impedit perspiciatis quia rem consequatur recusandae repudiandae provident nemo voluptatibus corporis ab id iste pariatur ipsam vero porro eos eaque rerum nam dolorum mollitia adipisci. Quaerat, ullam!</p>
                                <a className="view-link" href="#"><i className="fa fa-plus-circle"></i>Add To Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="single-product">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="single-product-img">
                            <img src={pepperone}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="block">
                            <div className="product-des">
                                <h4>Claritas est etiam</h4>
                                <p className="price">$380</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, culpa, esse, magni omnis blanditiis unde vitae in nobis fuga optio numquam at ipsum impedit perspiciatis quia rem consequatur recusandae repudiandae provident nemo voluptatibus corporis ab id iste pariatur ipsam vero porro eos eaque rerum nam dolorum mollitia adipisci. Quaerat, ullam!</p>
                                <a className="view-link" href="#"><i className="fa fa-plus-circle"></i>Add To Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

const Salad = () => (
    <div>
        <h2>Salad</h2>
    </div>
)

const Fish = () => (
    <div>
        <h2>Fish</h2>
    </div>
)

const Meat = () => (
    <div>
        <h2>Meat</h2>
    </div>
)

const Dessert = () => (
    <div>
        <h2>Dessert</h2>
    </div>
)

class Navigation extends React.Component {
    render() {
        return (
            <BrowserRouter history={{history}}>
                <div>
                    <ul>
                        <li><Link to="/">Pizza</Link></li>
                        <li><Link to="/salad">Salad</Link></li>
                        <li><Link to="/fish">Fish</Link></li>
                        <li><Link to="/meat">Meat</Link></li>
                        <li><Link to="/dessert">Dessert</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={Pizza}/>
                    <Route exact path="/salad" component={Salad}/>
                    <Route exact path="/fish" component={Fish}/>
                    <Route exact path="/meat" component={Meat}/>
                    <Route exact path="/dessert" component={Dessert}/>
                </div>
            </BrowserRouter>
        )
    }
}
export default Navigation;

