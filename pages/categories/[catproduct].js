import Pagination from "@/src/components/Pagination";
import Layout from "@/src/layout/Layout";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { products } from "../products";

const CatProduct = () => {
  const router = useRouter();
  console.log(router.query)
  const { catproduct,name } = router.query;
  console.log(catproduct)
  const [rendProducts, setRendProducts] = useState([]);
  const [selectProdNum, setSelectProdNum] = useState(12);
  const [currentPage, setCurrentPage] = useState(0);
  const [origPagProducts, setOrigPagProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [searchTxt,setSearchTxt]=useState('')
  const handleSearch = (txt) => {
    if (txt.length == 0) {
      setRendProducts(originalProducts);
      setOrigPagProducts(originalProducts);
    } else {
      let allProducts = [...originalProducts];
      let filteredProducts = [];
      for (let i = 0; i < allProducts.length; i++) {
        if (
          allProducts[i].product_name?.toLowerCase().includes(txt) ||
          allProducts[i].product_description?.toLowerCase().includes(txt)
        ) {
          filteredProducts.push(allProducts[i]);
        }
        setRendProducts(filteredProducts);
        setOrigPagProducts(filteredProducts);
      }
    }
  };

  useEffect(() => {
    if (currentPage == 0) {
      setRendProducts(products.slice(0, selectProdNum));
      setOriginalProducts(products);
    } else if (currentPage == 1) {
      setRendProducts(
        products.slice(selectProdNum, selectProdNum + selectProdNum)
      );
      setOriginalProducts(products);
    } else {
      // console.log(originalcurruntpage*number*1)
      let arr = [];
      for (
        let i = currentPage * 1 * selectProdNum * 1;
        i <= (currentPage + 1) * 1 * selectProdNum - 1;
        i++
      ) {
        if (i < products.length) {
          arr.push(products[i]);
        }
      }
      setRendProducts(arr);
      // setOriginalProducts(currentPage)
    }
  }, [currentPage]);

  const handleFilterProducts = () => {
    let filteredProducts = products.filter(
      (item) => item.category_id == catproduct
    );
    setRendProducts(filteredProducts);
  };

  useEffect(() => {
    setOriginalProducts(products);
    setOrigPagProducts(products);
    handleFilterProducts();
    // setRendProducts(products)
  }, []);
  return (
    <Layout noHeaderBg pageName={"Products"}>
      <div>
        <section
          className="splash-area-section"
          style={{ backgroundImage: "url(/assets/img/background.jpg)" }}
        >
          <div className="container">
            <div className="splash-area">
              <h2>
                منتجاتنا
                <br />
              </h2>
              <h3 style={{ color:'white' }}>{name}</h3>
            </div>
          </div>
        </section>
        <section className="things-differently gap">
          <div className="cont">
            {((rendProducts.length > 0)&&searchTxt=='' ) ? (
              <div className="search">
                <input
                  onChange={(e) => {
                    handleSearch(e.target.value);
                    setSearchTxt(e.target.value);
                  }}
                  type="text"
                  placeholder="إبحث هنا..."
                />
              </div>
            ) : (
              <div className="no_data">
                <h4>no Data</h4>
              </div>
            )}
            <div className="products_content d-flex aliegn-item-center justify-content-between">
              {rendProducts.map((item, index) => {
                return (
                  <Link
                    style={{ height: "fit-content" }}
                    className="product"
                    href={`/product/${item.id}`}
                  >
                    <div
                      style={{ height: "fit-content", maxHeight: "400px" }}
                      className="product_image"
                    >
                      <img src={item.product_image} alt="" />
                    </div>
                    <div className="product_details">
                      <h4>{item.product_name}</h4>
                      <p>{item.product_description}</p>
                      <h3 style={{ position: "relative" }}>
                        <span>{item.price}</span>
                        <span></span>
                      </h3>
                      <button style={{fontSize:'13px'}} className="prod_order_btn">طلب</button>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          {rendProducts.length > 0 ? (
            <Pagination
              originalProducts={rendProducts}
              number={selectProdNum}
              handlechangecurrentpage={(e) => {
                setCurrentPage(e);
              }}
              currentpage={currentPage}
            />
          ) : null}
        </section>
      </div>
    </Layout>
  );
};

export default CatProduct;
