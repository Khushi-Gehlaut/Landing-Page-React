const Hero=()=>{
    return(
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="category-btn">Category</button>
                </div>
                <div className="shopping-op">
                    <p>Also Available on</p>
                    <div className="shop-options">
                        <img src="./images/flipkart.png" alt="flipkart" />
                        <img src="./images/amazon.png" alt="amazon" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="./images/shoe_image.png" alt="hero-image" />
            </div>
        </main>
    );
}
export default Hero;