import { TailSpin } from "react-loader-spinner";

const Loader = () => (
  <div className="flex justify-center">
    <TailSpin
      visible={true}
      height="100"
      width="100"
      color="#6376F1"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);

export default Loader;
