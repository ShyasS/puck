import React, { useState } from "react";
import { Puck, ComponentConfig, Render, Data } from "@measured/puck";
import "@measured/puck/puck.css";

// Puck component config with ColumnsBlock, CardBlock, and other components
const config: {
  components: {
    [key: string]: ComponentConfig<any, any>;
  };
} = {
  components: {
    // ColumnsBlock: Allows creating multiple columns
    ColumnsBlock: {
      fields: {
        columnCount: {
          type: "number",
          label: "Number of Columns",
          min: 2,
          max: 4,
        },
        children: {
          type: "array", // Change type to array
          label: "Column Content",
          itemType: "component", // Specify that items are components
        },
      },
      render: ({ columnCount, children }) => {
        const columns = Array.from({ length: columnCount || 1 }).map((_, index) => {
          const childContent = children ? children[index] : undefined;

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
    // CardBlock: Customizable card component
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
      },
      render: ({ title, description, imageUrl, buttonLabel }) => (
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Card Image"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px 8px 0 0",
              }}
            />
          )}
          <h2 style={{ fontSize: "24px", margin: "16px 0" }}>
            {title || "Default Title"}
          </h2>
          <p style={{ fontSize: "16px", color: "#555" }}>
            {description || "This is a default description for the card."}
          </p>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {buttonLabel || "Click Me"}
          </button>
        </div>
      ),
    },
    // LabelBlock: A simple label component
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
const Editor: React.FC = () => {
  const [data, setData] = useState<Data>(initialData); // State to manage the data from Puck

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


