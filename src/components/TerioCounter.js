import Counter from "./Counter";

const TerioCounter = () => {
  return (
    <div className="row" style={{ justifyContent:'center' }}>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="counter-text">
          <div className="d-flex align-items-center justify-content-center">
            <Counter end={12000} />
            <h6>+</h6>
          </div>
          <div className="boder" />
          <span>منتج</span>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="counter-text">
          <div className="d-flex align-items-center justify-content-center">
            <Counter end={850} />
            <h6>+</h6>
          </div>
          <div className="boder" />
          <span>عملاء سعداء</span>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="counter-text">
          <div className="d-flex align-items-center justify-content-center">
            <Counter end={9} />
            <h6>+</h6>
          </div>
          <div className="boder" />
          <span>سنوات الخبره</span>
        </div>
      </div>
      {/* <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="counter-text mb-0">
          <div className="d-flex align-items-center justify-content-center">
            <Counter end={36} />
            <h6>+</h6>
          </div>
          <div className="boder" />
          <span>Experts</span>
        </div>
      </div> */}
    </div>
  );
};
export default TerioCounter;
