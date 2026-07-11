import React, { useRef, useState } from 'react';
import './style.css';

export default function Box() {
  const size = 9;
  const columns = Math.sqrt(size);
  const middleIndex = Math.floor(size / 2);
  const totalSelectable = size - 1;

  const selectedOrder = useRef([]);
  const isAnimating = useRef(false);

  const [boxes, setBoxes] = useState(() =>
    Array.from({ length: size }, (_, index) => ({
      id: index + 1,
      selected: false,
      disabled: index === middleIndex,
    }))
  );

  const handleBox = (box) => {
    if (isAnimating.current) return;
    if (box.disabled || box.selected) return;

    setBoxes((prev) =>
      prev.map((item) =>
        item.id === box.id ? { ...item, selected: true } : item
      )
    );

    selectedOrder.current.push(box.id);

    if (selectedOrder.current.length === totalSelectable) {
      isAnimating.current = true;
      unselectBoxes();
    }
  };

  const unselectBoxes = () => {
    const interval = setInterval(() => {
      const id = selectedOrder.current.pop();

      if (id === undefined) {
        clearInterval(interval);
        isAnimating.current = false;
        return;
      }

      setBoxes((prev) =>
        prev.map((box) => (box.id === id ? { ...box, selected: false } : box))
      );
    }, 500);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 60px)`,
        gap: 10,
      }}
    >
      {boxes.map((box) => (
        <div
          key={box.id}
          onClick={() => handleBox(box)}
          style={{
            width: 50,
            height: 50,
            border: box.disabled ? 'none' : '2px solid black',
            backgroundColor: box.disabled
              ? 'transparent'
              : box.selected
              ? 'blue'
              : 'white',
            cursor: box.disabled || isAnimating.current ? 'default' : 'pointer',
          }}
        />
      ))}
    </div>
  );
}
