import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { addCart } from "../reducx/action";
import { productDetailFetch } from "../store/productSlice";
import axios from "axios";
//import {Navigate} from 'react-router-dom'
export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [localData,setLocalData] = useState([]);
  const [logged,setIsLogged] = useState(true); 


  useEffect(()=>{
    console.log('1')
    let token;
    try {
    token = JSON.parse(localStorage.getItem('token'))
    console.log('2')
    if(!token)
     setIsLogged(false)

    } catch (error) {
        console.log(error)
        setIsLogged(false)
    }

},[])

  const dispatch = useDispatch();



/*   

  const localstorageForProduct = [];

  const addProduct = (product)=>{
    dispatch(addCart(product));
    console.log(product)
    //localstorageForProduct.push(product)
    
    //localStorage.setItem('product', JSON.stringify(localData));


    const localStorageItems = JSON.parse(localStorage.getItem('product'))
    localStorage.setItem('product', JSON.stringify([...localStorageItems, product]))
    console.log("from local storage ",localStorageItems)
  } */

/*   useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []); */

  useEffect(() => {
    dispatch(productDetailFetch(id));
  }, [dispatch]);

  const {productDetails,isLoading} = useSelector((state)=> state.products)

  const handelAddToCart = ()=>{
    /* if(localStorage.getItem("TOKEN_KEY")){
      setLogin(true);
    }
    console.log("Login is ",login) */
    if(logged){
      

      let webApiUrl =  'http://127.0.0.1:8000/api/orders/cart';
      let tokenStr = JSON.parse(localStorage.getItem('token'));
      axios.get(webApiUrl, { headers: {"Authorization" : `Bearer ${tokenStr}`} })
      .then((response)=>{
          console.log("response",response.data)
          
      })


      /* 
      
        Product = > product 1
                    Category = > police 
                    type = > hat 



      
      */




    }else{
      //return <Navigate to="/login"/>
      console.log("unauth")

    }

  }

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>

        <div className="col-md-6" style={{lineHeight :2 }}>
          <Skeleton height={50} width={30}/>
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{marginLeft:6}}/>
        </div>

        
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={productDetails.image}
            alt={productDetails.name}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{productDetails.category.name}</h4>
          <h1 className="display-5">{productDetails.name}</h1>
          <p className="lead fw-bolder">
            Rating 10
            <i className="fa fa-star"></i>
          </p>
          <h3 className="fw-bold my-4 display-6">${productDetails.price}</h3>
          <p className="lead">{productDetails.description}</p>
          <button onClick= {handelAddToCart} className="btn btn-outline-dark px-4 py-2" >
            Add To Cart
          </button>
          <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go To Cart
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {isLoading ? "loading....": <ShowProduct />}
        </div>
      </div>
    </div>
  );
}
