import TerioCounter from "@/src/components/TerioCounter";
import Layout from "@/src/layout/Layout";
import { studiesswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdPrecisionManufacturing } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import Pagination from "@/src/components/Pagination";
const Categories = () => {
  const [categories, setCategories] = useState([
    {
      category_id: 1,
      category_name: "أنظمة التفتيش الأمني ",
      category_image: "/assets/siteimage/cat1.png",
    },
    {
      category_id: 2,
      category_name: "أنظمة  البصمة الحيوية ",
      category_image: "/assets/siteimage/cat2.jpg",
    },
    {
      category_id: 3,
      category_name: "أجهزة المنزل",
      category_image: "/assets/siteimage/cat3.jpg",
    },
    {
      category_id: 4,
      category_name: "أنظمة التحكم في الأبواب",
      category_image: "/assets/siteimage/cat4.jpg",
    },
    {
      category_id: 5,
      category_name: "برامج الحضور والانصراف",
      category_image: "/assets/editedproducts/cat5.jpg",
    },
    {
      category_id: 6,
      category_name: "بوابات مواقف السيارات",
      category_image: "/assets/editedproducts/cat6.jpg",
    },
  ]);

  const [originalCategories, setOriginalCategories] = useState([
    {
      category_id: 1,
      category_name: "أنظمة التفتيش الأمني ",
      category_image: "/assets/siteimage/cat1.png",
    },
    {
      category_id: 2,
      category_name: "أنظمة  البصمة الحيوية ",
      category_image: "/assets/siteimage/cat2.jpg",
    },
    {
      category_id: 3,
      category_name: "أجهزة المنزل",
      category_image: "/assets/siteimage/cat3.jpg",
    },
    {
      category_id: 4,
      category_name: "أنظمة التحكم في الأبواب",
      category_image: "/assets/siteimage/cat4.jpg",
    },
    {
      category_id: 5,
      category_name: "برامج الحضور والانصراف",
      category_image: "/assets/editedproducts/cat5.jpg",
    },
    {
      category_id: 6,
      category_name: "بوابات مواقف السيارات",
      category_image: "/assets/editedproducts/cat6.jpg",
    },
  ]);

  const handleSearch = (txt) => {
    console.log(txt);
    if (txt == "") {
      // console.log("1")
      setCategories(originalCategories);
      setOriginalCategories(originalCategories);
    }
    if (txt.length == 0) {
      // console.log("2")
      setCategories(originalCategories);
      setOriginalCategories(originalCategories);
    } else {
      let allProducts = [...originalCategories];
      let filteredProducts = [];
      for (let i = 0; i < allProducts.length; i++) {
        if (
          allProducts[i].category_name?.toLowerCase().includes(txt)
          // originalCategories[i].product_description?.toLowerCase().includes(txt)
        ) {
          filteredProducts.push(allProducts[i]);
        }
        setCategories(filteredProducts);
        // setOriginalCategories(filteredProducts)
      }
    }
  };

  return (
    <Layout noHeaderBg pageName={"About"}>
      <div>
        <section
          className="splash-area-section"
          style={{ backgroundImage: "url(assets/img/background.jpg)" }}
        >
          <div className="container">
            <div className="splash-area">
              <h2>
                الحلول
                <br />
              </h2>
              {/* <a href="#">عن</a> */}
            </div>
          </div>
        </section>
        <section className="things-differently gap">
          <div className="cont">
            <div className="search">
              <input
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
                type="text"
                placeholder="إبحث هنا..."
              />
            </div>
            <div className="products_content categories d-flex aliegn-item-center justify-content-between">
              {categories.map((item, index) => {
                return (
                  <Link
                    style={{ height: "fit-content" }}
                    className="category"
                    href={`categories/${item.category_id}`}
                  >
                    <div className="category_image">
                      <img src={item.category_image} alt="" />
                    </div>
                    <div className="over_lay">
                      <h4>{item.category_name}</h4>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* <Pagination
            originalProducts={origPagProducts}
            number={selectProdNum}
            handlechangecurrentpage={(e)=>{
              setCurrentPage(e)
            }}
            currentpage={currentPage}
          /> */}
        </section>
      </div>
    </Layout>
  );
};
export default Categories;
