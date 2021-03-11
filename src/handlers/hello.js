const { hello } = require("../../output/Handler.Hello");

exports.helloHandler = async (event) => {
  if (event.httpMethod !== "GET") {
    throw new Error(
      `helloHandler only accepts GET method, you tried: ${event.httpMethod} method.`
    );
  }
  // All log statements are written to CloudWatch
  console.info("received:", event);

  // Get id and name from the body of the request
  // const body = JSON.parse(event.body);

  const response = {
    statusCode: 200,
    body: JSON.stringify(hello(event.queryStringParameters?.iam)),
  };

  // All log statements are written to CloudWatch
  console.info(
    `response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`
  );
  return response;
};
