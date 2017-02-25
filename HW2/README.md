Purpose
The purpose of this assignment is to start working with Node.js and become more familiar with
HTTP requests.
You will create a standard Node.js server to handle incoming HTTP requests and then respond with
information about the request. The server should be able to read incoming header and query
parameters and include this information in the response. The server should also only accept certain
incoming requests and block others.
You may use any of the standard packages included in Node.js or any third-party packages to
complete this assignment.
Requirements
• Create a Node.js server that accepts requests and creates responses and host it on Apigee.
– The server should accept GET, POST, PUT and DELETE requests. – Any other requests
coming in should be rejected.
• If the server accepts a request, it should respond with information about the request.
– The server should respond with the name and value of any query parameters sent in. If
no headers or query parameters are sent in, then the response should say so.
– Some headers are generated automatically, like host and user-agent. It’s fine to have
these appear in the response.
• If the server rejects a request, it should respond with a simple statement saying it doesn’t
support the HTTP method.
• The server should have four different URNs that only accept a given HTTP method, while
reject the other methods.
– /gets should only accept GET requests while rejecting others.
– /posts should only accept POST requests while rejecting others.
– /puts should only accept PUT requests while rejecting others.
– /deletes should only accept DELETE requests while rejecting others.
– Any requests made to the base URL (no URN specified) should also be rejected.
• Include a Postman project that can shows all the requirements have been met.
– This project should include valid requests, as well as requests that fail (sending a POST
request to /gets, etc.).
