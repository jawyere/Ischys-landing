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

        <p className="graphSubtext">Approximate hourly water consumed</p>

        <div className="chartWrap">
          <svg
            className="hydrationChart"
            viewBox="0 0 260 150"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Hydration graph"
          >
            <defs>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9cffb8" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#9cffb8" stopOpacity="0.015" />
              </linearGradient>

              <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7fe6a5" />
                <stop offset="100%" stopColor="#7cc9ff" />
              </linearGradient>
            </defs>

            <line x1="22" y1="22" x2="238" y2="22" className="gridLine" />
            <line x1="22" y1="58" x2="238" y2="58" className="gridLine" />
            <line x1="22" y1="94" x2="238" y2="94" className="gridLine" />
            <line x1="22" y1="130" x2="238" y2="130" className="gridLine" />

            <path
              d="
                M 22 122
                L 68 46
                L 114 92
                L 160 58
                L 208 70
                L 238 28
                L 238 130
                L 22 130
                Z
              "
              fill="url(#areaFill)"
            />

            <path
              d="
                M 22 122
                L 68 46
                L 114 92
                L 160 58
                L 208 70
                L 238 28
              "
              fill="none"
              stroke="url(#lineStroke)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle cx="68" cy="46" r="4" className="chartPoint" />
            <circle cx="114" cy="92" r="4" className="chartPoint" />
            <circle cx="160" cy="58" r="4" className="chartPoint" />
            <circle cx="208" cy="70" r="4" className="chartPoint" />
            <circle cx="238" cy="28" r="5" className="chartPoint chartPointFinal" />
          </svg>

          <div className="chartLabels">
            <span>8:00 am</span>
            <span>12:00 pm</span>
            <span>4:00 pm</span>
            <span>8:00 pm</span>
          </div>
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