import { useSelector } from "react-redux";

const NameValue = () => {
  const name = useSelector((state) => state.nameReducer.name);
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

export default NameValue;
