import React from "react";
import {useLocation,Link} from 'react-router-dom';


function CartSellItems1() {

    const location = useLocation();
   console.log(location.state);
        return (     
            <div className='component-2 padding-top' > 
                    <div className='col-sm-12 border-line center padding-10 div-width-30' >   
                    <div className='col-sm-6 label padding-10'> 
                    <img src={location.state[0].image.imagePath} 
                    alt="NFT Image" 
                    key={location.state[0].image.index} style={{
                        height: 100,
                        width:100,              
                        borderRadius: 7,
                        padding:2
                        }} />
                    </div>    
                    <div className='col-sm-6 control padding-10'>
                            <div style={{height:300}}> 
                                <div className='col-sm-12'>
                                        <h2 className='header2'>{location.state[0].image.imageName}</h2>
                                </div>
                                <div className='col-sm-12' style={{fontSize:10}}>
                                    Store:<a href="www.google.com">Shahanaz Sultana's Gallary</a>
                                </div>
                                <div className='col-sm-12 display-flex'>
                                   <div className="col-sm-6 wrapper">
                                        <h6 className='header2'>- 1 +</h6>
                                   </div> 
                                   <div className="col-sm-6 wrapper">
                                        ৳1000
                                   </div> 
                                </div>                                
                            </div>                                                      
                            <div className='col-sm-12'> 
                                <div className="col-sm-12 display-flex">
                                    <div className="col-sm-6 wrapper">
                                        Subtotal:
                                    </div>
                                    <div className="col-sm-6 wrapper">
                                        ৳1000
                                    </div>              
                                </div>                                 
                            </div> 
                           
                    </div> 
                    <div className="col-sm-12 display-flex div-width-100" style={{padding:2}}>
                        <Link  to={{
                                pathname: "/cartsellitem1",                                            
                                }}>
                                <button type="button" className='save-button-large button-cart-checkout'>
                                Checkout
                                </button>
                        </Link>             
                    </div> 
                    
                    <div className="col-sm-12 display-flex div-width-100" style={{padding:2}}>
                        <Link  to={{
                                pathname: "/cartsellitem1",                                          
                                }}>
                                <button type="button" className='save-button button-view-cart'>
                                View Cart
                                </button>
                        </Link>             
                    </div>       
                </div>
            </div>              

        )
    }

    export default CartSellItems1;