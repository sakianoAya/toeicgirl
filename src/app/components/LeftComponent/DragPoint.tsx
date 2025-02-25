import { Graphics } from 'pixi.js';
import { useEffect, useState, useRef } from 'react';

interface DragPointProps {
  x: number;
  y: number;
  maxDistance: number;
  onUpdate: (x: number, y: number) => void;
}

const DragPoint = ({ x, y, maxDistance, onUpdate }: DragPointProps) => {
  const [position, setPosition] = useState({ x, y });
  const controlRef = useRef<Graphics | null>(null);
  let lastX = x, lastY = y;
  let dragging = false;

  useEffect(() => {
    const control = new Graphics();
    control.beginFill(0xff00ff);
    control.drawCircle(0, 0, 12);
    control.endFill();
    control.x = x;
    control.y = y;

    control.eventMode = 'static';

    control.on('pointerdown', (event) => {
      dragging = true;
      lastX = event.x;
      lastY = event.y;
    });

    control.on('pointermove', (event) => {
      if (dragging) {
        let newX = control.x + (event.x - lastX);
        let newY = control.y + (event.y - lastY);

        const dx = newX - x;
        const dy = newY - y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > maxDistance) {
          const angle = Math.atan2(dy, dx);
          newX = x + Math.cos(angle) * maxDistance;
          newY = y + Math.sin(angle) * maxDistance;
        }

        control.x = newX;
        control.y = newY;
        setPosition({ x: newX, y: newY });
        onUpdate(newX, newY);
        lastX = event.x;
        lastY = event.y;
      }
    });

    control.on('pointerup', () => {
      dragging = false;
      control.x = x;
      control.y = y;
      setPosition({ x, y });
      onUpdate(x, y);
    });

    controlRef.current = control;
    return () => {
      control.destroy();
    };
  }, [x, y, maxDistance, onUpdate]);

  return controlRef.current;
};

export default DragPoint;
