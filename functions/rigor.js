const moment = require("moment");
const fetch = require("node-fetch");

exports.handler = async function (event) {
  console.log(event);
  const { id } = event.queryStringParameters;
  const date = {
    start: moment().subtract(14, "days").format("MM-DD"),
    end: moment().format("MM-DD"),
  };

  function generateDataEndpoint(id, startDate, endDate) {
    return `https://monitoring.rigor.com/api/v2/metrics/data.json?from=2021-${startDate}T03:13:36.823Z&to=2021-${endDate}T03:13:36.823Z&segment=status&metrics[]=median_first_contentful_paint_time_ms&metrics[]=median_first_byte_time_ms&metrics[]=median_start_render_ms&metrics[]=median_first_interactive_time_ms&metrics[]=median_speed_index&metrics[]=median_lighthouse_performance_score&metrics[]=median_largest_contentful_paint_time_ms&metrics[]=median_total_blocking_time_ms&metrics[]=median_cumulative_layout_shift&status[]=success&status[]=failure&check_ids[]=${id}&interval=24h&grouping[]=page&check_type=real_browser&type=line`;
  }

  const headers = {
    method: "GET",
    headers: {
      "API-KEY": process.env.RIGOR_API_KEY,
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    generateDataEndpoint(id, date.start, date.end),
    headers
  );
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify({ data: data }),
  };
};
