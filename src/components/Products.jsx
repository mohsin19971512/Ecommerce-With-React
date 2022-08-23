import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { productFetch } from "../store/productSlice";
import axios from "axios";
import bgim from "../assets/police.png";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [laodaing, setLoading] = useState(false);
  const [category, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productFetch());
  }, [dispatch]);
  const { items, isLoading } = useSelector((state) => state.products);

  /*   useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setLoading(true);
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []); */

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`http://127.0.0.1:8000/api/category`);
      const data = await response.clone().json();
      setCategories(data);
    };
    getProducts();
  }, []);

  const showCategories = category.map((categ) => (
    <div key={categ.id}className="col-3 mb-5">
      <div className="text-center">
        <img
          src={bgim}
          height="200px"
          width="200px"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <h4 className="text-center my-3">
        <a style={{ textDecoration: "none", color: "black" }} href="#">
          {categ.name}
        </a>
      </h4>
    </div>
  ));

  const Lodaing = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cate) => {
    const updateList = data.filter((x) => x.category == cate);
    setFilter(updateList);
  };

  const ShowProducts = () => {
    const showproducts =
      items.length > 0 ? (
        items.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card h-100 text-center p-4 ">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {product.name.substring(0, 12)}
                </h5>
                <p className="card-text lead fw-bold">${product.price}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-outline-dark"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h3 className="text-center"> Ther Is No Product To Show</h3>
      );

    return <>{showproducts}</>;
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Categories</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          {showCategories}
        </div>

        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {isLoading ? "loading...." : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
