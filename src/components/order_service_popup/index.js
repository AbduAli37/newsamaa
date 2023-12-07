import React from 'react';
// import "./style.css";
import { Icon } from '@iconify/react';
import closeBig from '@iconify/icons-vaadin/close-big';
function OrderService({ service, show, setShow }) {
  return (
    <div className="order_popup" style={{ left: show ? "0px" : "-100%" }}>
      <Icon
        icon={closeBig}
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "2%",
          left: "2%",
          fontSize:"27px"
        }}
        onClick={() => setShow(false)}
      />
      <div class="popup-body">
        <div class="tour-title">
          <div class="img">
            {/* <img src={btn?.logo} alt="" /> */}
          </div>
          <div class="tour-name">{service?.product_name}</div>
        </div>
        <div class="tour-info"></div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}  class="form">
          <label style={{ marginBottom:'10px' }} htmlFor="f_nam">إسمك الاول</label>
          <input style={{ border:'1px solid #ccc' }} type="text" id='f_nam' class="input" placeholder="إسمك الاول" />
          <label style={{display:'flex',marginBottom:'10px'}} htmlFor="l_nam">إسمك الأخير</label>
          <input style={{ border:'1px solid #ccc' }} type="text" id='l_nam' class="input" placeholder="إسمك الأخير" />
          <label style={{display:'flex',marginBottom:'10px'}} htmlFor="em">بريدك الإلكترونى</label>
          <input style={{ border:'1px solid #ccc' }} type="email" class="input" id='em' placeholder="بريدك إلكترونى" />
          <label style={{display:'flex',marginBottom:'10px'}} htmlFor="phone">رقم الهاتف</label>
          <input style={{ border:'1px solid #ccc' }} type="tel" class="input" id='phone' placeholder="رقم الهاتف" />
          <label style={{display:'flex',marginBottom:'10px'}} htmlFor="loc">العنوان</label>
          <textarea
          style={{ border:'1px solid #ccc' }}
            id='loc'
            class="textarea"
            placeholder="عنوانك"
          ></textarea>
          <label style={{ marginBottom:'10px' }}  htmlFor="not">ملاحظات</label>
          <textarea style={{ border:'1px solid #ccc' }} id='not' class="textarea" placeholder="ملاحظات:"></textarea>
          <button class="submit button js-submit">إطلب الأن</button>
        </div>
      </div>
    </div>
  );
}

export default OrderService;
