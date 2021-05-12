const moment = require("moment");
const fetch = require("node-fetch");

exports.handler = async function (event) {
  console.log(event);
  const { id, start, end } = event.queryStringParameters;
  const date = {
    start: moment().subtract(14, "days").format("YYYY-MM-DD"),
    end: moment().format("YYYY-MM-DD"),
  };

  function generateDataEndpoint(id, startDate, endDate) {
    return `https://monitoring.rigor.com/api/v2/metrics/data.json?from=${startDate}T06:01:00.823Z&to=${endDate}T23:59:00.823Z&segment=status&metrics[]=median_first_contentful_paint_time_ms&metrics[]=median_first_byte_time_ms&metrics[]=median_start_render_ms&metrics[]=median_first_interactive_time_ms&metrics[]=median_speed_index&metrics[]=median_lighthouse_performance_score&metrics[]=median_largest_contentful_paint_time_ms&metrics[]=median_total_blocking_time_ms&metrics[]=median_cumulative_layout_shift&status[]=success&status[]=failure&check_ids[]=${id}&interval=24h&grouping[]=page&check_type=real_browser&type=line`;
  }

  const headers = {
    method: "GET",
    headers: {
      "API-KEY": process.env.RIGOR_API_KEY,
      "Content-Type": "application/json",
    },
  };

  let url = generateDataEndpoint(id, date.start, date.end);
  console.log(date.start, date.end);

  if (start !== undefined && end !== undefined) {
    url = generateDataEndpoint(id, start, end);
  }

  console.log(url);

  const response = await fetch(url, headers);
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify({ data: data }),
  };
};
