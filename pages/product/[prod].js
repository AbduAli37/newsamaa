import Layout from "@/src/layout/Layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import OrderService from "@/src/components/order_service_popup";
import { products } from "../products";
const ProductDetails = () => {
  const route = useRouter();
  console.log(route);
  const { prod } = route.query;
  // console.log(prod)
  const [showOrderReq, setShowOrderRed] = useState(false);
  // const [products,setProducts]=useState()
  const [rowData, setRowData] = useState({});
  const [product, setProduct] = useState({});
  const filterProduct = () => {
    let selectedProduct = products.filter((item) => item.id == prod);
    setProduct(selectedProduct[0]);
  };
  useEffect(() => {
    filterProduct();
  }, []);
  return (
    <Layout noHeaderBg pageName={"productdetails"}>
      <section
        className="splash-area-section"
        style={{
          background: "linear-gradient(120deg, #171837 0%, #a86262 100%",
        }}
      >
        <div className="container">
          <div className="splash-area">
            <h2>
              تفاصيل
              <br />
              <p style={{ color: "#c9992b" }}>{product.product_name}</p>
            </h2>
          </div>
        </div>
      </section>
      <div className="product_details_page">
        <div className="details_content">
          <div className="right">
            <div className="details">
              <h4>{product.product_name}</h4>
              <p>{product.product_description}</p>

              <button
                onClick={() => {
                  console.log("re");
                  setShowOrderRed(true);
                  // setRowData()
                }}
                className="order_btn"
              >
                طلب
              </button>
            </div>
          </div>
          <div className="left">
            <div className="big_image">
              {/* <Image width={100} height={200} src={product.product_image}/> */}
              <img src={`${product.product_image}`} alt="" />
            </div>
          </div>
        </div>
        {showOrderReq ? (
          <OrderService
            // btn={btn}
            service={product}
            // label={label}
            show={showOrderReq}
            setShow={setShowOrderRed}
          />
        ) : null}
      </div>
    </Layout>
  );
};

export default ProductDetails;
