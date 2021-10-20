import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function errorRespondHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      if (error.response.satus === 500) message = "Something went wrong";
      else message = error.response.message;

      console.log(message);
      toast(message);
      return Promise.reject(error);
    }
  }
}

export default errorRespondHandler;
