import { useMemo, useState } from "react";
import "./HydrationMiniChart.css";

const hydrationData = [
  { time: "8 AM", oz: 6, cur: 6, x: 22, y: 100 },
  { time: "10 AM", oz: 19, cur: 13, x: 68, y: 60 },
  { time: "12 PM", oz: 27, cur: 8, x: 114, y: 90 },
  { time: "2 PM", oz: 37, cur: 10, x: 160, y: 67 },
  { time: "4 PM", oz: 46, cur: 9, x: 208, y: 70 },
  { time: "8 PM", oz: 63, cur: 17, x: 238, y: 28 },
];

function HydrationMiniChart() {
  const [activeIndex, setActiveIndex] = useState(hydrationData.length - 1);
  const activePoint = hydrationData[activeIndex];

  const paths = useMemo(() => {
    const linePath = hydrationData
      .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
      .join(" ");

    const areaPath = `${linePath} L 238 130 L 22 130 Z`;

    return { linePath, areaPath };
  }, []);

  return (
    <div className="miniChartCard">
      <div className="miniChartTopRow">
        <div className="miniChartStatusRow">
          <span className="miniChartLabel">Selected point</span>
          <span className="miniChartTime">{activePoint.time}</span>
        </div>

        <div className="miniChartValues" aria-live="polite">
          <div className="miniChartValue">
            <small>Hour</small>
            <strong>{activePoint.cur} oz</strong>
          </div>

          <div className="miniChartValue">
            <small>Total</small>
            <strong>{activePoint.oz} oz</strong>
          </div>
        </div>
      </div>

      <svg
        className="hydrationChart"
        viewBox="0 0 260 150"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Interactive hydration forecast chart"
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

        <path d={paths.areaPath} fill="url(#areaFill)" />

        <path
          d={paths.linePath}
          fill="none"
          stroke="url(#lineStroke)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <line
          x1={activePoint.x}
          y1="22"
          x2={activePoint.x}
          y2="130"
          className="activeGuide"
        />

        {hydrationData.map((point, index) => (
          <g key={point.time}>
            <circle
              cx={point.x}
              cy={point.y}
              r={index === activeIndex ? 7 : 4.5}
              className={`chartPoint ${index === activeIndex ? "isActive" : ""}`}
            />

            <circle
              cx={point.x}
              cy={point.y}
              r="17"
              className="chartHitArea"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              tabIndex="0"
              aria-label={`${point.time}: current hour ${point.cur} ounces, total ${point.oz} ounces`}
            />
          </g>
        ))}
      </svg>

      <div className="chartLabels">
        <span>8 AM</span>
        <span>10 AM</span>
        <span>12 PM</span>
        <span>2 PM</span>
        <span>4 PM</span>
        <span>8 PM</span>
      </div>
    </div>
  );
}

export default HydrationMiniChart;