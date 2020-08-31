import React from 'react';
class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
        this.testing();
    }
    testing(){
        const promise=new Promise((resolve,reject)=>{
          setTimeout(()=>{
              resolve('done');

          },1000);
        })
        promise.then(()=>{
        this.setState({qty:100});
        console.log('state',this.state);
        
        });
    }
    incq= () =>{
        //this.state.qty +=1;
        console.log('this',this.state);
        // //setstate form 1
        // this.setState({
        //     qty:this.state.qty+1
        // });
        //form 2->if prev state required
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
        },()=>{
            console.log('this.state',this.state);
        });
    }
    decq= () =>{
        const{qty}=this.state;
        if(qty===0){
            return
        }
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        });
        

    }
    render(){
        const{price,title,qty}=this.state;
        return(
        <div class="cart-item">
            <div class="left-block">
                <img style={styles.image}/>
            </div>
            <div class="right-block">
        <div style={{fontSize:25}}>{title}</div>
            <div style={{color:'#777'}} >Rs {price}</div>
            <div style={{color:'#777'}}>Qty:{qty}</div>
       <div class="cart-item-actions">
    {/*Buttons */}
    <img alt="inc" 
    className="action-icons" 
    src="https://image.flaticon.com/icons/svg/709/709484.svg"
    onClick={this.incq}
    />
    <img alt="dec" 
    className="action-icons" 
    src="https://image.flaticon.com/icons/svg/659/659892.svg"
    onClick={this.decq}
    />
    <img alt="del" 
    className="action-icons" 
    src="https://image.flaticon.com/icons/svg/1214/1214428.svg"/>

</div>
</div>
</div>
        );
    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;