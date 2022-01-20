import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import test1 from '../images/staff3.jpg';
import test2 from '../images/staff5.jpg';
import btcImage from '../images/c2.jpg';
import Header from './Header';
import Marquee from './Marquee';
import Footer from './Footer';
function Home(){
        
            const [data, setData] = useState('');
            const [remaining, setRemaining] = useState(false);
            const [loader, setLoader] = useState(true);
            

              
              
           


  
            let handleRemaining = () =>{
             
              setRemaining(true);
              
            }

              
            let handleLess = (e) =>{
              console.log(e)
              setRemaining(false);
          }
            
               
              
          

          useEffect(()=>{
            axios.get('http://api.mediastack.com/v1/news?access_key=7336f0483edb7466beae918fb7818224&languages=en,-de&categories=business&keywords=bitcoin&limit=4 ')
            .then(res=>{
              console.log(res.data.data)
               const data = res.data.data;
               setData(data);
               setLoader(false);

            })
            .catch(err=>{
              console.log(err.response);
              setLoader(false);
            })
          }, [])

            const bitcoinData = Array.from(data);
             console.log(bitcoinData)
    return(
     
       <>
         <Header/>
          <Marquee/>
        <div className="container-fluid">
            
     

        <div className="container my-4 p-2 choose">
          <h4 className="text-center mb-4">Why Choose Us ?</h4>
          <div className="d-lg-flex justify-content-around">

          <div className="text-center my-2 currencies">
              <h5 className=""> Fast Payment</h5>
              <i className="fa fa-dollar"></i>

            </div>
            <div className="text-center my-2 payment-card">
              <h5 className=""> Different Payment Options</h5>
              <i className="fa fa-cc-paypal"></i>
              <i className="fa fa-cc-stripe"></i>
              <i className="fa fa-cc-visa"></i>
              <i className="fa fa-cc-mastercard"></i>
              <i className="fa fa-btc"></i>
            </div>

           
            <div className="text-center my-2 star">
              <h5 className=""> We Are Reliable</h5>
              <i className="fa fa-star"> </i>
              <i className="fa fa-star"> </i>
              <i className="fa fa-star"> </i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"> </i>
              

            </div>
            
          </div>
        </div>

       <div className="row">
         <div className="col-md-7">
           <h5 className="Testimonies my-2">Testimonies</h5>
           <div className="d-lg-flex justify-content-around test">
             <div className="col1">
             <img className="test-image d-block mx-auto" src={test1} alt=""/>
            
              <p className="m-2 ">  <i className="fa fa-quote-left"></i> This is the most reliable crypto exchange. They are the best in town  <i className="fa fa-quote-right"></i></p>
              <h5 className="text-center test-name my-1">James Donald</h5>

             </div>
             <div className="col2">
             <img className="test-image d-block mx-auto" src={test2} alt=""/>
             
              <p className="m-2 " >  <i className="fa fa-quote-left"></i> I have been using this platform for the past years to trade.   <i className="fa fa-quote-right"></i></p>
              <h5 className="text-center test-name my-1">Pearl Rowland</h5>


               </div>
           </div>
         </div>
         <div className="col-md-5">
           <h5 className="text-center my-2">Contact Us Now</h5>
           <form className="contact-form">
             <div className="form-group">
               <label><i className="fa fa-user"> Name</i></label>
               <input className="form-control" type="text"/>
             </div>
             <div className="form-group">
               <label><i className="fa fa-envelope-open"> Email</i></label>
               <input className="form-control" type="email"/>
             </div>
             <div className="form-group">
               <label><i className="fa fa-pencil"> Message</i></label>
               <textarea className="form-control" rows="5"></textarea>
             </div>
             <div className="form-group my-3">
              <button className="btn contact-btn" type="submit">Send</button>
             </div>
           </form>
         </div>
         </div>
      
       <div className="container my-5 blog">
         <h4 className="blog-post text-center my-4"> Bitcoin News</h4>
         {bitcoinData.length>0? ' ' : <p className="text-center">No bitcoin news available yet</p>}
         {loader? <p className="text-center">Loading bitcoin news...</p>: ''}

         <div className="card-group">
         {bitcoinData.slice(0, 4).map((bitcoin, index)=>{
           return(
           <div className="card mx-1" key={index}>
             <img className="img-card-top" src={btcImage} alt=""/>
             <div className="card-body">
               <h5 className="card-title">{bitcoin.title}</h5>
               <p className='card-text'>{bitcoin.description.substring(0, 30)}{remaining?'' :<span>...</span>}{remaining?<span className="remaining">{bitcoin.description.substring(10, 1000)}</span>: ' '}</p>
                <Link className="read" to="#" onClick={handleRemaining}>{remaining?'' :'Readmore'}</Link>
                 <Link className="read" to="#" onClick={handleLess}>{remaining?'Readless' :''}</Link>

             </div>
           </div>
         )
           })}
           

           
         </div>
       </div>
        
         </div>
         <Footer/>
          </>
    )
}



export default Home;