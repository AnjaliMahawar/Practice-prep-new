import React, { useState } from 'react';

function DragAndDrop() {
  const [draggedItem, setDraggedItem] = useState(null);
  const [container1Items, setContainer1Items] = useState(['Item 1', 'Item 2']);
  const [container2Items, setContainer2Items] = useState(['Item 3', 'Item 4']);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, container) => {
    e.preventDefault();
    if (draggedItem) {
      if (container === 'container1') {
        setContainer1Items([...container1Items, draggedItem]);
        setContainer2Items(container2Items.filter(item=>item !== draggedItem))
      } else if (container === 'container2') {
        setContainer2Items([...container2Items, draggedItem]);
        setContainer1Items(container1Items.filter(item=>item !== draggedItem))
      }
      setDraggedItem(null);
    }
  };

  return (
    <div>
      <div
        style={{ border: '1px solid black', padding: '10px', margin: '10px' }}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 'container1')}
      >
        <h2>Container 1</h2>
        {container1Items.map((item, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            style={{ border: '1px solid gray', padding: '5px', margin: '5px', cursor: 'pointer' }}
          >
            {item}
          </div>
        ))}
      </div>
      <div
        style={{ border: '1px solid black', padding: '10px', margin: '10px' }}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 'container2')}
      >
        <h2>Container 2</h2>
        {container2Items.map((item, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            style={{ border: '1px solid gray', padding: '5px', margin: '5px', cursor: 'pointer' }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DragAndDrop;
