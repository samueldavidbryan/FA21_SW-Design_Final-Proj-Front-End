export function processResponse(result, status) {
    // Can grab any DIV or SPAN HTML element and can then manipulate its
    // contents dynamically via javascript
    var js = JSON.parse(result);
    var statusCode  = js["statusCode"];

    // Update computation result
    if (status === 200) {
      return statusCode;
    } else {
      var msg = js["error"];   // only exists if error...
      return "error:" + msg;
    }
  }