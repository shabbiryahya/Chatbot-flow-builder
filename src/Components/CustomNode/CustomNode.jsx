import "./CustomNode.css";
import { PropTypes } from "prop-types";
import { Handle, Position } from "reactflow";
import { BiMessageRoundedDots } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";

const CustomNode = ({ data }) => {
  return (
    <div className="custom-node">
      {/* provided by the react-flow library used for defining a handle on the left side of the node */}
      <Handle type="target" position={Position.Left} id="a" />

      {/* contains the content of the custom node */}
      <div className="custom-node-content">
        <div className="node-head">
          <div className="head-message-text">
            <BiMessageRoundedDots />
            <h6>Send Message</h6>
          </div>
          <RiWhatsappFill />
        </div>
        <div className="node-message">{data?.label}</div>
      </div>

      {/* provided by the react-flow library used for defining a handle on the right side of the node */}
      <Handle type="source" position={Position?.Right} id="b" />
    </div>
  );
};

// type checking of received props
CustomNode.propTypes = {
  data: PropTypes.object.isRequired,
};
export default CustomNode;
