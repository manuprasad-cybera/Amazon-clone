import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg" alt=""/>

                <div className="home_row">
                   <Product 
                   id="4903850"
                   title="The Power of Your Subconscious Mind (DELUXE HARDBOUND EDITION)"
                   price={29.99} 
                   image="https://images-na.ssl-images-amazon.com/images/I/51Y-bq+NUoL._SX320_BO1,204,203,200_.jpg"
                   rating={3} /> 
                   <Product
                   id="4903851"
                   title="Unfinished: A Memoir by Priyanka Chopra Jonas (Limited edition)"
                   price={19.99} 
                   image="https://images-na.ssl-images-amazon.com/images/I/417FIfX3VTL._SX326_BO1,204,203,200_.jpg"
                   rating={5} /> 
                </div>

                <div className="home_row">
                    <Product 
                    id="4903852"
                    title="New Apple iPhone 12 Mini (64GB) - Green"
                    price={698.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71i%2B-WmxHWL._SL1500_.jpg"
                    rating={5}/>
                    <Product 
                    id="4903853"
                    title="
                    Samsung Galaxy Note10 Lite (Aura Glow, 6GB RAM, 128GB Storage)"
                    price={499.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71T0KJFxCHL._SL1500_.jpg"
                    rating={5}/>
                    <Product 
                    id="4903854"
                    title="OnePlus Nord 5G (Gray Onyx, 12GB RAM, 256GB Storage)"
                    price={498.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71CuwgwCQdL._SL1500_.jpg"
                    rating={5}/>
                </div>

                <div className="home_row">
                    <Product 
                    id="4903855"
                    title="Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD, 1.4GHz Quad-core 8th-Generation Intel Core i5 Processor, Magic Keyboard) - Space Grey"
                    price={1299.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71YRSVXhgQL._SL1500_.jpg"
                    rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
