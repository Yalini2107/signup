import classNames from "classnames";
import "./style.scss";

const Container = ({ parameter = "exclude", children }) => {
 

  return <div className={classNames("container", parameter)}>{children}</div>;
};

export default Container;