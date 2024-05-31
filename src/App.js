import { useState } from "react";
import "./App.css";
import "reactflow/dist/style.css";
import useDropNode from "./Hook/useDropNode";
import NodePanel from "./Components/Sidebar/NodePanel";
import SettingsPanel from "./Components/Sidebar/SettingsPanel";
import Header from "./Components/Header/Header";
import CustomNode from "./Components/CustomNode/CustomNode";
import { initialEdges } from "./Constants/Constants";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useEdgesState,
} from "reactflow";

// object that serves as a mapping between the type of nodes and their corresponding component.
const nodeTypes = {
  customNode: CustomNode,
};

function App() {
  // State
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);

  // Custom hook
  const { nodeCount, isOver, drop, nodes, onNodesChange, setNodes } =
    useDropNode();

  // function is called when a new edge is created in the flowchart.
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  // function is called when a node in the flowchart is clicked
  const handleNodeClick = (event, node) => {
    setSelectedNode(node);
    setShowSettingsPanel(true);
  };

  // function is called when the text of a node in the flowchart is changed.
  const handleNodeTextChange = (id, text) => {
    setNodes((nds) =>
      nds?.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, label: text } } : node
      )
    );
  };

  // function that hides the settings panel and clears the currently selected node
  const hideSettingsPanel = () => {
    setShowSettingsPanel(false);
    setSelectedNode(null);
  };

  return (
    <>
      {/* Header component */}
      <Header nodes={nodes} edges={edges} />

      <div className="app">
        <div className="panel">
          {/* Conditional rendering for SettingsPanel or NodePanel */}
          {showSettingsPanel ? (
            <SettingsPanel
              node={selectedNode}
              onTextChange={handleNodeTextChange}
              hidePanel={hideSettingsPanel}
            />
          ) : (
            <NodePanel nodeCount={nodeCount} />
          )}
        </div>

        {/* Main flow container */}
        <div
          className="flow"
          ref={drop}
          style={{ border: isOver ? "1px dashed #ddd" : "none" }}
        >
          {/* ReactFlow component */}
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={handleNodeClick}
            nodeTypes={nodeTypes}
            fitView
          >
            {/* ReactFlow components */}
            <MiniMap />
            <Controls />
            <Background />
          </ReactFlow>
        </div>
      </div>
    </>
  );
}

export default App;
