# Chatbot Flow Builder

## Description

The Chatbot Flow Builder is a React-based application that allows users to create and manage chatbot flows. The application features a drag-and-drop interface for adding and connecting text message nodes, a settings panel for editing node content, and a save button with validation to ensure flow integrity.

## Features

1. **Text Node**:

   - Represents a text message within the chatbot flow.
   - Supports multiple instances in a single flow.
   - Nodes can be added by dragging and dropping from the Nodes Panel.

2. **Nodes Panel**:

   - Lists all available node types.
   - Initially includes only the Text Node, designed for future extensibility.

3. **Edges**:

   - Connect nodes to define the flow sequence.
   - Includes source and target handles for managing connections.

4. **Source Handle**:

   - Each node has one source handle.
   - Allows only one outgoing edge per source handle.

5. **Target Handle**:

   - Each node has one or more target handles.
   - Allows multiple incoming edges per target handle.

6. **Settings Panel**:

   - Appears when a node is selected.
   - Provides a text field to edit the content of the selected Text Node.

7. **Save Button**:

   - Validates and saves the current chatbot flow.
   - Displays an error if multiple nodes have empty target handles.

8. **Extensibility Considerations**

   - The nodes panel and flow builder are designed to easily add new node types.
   - The components are modular and reusable for future enhancements.

9. **Error Handling**

   - The flow is validated before saving.
   - Clear, user-friendly error messages are provided for validation issues.

## Technologies Used

- **React**: For building the user interface.
- **React Flow**: For managing the node-based editor.
- **JavaScript**: Used for implementation.
- **CSS/Styled Components**: For styling the application.

## Images
![Text Node](src/Assests/Images/Text%20Node.png)
![Connect Nodes](src/Assests/Images/Connect%20Nodes.png)
![Multiple Edges](src/Assests/Images/Multiple%20Edges.png)
![Error Handling](src/Assests/Images/Error%20Handling.png)

## Project Structure
```
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
├── public
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ ├── robotics.png
│ ├── robots.txt
├── src
│ ├── App.css
│ ├── App.js
│ ├── App.test.js
│ ├── Components
│ │ ├── CustomNode
│ │ │ ├── CustomNode.css
│ │ │ ├── CustomNode.jsx
│ │ ├── Header
│ │ │ ├── Header.css
│ │ │ ├── Header.jsx
│ │ ├── Sidebar
│ │ │ ├── NodePanel.jsx
│ │ │ ├── SettingsPanel.jsx
│ │ │ ├── Sidebar.css
│ ├── Constants
│ │ ├── Constants.js
│ ├── Hook
│ │ ├── useDropNode.js
│ ├── index.css
│ ├── index.js
│ ├── reportWebVitals.js
│ ├── setupTests.js
```
## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/shabbiryahya/Chatbot-flow-builder.git
   cd Chatbot-flow-builder
   ```

2. **Install Dependencies:**

   ```
   npm install
   ```

3. **Start the Development Server:**
   ```
   npm start
   ```
4. **Build for Production:**
   ```
   npm run build
   ```

[GitHub Repository](https://github.com/shabbiryahya/Chatbot-flow-builder) <br>
[Deployed Link](https://bites-chat-bot.netlify.app/)

