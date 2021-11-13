import React from 'react'
import { CgMouse } from 'react-icons/cg'
import "./Home.css";
import Product from "./Product.js"
import MetaData from "../layout/MetaData"

const product = {
    name: "Blue Tshirt",
    images: ["https://m.media-amazon.com/images/I/81AmRlUiGdL._AC_UL480_FMwebp_QL65_.jpg"],
    price: 2000,
    _id: "ankur"
}



const Home = () => {
    return (
        <>
        <MetaData title="ECommerce" />
        
        <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
                <button>
                    Scroll <CgMouse />
                </button>
            </a>
        </div>

        <h2 className="homeHeading">Featured Products</h2>

        <div className="container" id="container">
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
        </div>

        </>
    )
}

export default Home
