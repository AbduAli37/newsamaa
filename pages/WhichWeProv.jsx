import React, { useState } from "react";
// import '../styles/product.css'
const WhichWeProv = () => {
  const [whichData, setWhichData] = useState([
    {
      id: 1,
      img: "/assets/siteimage/secu1.png",
      title: "التحليل الأمني ",
      description:
        "من خلال افضل المهندسين المتخصصين احصل علي دراسة كاملة للمشروع بالايجابيات والسلبيات والنسب المؤكدة",
    },
    {
      id: 2,
      img: "/assets/siteimage/secu2.png",
      title: "الخدمات الامنية",
      description:
        "من خلال توفيرنا لاحتياجاتك من الأنظمة الأمنية والأجهزة المتوافقة معها فأنت في أمان دائم",
    },
    {
      id: 3,
      img: "/assets/siteimage/secu3.png",
      title: "حلول أمنية",
      description: "حلول أمنية غير اعتياديه توافيك بكافة احتياجاتك",
    },
  ]);
  return (
    <div className="wichweprovid">
      <div className="right">
        {whichData.map((item, index) => {
          return (
            <div className="det">
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="left">
        <h5 style={{ color: "black", textAlign: "start" }}>المميزات</h5>

        <p style={{ color: "white", textAlign: "start" }}>
          نتميز بافضل الكفاءات البشرية المدربين علي أعلي مستوي للوصول الي حد
          الإتقان والذي يساعد بدوره في ارضاء العملاء واستخلاص اعلي النتائج التي
          يمكن الحصول عليها وسرعة انهاء المشكلات في اسرع وقت
        </p>
      </div>
    </div>
  );
};

export default WhichWeProv;
