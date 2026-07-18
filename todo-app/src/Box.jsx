import React, { useCallback, useRef, useState } from 'react';

export default function Box() {
  const SIZE = 9;
  const COLUMNS = Math.sqrt(SIZE);
  const MIDDLE = Math.floor(SIZE / 2);
  const TOTAL = SIZE - 1;

  const selectedOrder = useRef([]);
  const isAnimating = useRef(false);

  const [boxes, setBoxes] = useState(() =>
    Array.from({ length: SIZE }, (_, index) => ({
      id: index + 1,
      selected: false,
      disabled: index === MIDDLE,
    }))
  );

  const startAnimation = useCallback(() => {
    let index = selectedOrder.current.length - 1;

    const animate = () => {
      if (index < 0) {
        isAnimating.current = false;
        selectedOrder.current = [];
        return;
      }

      const id = selectedOrder.current[index];

      setBoxes((prev) =>
        prev.map((box) => (box.id === id ? { ...box, selected: false } : box))
      );

      index--;
      setTimeout(animate, 500);
    };

    animate();
  }, []);

  const handleSelect = useCallback((box) => {
    if (isAnimating.current) return;
    if (box.disabled || box.selected) return;

    selectedOrder.current.push(box.id);

    setBoxes((prev) =>
      prev.map((item) =>
        item.id === box.id ? { ...item, selected: true } : item
      )
    );

    if (selectedOrder.current.length === TOTAL) {
      isAnimating.current = true;
      setTimeout(() => {
        startAnimation();
      }, 300);
    }
  }, [TOTAL, startAnimation]);

  return (
    <div>
      <h2>Reverse Selected Box Example</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${COLUMNS}, 60px)`,
          gap: 10,
        }}
      >
        {boxes.map((box) => (
          <div
            key={box.id}
            onClick={() => handleSelect(box)}
            style={{
              width: 50,
              height: 50,
              border: box.disabled ? 'none' : '2px solid black',
              backgroundColor: box.disabled
                ? 'transparent'
                : box.selected
                  ? 'blue'
                  : 'white',
              cursor: box.disabled ? 'default' : 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
}
