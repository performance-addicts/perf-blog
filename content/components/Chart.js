import React from "react";
import AreaComp from "./AreaComp";

export default function Chart({ data, xAxisKey }) {
  return data.series.map((serie, index) => {
    serie.data.forEach((point) => {
      // 2021-03-21
      if (point.time.length > 10) {
        point.time = point.time.substring(2, 10);
      }
    });
    return (
      <div key={serie.position}>
        <div>
          <h3>
            Page {index + 1}:{" "}
            <a
              href={serie.data[0].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {serie.data[0].url}
            </a>
          </h3>
        </div>
        <AreaComp
          serie={serie}
          title="Lighthouse Performance Score"
          height={500}
          xAxisKey={xAxisKey}
          dataKey="median_lighthouse_performance_score"
          id="lh"
          hex="#f1a208"
        />
        <AreaComp
          serie={serie}
          title="Largest Contentful Paint"
          height={500}
          xAxisKey={xAxisKey}
          id="lcp"
          dataKey="median_largest_contentful_paint_time_ms"
          hex="#052f5f"
        />
        <AreaComp
          serie={serie}
          title="Cumulative Layout Shift"
          height={500}
          xAxisKey={xAxisKey}
          id="cls"
          dataKey="median_cumulative_layout_shift"
          hex="#06a77d"
        />
        <AreaComp
          serie={serie}
          title="Total Blocking Time"
          height={500}
          id="tbt"
          xAxisKey={xAxisKey}
          dataKey="median_total_blocking_time_ms"
          hex="#d5c67a"
        />
      </div>
    );
  });
}
