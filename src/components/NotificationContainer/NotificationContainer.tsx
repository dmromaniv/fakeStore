import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify/unstyled";

const NotificationContainer = () => (
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Slide}
  />
);

export default NotificationContainer;
