import {  useSelector } from "react-redux"




function ProductDescription(){
  const product=useSelector(state=>state.productReducers.product)
    return(
  
        <div id="container">	
        
        <div className="product-details">
        
          <h1>{product.title}</h1>
         
          <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star-half-o" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" />
          </span>
        
          <p className="information">{product.description}</p>
         
          <div className="control">
           
            <button className="btn">
             
              <span className="price">{product.prix}$</span>
             
              <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
            
              <span className="buy">Buy Now</span>
            </button>
          
          </div>
        </div>
       
        <div className="product-image">
          <img src={product.imageUrl} alt/>
      
          <div className="info">
            <h2>The Description</h2>
            <ul>
              <li><strong>Sun Needs: </strong>Full Sun</li>
              <li><strong>Soil Needs: </strong>Damp</li>
              <li><strong>Zones: </strong>9 - 11</li>
              <li><strong>Height: </strong>2 - 3 feet</li>
              <li><strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall</li>
              <li><strong>Features: </strong>Tolerates heat</li>
            </ul>
          </div>
        </div>
  
   </div>


        
    )
 }

export default ProductDescription