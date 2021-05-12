export function endpoint() {
  let url = `/.netlify/functions/`;

  console.log(process.env);

  if (process.env.ENVIRONMENT === "development") {
    url = `http://localhost:8888${url}`;
  }

  return url;
}
