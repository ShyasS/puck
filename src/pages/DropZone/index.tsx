import { ReactNode, CSSProperties } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';

// Define the types for the props
interface DropZoneProps {
  id: string; // id must be a string
  accepts: string[]; // accepts is an array of strings
  onDrop: (item: any, monitor: DropTargetMonitor) => void; // onDrop is a function that accepts an item and monitor
  style?: CSSProperties; // optional style, CSS properties
  children?: ReactNode; // optional children
}

const DropZone: React.FC<DropZoneProps> = ({ id, accepts, onDrop, style, children }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: accepts,
    drop: (item, monitor) => onDrop(item, monitor),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  let backgroundColor = '#fff';
  if (isActive) {
    backgroundColor = '#f0f0f0'; // Highlight when an item is hovered over
  } else if (canDrop) {
    backgroundColor = '#f9f9f9'; // Indicate that this zone can accept a drop
  }

  return (
    <div
      ref={drop as unknown as React.Ref<HTMLDivElement>} // Use unknown to bypass strict type checking
      id={id}
      style={{ backgroundColor, padding: '10px', border: '1px solid #ccc', ...style }}
    >
      {children}
    </div>
  );
};

export default DropZone;
