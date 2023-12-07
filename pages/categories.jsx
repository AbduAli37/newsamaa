import TerioCounter from "@/src/components/TerioCounter";
import Layout from "@/src/layout/Layout";
import { studiesswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdPrecisionManufacturing } from "react-icons/md";
import { useEffect, useState } from "react";
import Link from "next/link";
import Pagination from "@/src/components/Pagination";
const Categories = () => {
  const [categories, setCategories] = useState([
    {
      category_id: 1,
      category_name: "اجهزة الحضور والانصراف والتحكم بالابواب",
      category_image: "/assets/siteimage/cat1.png",
    },
    {
      category_id: 2,
      category_name: "اجهزة السنترال والفاكس",
      category_image: "/assets/siteimage/cat2.png",
    },
    {
      category_id: 3,
      category_name: "انظمة الكاشير ونقاط البيع وطابعات الفواتير",
      category_image: "/assets/siteimage/cat3.png",
    },
    {
      category_id: 4,
      category_name: "طابعات الكروت البلاستيكة وطابعاتها",
      category_image: "/assets/siteimage/cat4.png",
    },
    {
      category_id: 5,
      category_name:
        "اجهزة صفوف الانتظار والخدمة الذاتيه للبنوك والمستشفيات والجهات الحكوميه",
      category_image: "/assets/siteimage/prod26.png",
    },
    {
      category_id: 6,
      category_name: "بوابات انذار الملابس",
      category_image: "/assets/siteimage/prod18.png",
    },
    {
      category_id: 7,
      category_name: "انظمة كاميرات المراقبه",
      category_image: "/assets/siteimage/prod16.png",
    },
    {
      category_id: 8,
      category_name: "انظمة كوالين الفنادق وموفرات الطاقه",
      category_image: "/assets/siteimage/prod22.png",
    },
    {
      category_id: 9,
      category_name: "طابعات الباركود وقوارئ الباركود",
      category_image: "/assets/siteimage/prod29.png",
    },
    {
      category_id: 10,
      category_name: "نداء الكافيهات والمطاعم",
      category_image: "/assets/siteimage/prod34.png",
    },
    {
      category_id: 11,
      category_name: "انظمة مواقف السيارات",
      category_image: "/assets/siteimage/prod39.png",
    },
    {
      category_id: 12,
      category_name: "مصدات وحواجز الطرق",
      category_image: "/assets/siteimage/prod41.png",
    },
  ]);

  const [originalCategories, setOriginalCategories] = useState([
    {
      category_id: 1,
      category_name: "اجهزة الحضور والانصراف والتحكم بالابواب",
      category_image: "/assets/siteimage/cat1.png",
    },
    {
      category_id: 2,
      category_name: "اجهزة السنترال والفاكس",
      category_image: "/assets/siteimage/cat2.png",
    },
    {
      category_id: 3,
      category_name: "انظمة الكاشير ونقاط البيع وطابعات الفواتير",
      category_image: "/assets/siteimage/cat3.png",
    },
    {
      category_id: 4,
      category_name: "طابعات الكروت البلاستيكة وطابعاتها",
      category_image: "/assets/siteimage/cat4.png",
    },
    {
      category_id: 5,
      category_name:
        "اجهزة صفوف الانتظار والخدمة الذاتيه للبنوك والمستشفيات والجهات الحكوميه",
      category_image: "/assets/siteimage/prod26.png",
    },
    {
      category_id: 6,
      category_name: "بوابات انذار الملابس",
      category_image: "/assets/siteimage/prod18.png",
    },
    {
      category_id: 7,
      category_name: "انظمة كاميرات المراقبه",
      category_image: "/assets/siteimage/prod16.png",
    },
    {
      category_id: 8,
      category_name: "انظمة كوالين الفنادق وموفرات الطاقه",
      category_image: "/assets/siteimage/prod22.png",
    },
    {
      category_id: 9,
      category_name: "طابعات الباركود وقوارئ الباركود",
      category_image: "/assets/siteimage/prod29.png",
    },
    {
      category_id: 10,
      category_name: "نداء الكافيهات والمطاعم",
      category_image: "/assets/siteimage/prod34.png",
    },
    {
      category_id: 11,
      category_name: "انظمة مواقف السيارات",
      category_image: "/assets/siteimage/prod39.png",
    },
    {
      category_id: 12,
      category_name: "مصدات وحواجز الطرق",
      category_image: "/assets/siteimage/prod41.png",
    },
  ]);
  // useEffect(() => {
  //   setOriginalCategories(categories);
  // }, [categories]);
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
                كل الفئات
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
                    href={`categories/${item.category_id}?name=${item.category_name}`}
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
