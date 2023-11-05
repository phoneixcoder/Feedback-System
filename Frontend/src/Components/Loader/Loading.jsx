import ReactLoading from "react-loading";

const Loading = ({ height = "80px", width = "80px" }) => {
  return (
    <div className={`flex items-center justify-center w-full opacity-100`}>
      <ReactLoading type={'bubbles'} color="#fff" height = {height} width={width}/>
    </div>
  );
};

export default Loading;
