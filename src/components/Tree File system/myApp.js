import React, { useState } from "react";

// Sample data to represent the file system structure
const fileSystemData = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        { name: "index.js", type: "file" },
        { name: "App.js", type: "file" },
        {
          name: "components",
          type: "folder",
          children: [
            { name: "Header.js", type: "file" },
            { name: "Footer.js", type: "file" },
          ],
        },
      ],
    },
    {
      name: "public",
      type: "folder",
      children: [
        { name: "index.html", type: "file" },
        { name: "favicon.ico", type: "file" },
      ],
    },
    { name: "package.json", type: "file" },
  ],
};

// Recursive component to render tree structure
const TreeNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle folder open/close
  const toggleOpen = () => {
    if (node.type === "folder") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <div
        onClick={toggleOpen}
        style={{ cursor: node.type === "folder" ? "pointer" : "default" }}
      >
        {node.type === "folder" ? (isOpen ? "📂" : "📁") : "📄"} {node.name}
      </div>
      {isOpen && node.children && (
        <div style={{ marginLeft: "20px" }}>
          {node.children.map((childNode, index) => (
            <TreeNode key={index} node={childNode} />
          ))}
        </div>
      )}
    </div>
  );
};

// Main component to render the entire file tree
const FileTree = () => {
  return (
    <div>
      <h2>File System Structure</h2>
      <TreeNode node={fileSystemData} />
    </div>
  );
};

export default FileTree;
