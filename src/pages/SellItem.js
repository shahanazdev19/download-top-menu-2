import React from 'react';
import { Link } from 'react-router-dom';
import {RiHeart3Fill} from 'react-icons/ri';
import { useNavigate,useLocation  } from 'react-router-dom';
import CartSellItems1 from"./CartSellItems1";

export default class Detials extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:this.props.location.state,
        }
    }
 
// alertMessage(){
//        console.log(this.props.location.state.image);
//     }

render(){
    const { data } = this.props.location;
    // function CartSellItemButtionClick() {
    //     const navigate = useNavigate();
    //     const onClick=()=>{
    //         navigate('/cartsellitem',{state:{image:this.props.location.state.image}});
    //           }
    //     return <button onClick={{onClick}}>Add to cart</button>;
    //   }
 // go to different page from button click
// const _handleButtonClick = () => {    
//     //then redirect:
//     this.context.router.push({ //browserHistory.push should also work here
//       pathname: '/cartsellitem',
//       state: {data: data}
//     }); 
//   }
//--------------------------------
return (

            <div className='component-2 padding-top' > 
                <div className='col-sm-12 border-line center padding-10 sell-item-width' >   
                    <div className='col-sm-6 label padding-10'> 
                    <img src={this.props.location.state.image.imagePath} alt="NFT Image" key={this.props.location.state.image.index} style={{
                        height: 400,
                        width:400,              
                        borderRadius: 7,
                        padding:2
                        }} />
                    </div>       
                    <div className='col-sm-6 control padding-10'> 
                            <div className='col-sm-12'>
                                    <h2 className='header2'>{this.props.location.state.image.imageName}</h2>
                            </div>
                            <div className='col-sm-12'>
                                    <h6 className='header2'>1000BDT</h6>
                            </div>
                            <div className='col-sm-12'>
                                    {/* <CartSellItemButtionClick/> */}
                                    <Link  to={{
                                            pathname: "/cartsellitem1",
                                            state:[{image: this.props.location.state.image}]
                                        }}>
                                            <button type="button" className='save-button-large button-default'>
                                            Add to cart
                                            </button>
                                         </Link>
                                         {/* <Link  to={{
                                            pathname: "/cartsellitem1",
                                            state:[{index: this.props.location.state.image.index, imageName: this.props.location.state.image.imageName, imagePath:this.props.location.state.image.imagePath}]
                                        }}>
                                            <button type="button" className='save-button-large button-default'>
                                            Add to cart
                                            </button>
                                         </Link>  */}
                                         
                                         {/* [{id: 1, name: 'Ford', color: 'red'}] */}
                                    {/* <button  onClick={_handleButtonClick} className='save-button-large button-default' > 
                                            Add to cart 
                                    </button>    */}
                            </div>
                            <div className='col-sm-12' style={{ color: 'red' }}>
                                    Item will be shipped withing 3-7 business days
                            </div>
                            <div className='col-sm-12'>
                                    <button className=' button-orange'> 
                                    <RiHeart3Fill className="heart"/>Add to wishlist
                                </button>   
                            </div>
                            <div className='col-sm-12'>
                                <div className="float-container col-sm-12">
                                <div className="float-child col-sm-12">
                                    Date:
                                </div>
                                <div className="float-child col-sm-12">
                                    Category: Painting
                                </div>              
                                </div> 
                            </div> 
                    </div>        
                </div>
            </div>  
        )
    }

}