// React
import React, { useState } from "react";

// Style
import "./App.css";

// Component
import Modal from "./Modal/Modal";

export default function App() {
  // useState
  const [show, setShow] = useState(false);

  // Function
  const handleOnClick = () => {
    setShow(true)
  }
  return (
    <div>

      <Modal
        title={"Modal"}
        onClose={() => {
          setShow(false);
        }}
        show={show}
      >
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>LastName</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Lorem</td>
              <td>Ipsum</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ipsum</td>
              <td>Lorem</td>
            </tr>
          </tbody>
        </table>
      </Modal>
      <button onClick={handleOnClick}>Click Me!</button>
    </div>
  );
}
