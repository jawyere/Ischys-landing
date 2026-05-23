import HydrationMiniChart from "./HydrationMiniChart";
import "./ProductVisual.css";

function ProductVisual() {
  return (
    <div className="heroProduct">
      <div className="graphCard">
        <div className="graphHeader">
          <div>
            <p className="graphEyebrow">Today&apos;s intake</p>
            <h4 className="graphMetric">54 oz</h4>
          </div>

          <div className="graphBadge">+12%</div>
        </div>

        <p className="graphSubtext">Hover the chart to preview hourly intake.</p>

        <div className="chartWrap">
          <HydrationMiniChart />
        </div>
      </div>

      <div className="bottleWrap">
        <div className="bottleCap"></div>

        <div className="bottle">
          <div className="waterFill"></div>
        </div>

        <div className="sensorBase">
          <div className="sensorTopLip"></div>
          <div className="sensorBody">
            <span className="sensorLabel">Weight Sensor Base</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductVisual;
