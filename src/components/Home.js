import React from "react";
import Joggers from '../img/Joggers.png';
import SweatShirt from '../img/Sweat-Shirt.png';
import Tshirt from '../img/Tshirt.png';
import Jeans from '../img/Jeans.png';
const Home = () =>{
var libArray = [
    {
    'name':'Sweat Shirt',
    'productDetails':'Men Solid Sweatshirt. 679 1699 (60% OFF). Filter by. Brand. 3pin. 4f. 98 degree north. Actimaxx. Adbucks. Adidas. Adidas originals. Alcott. Adamo london.',
    'img':SweatShirt
    },
    {
        'name':'Joggers',
        'productDetails':'Choose from the latest collection of Joggers online in India. Select Joggers from top brands like Puma, H&m, WRONG Nike & more at Myntra fashion store.',
        'img':Joggers
    },
    {
        'name':'Tshirt',
        'productDetails':'Explore the massive collection of Tshirt online for men, women & kids in India. Check out Tshirts from top brands available in various sizes, fabrics',
        'img':Tshirt
    },
    {
        'name':'Jeans',
        'productDetails':'Buy Jeans for men, women & kids online in India at Myntra. Shop from the latest collections of jeans available in various brands, colors & sizes ',
        'img':Jeans
    }
 
];

var libCard = libArray.map(params =>
    
    <div className="custom-card">
    <img src={params.img} alt=""/>
    <div className="name">{params.name}</div>
   <div className="prod-info">
    <div className="productDetails">{params.productDetails}</div>
   </div>
   </div>
 
    
     
     )
    return(
        <>
            <h3>Our Products</h3>
            <div className="shop">
            {libCard}
            </div>
        </>

    );
}

export default Home;