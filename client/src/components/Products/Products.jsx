import "./Products.scss";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Prod1 from "../../assets/products/prods1.jpg";
import Prod2 from "../../assets/products/prods2.jpg";
import Prod3 from "../../assets/products/prods3.jpg";
import Prod4 from "../../assets/products/prods4.jpg";
import Prod5 from "../../assets/products/prods5.jpg";
import Prod6 from "../../assets/products/prods6.jpg";
import Prod7 from "../../assets/products/prods7.jpg";
import Prod8 from "../../assets/products/prods8.jpg";
import Prod9 from "../../assets/products/prods9.jpg";
import Prod10 from "../../assets/products/prods10.webp";
export default function Products() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="products">
            <h1>BEST SELLERS</h1>
            <Carousel responsive={responsive}>
                {/* prod1 */}
                <div className="card">
                    <img className="product--image" src={Prod1} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">$20.99</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod2 */}
               <div className="card">
                    <img className="product--image" src={Prod2} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">$20.99</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod3 */}
                <div className="card">
                    <img className="product--image" src={Prod3} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">$20.99</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod4 */}
                <div className="card">
                    <img className="product--image" src={Prod4} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">$20.99</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod5 */}
                <div className="card">
                    <img className="product--image" src={Prod5} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">$20.99</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod6 */}
               <div className="card">
                    <img className="product--image" src={Prod6} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">$20.99</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod7 */}
                <div className="card">
                    <img className="product--image" src={Prod7} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">$20.99</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod8 */}
                <div className="card">
                    <img className="product--image" src={Prod8} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">$20.99</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod9 */}
                <div className="card">
                    <img className="product--image" src={Prod9} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">$20.99</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
                </div>
                {/* prod10 */}
                <div className="card">
                    <img className="product--image" src={Prod10} alt="" />
                    <h3>Dress</h3>  
                    <p className="price">$20.99</p>
                    <p>
                        <button>Add to Cart</button>
                    </p>
               </div>
            </Carousel>
        </div>
    )
}