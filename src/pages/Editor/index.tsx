import React, { useState } from "react";
import { Puck, ComponentConfig, Render, Data } from "@measured/puck";
import "@measured/puck/puck.css";
import DropZone from '../DropZone';
// import { DropZone } from "@measured/puck";

// Puck component config with ColumnsBlock, CardBlock, and other components
const config: {
  components: {
    [key: string]: ComponentConfig<any, any>;
  };
} = {
  components: {
    ColumnsBlock: {
      fields: {
        columnCount: {
          type: "number",
          label: "Number of Columns",
          min: 2,
          max: 4,
        },
        children: {
          type: "array", // Defines the type as an array
          label: "Column Content",
          itemType: "component", // Specifies that the items are components
        },
      },
      render: ({ columnCount, children }) => {
        const columns = Array.from({ length: columnCount || 2 }).map((_, index) => {
          const childContent = children && children.length > index ? children[index] : undefined;
    
          return (
            <div
              key={index}
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid #ddd",
                margin: "5px",
                textAlign: "center",
              }}
            >
              {childContent ? (
                <Render config={config} data={childContent} /> // Render child component
              ) : (
                `Column ${index + 1}`
              )}
            </div>
          );
        });
    
        return (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "stretch" }}>
            {columns}
          </div>
        );
      },
    },    
    CardBlock: {
      fields: {
        title: {
          type: "text",
          label: "Card Title",
        },
        description: {
          type: "text",
          label: "Card Description",
        },
        imageUrl: {
          type: "text",
          label: "Image URL",
        },
        buttonLabel: {
          type: "text",
          label: "Button Label",
        },
        cardWidth: {  // Updated field name for card width
          type: "number",
          label: "Card Width",
          default: 300, // Default value for card width
        },
        cardHeight: {  // Updated field name for card height
          type: "number",
          label: "Card Height",
          default: 200, // Default value for card height
        },
        imageWidth: {
          type: "number",
          label: "Image Width",
          default: 100, // Default value for image width
        },
        imageHeight: {
          type: "number",
          label: "Image Height",
          default: 100, // Default value for image height
        },
        alignment: {
          type: "select",
          label: "Alignment",
          options: [
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
            { label: "Up", value: "up" },
            { label: "Down", value: "down" },
            { label: "Center", value: "center" },
          ],
        },
        position: {
          type: "object",
          label: "Position",
          fields: {
            x: { type: "number", label: "X Position" },
            y: { type: "number", label: "Y Position" },
            zIndex: { type: "number", label: "Z-Index" },
          },
        },
        overflow: {
          type: "select",
          label: "Overflow",
          options: [
            { label: "Auto", value: "auto" },
            { label: "Hidden", value: "hidden" },
            { label: "Scroll", value: "scroll" },
          ],
        },
        titleFontSize: {
          type: "number",
          label: "Title Font Size (px)",
          default: 24, // Default value
        },
        titleColor: {
          type: "text",
          label: "Title Color",
          default: "#000000", // Default value
        },
        descriptionFontSize: {
          type: "number",
          label: "Description Font Size (px)",
          default: 16, // Default value
        },
        descriptionColor: {
          type: "text",
          label: "Description Color",
          default: "#555555", // Default value
        },
      },
      render: ({
        title,
        description,
        imageUrl,
        buttonLabel,
        cardWidth,
        cardHeight,
        imageWidth,
        imageHeight,
        alignment = "left",
        position = { x: 0, y: 0, zIndex: 1 },
        overflow = "auto",
        titleFontSize = 24,
        titleColor = "#000000",
        descriptionFontSize = 16,
        descriptionColor = "#555555",
      }: {
        title: string;
        description: string;
        imageUrl: string;
        buttonLabel: string;
        cardWidth: number; // Use cardWidth for the card's width
        cardHeight: number; // Use cardHeight for the card's height
        imageWidth: number; // Width of the image
        imageHeight: number; // Height of the image
        alignment: "left" | "right" | "up" | "down" | "center";
        position: { x: number; y: number; zIndex: number };
        overflow: "auto" | "hidden" | "scroll";
        titleFontSize: number; // Font size for title
        titleColor: string; // Color for title
        descriptionFontSize: number; // Font size for description
        descriptionColor: string; // Color for description
      }) => {
        const [isDragging, setIsDragging] = useState(false);
        const [offset, setOffset] = useState({ x: 0, y: 0 });
        const [cardPosition, setCardPosition] = useState({ x: position.x, y: position.y });
    
        const handleMouseDown = (e: React.MouseEvent) => {
          setIsDragging(true);
          setOffset({
            x: e.clientX - cardPosition.x,
            y: e.clientY - cardPosition.y,
          });
        };
    
        const handleMouseMove = (e: MouseEvent) => {
          if (isDragging) {
            setCardPosition({
              x: e.clientX - offset.x,
              y: e.clientY - offset.y,
            });
          }
        };
    
        const handleMouseUp = () => {
          setIsDragging(false);
        };
    
        React.useEffect(() => {
          window.addEventListener('mousemove', handleMouseMove);
          window.addEventListener('mouseup', handleMouseUp);
    
          return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
          };
        }, [isDragging, offset]);
    
        const alignmentStyles: Record<"left" | "right" | "up" | "down" | "center", React.CSSProperties> = {
          left: { justifyContent: "flex-start" },
          right: { justifyContent: "flex-end" },
          up: { alignItems: "flex-start" },
          down: { alignItems: "flex-end" },
          center: { justifyContent: "center", alignItems: "center" },
        };
    
        return (
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              boxSizing: "border-box", // Include padding in width and height
              width: cardWidth ? `${cardWidth}px` : "300px", // Apply dynamic card width
              height: cardHeight ? `${cardHeight}px` : "auto", // Apply dynamic card height
              display: "flex",
              flexDirection: alignment === "up" || alignment === "down" ? "column" : "row",
              ...alignmentStyles[alignment],
              position: "relative", // Use absolute positioning to allow movement
              left: `${cardPosition.x}px`, // Set left position based on drag
              top: `${cardPosition.y}px`, // Set top position based on drag
              margin: "15px 0", // Add margin for separation between components
              overflow: overflow === "scroll" ? "scroll" : "hidden", // Handle overflow for the entire card
            }}
            onMouseDown={handleMouseDown} // Start dragging on mouse down
          >
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Card Image"
                style={{
                  width: imageWidth ? `${imageWidth}px` : "100%", // Set image width
                  height: imageHeight ? `${imageHeight}px` : "auto", // Set image height
                  borderRadius: "8px 8px 0 0",
                  objectFit: "cover",
                }}
              />
            )}
            <div
              style={{
                flexGrow: 1,
                overflow: overflow === "scroll" ? "scroll" : "hidden",
                padding: "8px",
                textAlign: "left",
              }}
            >
              <h2 style={{ fontSize: `${titleFontSize}px`, color: titleColor, margin: "16px 0" }}>
                {title || "Default Title"}
              </h2>
              <p style={{ fontSize: `${descriptionFontSize}px`, color: descriptionColor }}>
                {description || "This is a default description for the card."}
              </p>
            </div>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "8px",
              }}
            >
              {buttonLabel || "Click Me"}
            </button>
          </div>
        );
      },
    },



     LabelBlock: {
      fields: {
        text: {
          type: "text",
          label: "Label Text",
        },
        color: {
          type: "text",
          label: "Text Color",
        },
      },
      render: ({ text, color }) => (
        <label style={{ color: color || "black" }}>{text || "Label"}</label>
      ),
    },
    // TextBlock: A block for displaying text
    TextBlock: {
      fields: {
        text: {
          type: "text",
          label: "Text Content",
        },
        fontSize: {
          type: "number",
          label: "Font Size",
          min: 10,
          max: 50,
        },
      },
      render: ({ text, fontSize }) => (
        <p style={{ fontSize: fontSize || 16 }}>{text || "Default Text"}</p>
      ),
    },
    // ImageBlock: A simple image component
    ImageBlock: {
      fields: {
        src: {
          type: "text",
          label: "Image URL",
        },
        alt: {
          type: "text",
          label: "Alt Text",
        },
        width: {
          type: "number",
          label: "Width",
        },
        height: {
          type: "number",
          label: "Height",
        },
      },
      render: ({ src, alt, width, height }) => (
        <img
          src={src}
          alt={alt}
          width={width || "auto"}
          height={height || "auto"}
          style={{ maxWidth: "100%" }}
        />
      ),
    },
  },
};

// Initial data for ColumnsBlock and CardBlock combined
const initialData: Data = {
  root: {
    type: "ColumnsBlock",
    props: {
      columnCount: 2, // Set the default number of columns
      children: [
        {
          type: "CardBlock", // First column contains a CardBlock
          props: {
            title: "Card 1",
            description: "This is a sample card in column 1.",
            imageUrl: "https://via.placeholder.com/300",
            buttonLabel: "Learn More",
          },
        },
        {
          type: "CardBlock", // Second column contains another CardBlock
          props: {
            title: "Card 2",
            description: "This is a sample card in column 2.",
            imageUrl: "https://via.placeholder.com/300",
            buttonLabel: "Explore",
          },
        },
      ],
    },
    children: [],
  },
};

// Save function (implement as per your requirements)
const save = (data: Data) => {
  console.log("Saved data:", data); // Implement your save logic here
};

// Puck Editor component
const   Editor: React.FC = () => {
  const [data, setData] = useState<Data>(initialData); // State to manage the data from Puck
console.log(data,"data")
  return (
    <div>
      <h1>Puck Page Builder with Columns and Card</h1>
      <Puck config={config} data={data} onPublish={setData} />
      <h2>Rendered Page</h2>
      <Render config={config} data={data} /> {/* Render the page component */}
    </div>
  );
};

export default Editor;


