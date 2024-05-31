import "./Header.css";
import { PropTypes } from "prop-types";
import toast from "react-hot-toast";
const Header = ({ nodes, edges }) => {
  const handleSave = () => {
    // Check if there are more than 1 node and some nodes have no target edges accordingly show an error otherwise show a success toast
    const nodesWithNoTarget = nodes?.filter(
      (node) => !edges.some((edge) => edge?.target === node?.id)
    );
    if (nodes?.length > 1 && nodesWithNoTarget?.length > 1) {
      toast.error("cannot save flow.");
    } else {
      toast.success("flow saved successfully!");
    }
  };
  return (
    <div className="header">
      <button onClick={handleSave} className="save-button">
        Save Changes
      </button>
    </div>
  );
};

// type checking of received props
Header.propTypes = {
  nodes: PropTypes.array.isRequired,
  edges: PropTypes.array.isRequired,
};

export default Header;
