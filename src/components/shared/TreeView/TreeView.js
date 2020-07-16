import React, { useState } from "react";
import "./treeview.css";

const TreeViewItem = ({ item, parent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNodeClick = () => {
    setIsExpanded((s) => !s);
  };

  const renderIcon = (item) => {
    return item.children ? (
      <span
        className={`fas fa-chevron-${
          isExpanded ? "up" : "down"
        } tree-view-icon`}
      ></span>
    ) : null;
  };

  const renderDownloadBtn = (item) => {
    return item.children ? null : (
      <div className="tree-view-icon icon-btn">
        <span className="fas fa-download"></span>
      </div>
    );
  };

  return (
    <li key={item.id} parentid={parent} className="tree-view-item">
      <div
        className={
          item.children ? "tree-view-content haschildren" : "tree-view-content"
        }
        onClick={handleNodeClick}
        parentid={parent}
      >
        {renderIcon(item)}
        <div className="tree-view-text">
          <p className="tree-view-title">{item.title}</p>
          {item.obj && (
            <small className="tree-view-obj">Objective : {item.obj}</small>
          )}
        </div>
        {renderDownloadBtn(item)}
      </div>
      {isExpanded && item.children && (
        <TreeView node={item.children} parent={item.id} />
      )}
    </li>
  );
};

const TreeView = ({ node, parent }) => {
  return (
    <div className="tree-view" parentid={parent}>
      <ul className="tree-view-head" parentid={parent}>
        {node.map((item) => (
          <TreeViewItem item={item} parent={parent} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

TreeView.defaultProps = {
  parent: "root",
};

export default TreeView;
