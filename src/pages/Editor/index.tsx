// pages/Editor.tsx
// import React from 'react';
// import { Puck, ComponentConfig } from "@measured/puck"; // Import Puck and ComponentConfig
// import "@measured/puck/puck.css";

// // Create Puck component config
// const config: {
//   components: {
//     [key: string]: ComponentConfig<{ children: string }, any>;
//   };
// } = {
//   components: {
//     HeadingBlock: {
//       fields: {
//         children: {
//           type: "text",
//         },
//       },
//       render: ({ children }) => {
//         return <h1>{children}</h1>;
//       },
//     },
//   },
// };

// // Describe the initial data
// const initialData = {};

// // Save the data to your database
// const save = (data: any) => {
//   // Implement your save logic here
// };

// // Render Puck editor
// const Editor: React.FC = (): JSX.Element => {
//   return <Puck config={config} data={initialData} onPublish={save} />;
// };

// export default Editor; // Default export



// pages/Editor.tsx
// import React, { useState } from 'react';
// import { Puck, ComponentConfig, Render } from "@measured/puck"; // Import Puck, ComponentConfig, and Render
// import "@measured/puck/puck.css";
// import { DropZone } from "@measured/puck";

// // Create Puck component config
// const config: {
//   components: {
//     [key: string]: ComponentConfig<{ children: string }, any>;
//   };
// } = {
//   components: {
//     HeadingBlock: {
//       fields: {
//         children: {
//           type: "text",
//         },
//       },
//       render: ({ children }) => {
//         return (
//         <h1>{children}</h1>);
//       },
//     },
//     Example: {
//       render: () => {
//         return (
//           <div>
//             sdvsdv
//           </div>
//         );
//       },
//     },
//   },
// };

// // Describe the initial data
// const initialData = {};

// // Save the data to your database
// const save = (data: any) => {
//   // Implement your save logic here
// };

// // Render Puck editor
// const Editor: React.FC = () => {
//   const [data, setData] = useState(initialData); // State to manage the data from Puck

//   return (
//     <div>
//       <h1>Puck Editor</h1>
//       <Puck config={config} data={data} onPublish={setData} />
//       <h2>Rendered Page</h2>
//       <Render config={config} data={data} /> {/* Render the Page component */}
//     </div>
//   );
// };

// export default Editor; // Default export






// import React, { useState } from 'react';
// import { Puck, ComponentConfig, Render, Data } from "@measured/puck"; // Import Puck and necessary types
// import "@measured/puck/puck.css";
// import { DropZone } from "@measured/puck";

// // Create Puck component config for Columns
// const config: {
//   components: {
//     [key: string]: ComponentConfig<any, any>;
//   };
// } = {
//   components: {
//     HeadingBlock: {
//       fields: {
//         children: {
//           type: "text",
//         },
//       },
//       render: ({ children }) => {
//         return <h1>{children}</h1>;
//       },
//     },
    
//   },
// };

// // Describe the initial data with a valid structure for columns
// const initialData: any = {

// };

// // Save the data to your database
// const save = (data: any) => {
//   console.log("Saved data:", data); // Implement your save logic here
// };

// // Render Puck editor
// const Editor: React.FC = () => {
//   const [data, setData] = useState<Data>(initialData); // State to manage the data from Puck

//   return (
//     <div>
//       <h1>Puck Editor</h1>
//       <Puck config={config} data={data} onPublish={setData} />
//       <h2>Rendered Page</h2>
//       <Render config={config} data={data} /> {/* Render the Page component */}
//     </div>
//   );
// };

// export default Editor; // Default export



// import React from 'react';
// import { Puck, ComponentConfig, Render } from "@measured/puck";
// import "@measured/puck/puck.css";

// // Create Puck component config
// const config: {
//   components: {
//     [key: string]: ComponentConfig<any, any>;
//   };
// } = {
//   components: {
//     HeadingBlock: {
//             fields: {
//               children: {
//                 type: "text",
//               },
//             },
//             render: ({ children }) => {
//               return <h1>{children}</h1>;
//             },
//           },
//     ImageBlock: {
//       fields: {
//         src: {
//           type: "text", // URL for the image
//           label: "Image URL",
//         },
//         alt: {
//           type: "text", // Alt text for accessibility
//           label: "Alt Text",
//         },
//         width: {
//           type: "number", // Optional width for the image
//           label: "Width",
//         },
//         height: {
//           type: "number", // Optional height for the image
//           label: "Height",
//         },
//       },
//       render: ({ src, alt, width, height }) => {
//         return (
//           <img
//             src={src}
//             alt={alt}
//             width={width || "auto"}
//             height={height || "auto"}
//             style={{ maxWidth: "100%" }} // Ensures responsive image
//           />
//         );
//       },
//     },
//   },
// };

// // Describe the initial data
// const initialData = {
//   root: {
//     type: "ImageBlock",
//     props: {
//       src: "https://via.placeholder.com/150", // Example image
//       alt: "Placeholder Image",
//       width: 150,
//       height: 150,
//     },
//   },
// };

// // Save the data to your database
// const save = (data: any) => {
//   // Implement your save logic here
//   console.log("Saved data:", data);
// };

// // Render Puck editor
// const Editor: React.FC = (): JSX.Element => {
//   return (
//     <div>
//       <h1>Puck Image Component</h1>
//       <Puck config={config} data={initialData || ""} onPublish={save} />
//       <h2>Rendered Page</h2>
//       <Render config={config} data={initialData} />
//     </div>
//   );
// };

// export default Editor;


// import React, { useState } from 'react';
// import { Puck, ComponentConfig, Render, Data } from "@measured/puck";
// import "@measured/puck/puck.css";

// // Create Puck component config for Label, HeadingBlock, and ImageBlock
// const config: {
//   components: {
//     [key: string]: ComponentConfig<any, any>;
//   };
// } = {
//   components: {
//     // HeadingBlock: {
//     //   fields: {
//     //     children: {
//     //       type: "text",
//     //     },
//     //   },
//     //   render: ({ children }) => {
//     //     return <h1>{children}</h1>;
//     //   },
//     // },
//     // ImageBlock: {
//     //   fields: {
//     //     src: {
//     //       type: "text", // URL for the image
//     //       label: "Image URL",
//     //     },
//     //     alt: {
//     //       type: "text", // Alt text for accessibility
//     //       label: "Alt Text",
//     //     },
//     //     width: {
//     //       type: "number", // Optional width for the image
//     //       label: "Width",
//     //     },
//     //     height: {
//     //       type: "number", // Optional height for the image
//     //       label: "Height",
//     //     },
//     //   },
//     //   render: ({ src, alt, width, height }) => {
//     //     return (
//     //       <img
//     //         src={src}
//     //         alt={alt}
//     //         width={width || "auto"}
//     //         height={height || "auto"}
//     //         style={{ maxWidth: "100%" }} // Ensures responsive image
//     //       />
//     //     );
//     //   },
//     // },
//     Label: {
//       fields: {
//         text: {
//           type: "text", // Input type for label text
//           label: "Label Text",
//         },
//         color: {
//           type: "text", // Input type for label color
//           label: "Text Color",
//         },
//         fontSize: {
//           type: "number", // Input type for label font size
//           label: "Font Size",
//           min: 8,
//           max: 72,
//         },
//       },
//       render: ({ text, color, fontSize }) => {
//         return (
//           <label style={{ color: color, fontSize: fontSize }}>
//             {text || "Default Label"}
//           </label>
//         );
//       },
//     },

//     // ButtonBlock: {
//     //   fields: {
//     //     label: {
//     //       type: "text", // Text for the button label
//     //       label: "Button Label",
//     //     },
//     //     onClickAction: {
//     //       type: "text", // A placeholder for onClick action (this could be expanded)
//     //       label: "OnClick Action (placeholder)",
//     //     },
//     //     color: {
//     //       type: "text", // Button color
//     //       label: "Button Color",
//     //     },
//     //   },
//     //   render: ({ label, onClickAction, color }) => {
//     //     return (
//     //       <button
//     //         onClick={() => console.log(onClickAction)} // Placeholder for onClick event
//     //         style={{
//     //           padding: "10px 20px",
//     //           backgroundColor: color || "#007BFF", // Default color if none provided
//     //           color: "#fff",
//     //           border: "none",
//     //           borderRadius: "4px",
//     //           cursor: "pointer",
//     //         }}
//     //       >
//     //         {label || "Click me"} {/* Default button text */}
//     //       </button>
//     //     );
//     //   },
//     // },
    
//     TextBlock: {
//       fields: {
//         text: {
//           type: "text", // Text content for the block
//           label: "Text Content",
//         },
//         fontSize: {
//           type: "number", // Font size for the text
//           label: "Font Size",
//           min: 10,
//           max: 50,
//         },
//         color: {
//           type: "text", // Text color
//           label: "Text Color",
//         },
//       },
//       render: ({ text, fontSize, color }) => {
//         return (
//           <p
//             style={{
//               fontSize: fontSize || 16, // Default font size if none provided
//               color: color || "#000000", // Default text color if none provided
//             }}
//           >
//             {text || "Default Text"} {/* Default text if none provided */}
//           </p>
//         );
//       },
//     },
  
//   },
// };

// // Describe the initial data for the Label and Image components
// const initialData: Data = {
//   root: {
//     type: "ImageBlock", // Initially display ImageBlock
//     props: {
//       src: "https://via.placeholder.com/150", // Example image
//       alt: "Placeholder Image",
//       width: 150,
//       height: 150,
//     },
//     children: [],
//   },
// };

// // Save the data to your database
// const save = (data: any) => {
//   console.log("Saved data:", data); // Implement your save logic here
// };

// // Render Puck editor
// const Editor: React.FC = () => {
//   const [data, setData] = useState<Data>(initialData); // State to manage the data from Puck

//   return (
//     <div>
//       <h1>Puck Page Builder</h1>
//       <Puck config={config} data={data} onPublish={setData} />
//       <h2>Rendered Page</h2>
//       <Render config={config} data={data} /> {/* Render the page component */}
//     </div>
//   );
// };

// export default Editor; // Default export

// import React, { useState } from "react";
// import { Puck, ComponentConfig, Render, Data } from "@measured/puck";
// import "@measured/puck/puck.css";

// // Puck component config with CardBlock, Label, TextBlock, and ImageBlock
// const config: {
//   components: {
//     [key: string]: ComponentConfig<any, any>;
//   };
// } = {
//   components: {
//     CardBlock: {
//       fields: {
//         title: {
//           type: "text", // Input for the card title
//           label: "Card Title",
//         },
//         description: {
//           type: "text", // Input for the card description
//           label: "Card Description",
//         },
//         imageUrl: {
//           type: "text", // Input for the image URL
//           label: "Image URL",
//         },
//         buttonLabel: {
//           type: "text", // Input for the button label
//           label: "Button Label",
//         },
//       },
//       render: ({ title, description, imageUrl, buttonLabel }) => {
//         return (
//           <div
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//               padding: "16px",
//               textAlign: "center",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               maxWidth: "300px",
//               margin: "0 auto",
//             }}
//           >
//             {imageUrl && (
//               <img
//                 src={imageUrl}
//                 alt="Card Image"
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   borderRadius: "8px 8px 0 0",
//                 }}
//               />
//             )}
//             <h2 style={{ fontSize: "24px", margin: "16px 0" }}>
//               {title || "Default Title"}
//             </h2>
//             <p style={{ fontSize: "16px", color: "#555" }}>
//               {description || "This is a default description for the card."}
//             </p>
//             <button
//               style={{
//                 padding: "10px 20px",
//                 backgroundColor: "#007BFF",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//               }}
//             >
//               {buttonLabel || "Click Me"}
//             </button>
//           </div>
//         );
//       },
//     },
//     Label: {
//       fields: {
//         text: {
//           type: "text", // Input type for label text
//           label: "Label Text",
//         },
//         color: {
//           type: "text", // Input type for label color
//           label: "Text Color",
//         },
//         fontSize: {
//           type: "number", // Input type for label font size
//           label: "Font Size",
//           min: 8,
//           max: 72,
//         },
//       },
//       render: ({ text, color, fontSize }) => {
//         return (
//           <label style={{ color: color, fontSize: fontSize }}>
//             {text || "Default Label"}
//           </label>
//         );
//       },
//     },
//     TextBlock: {
//       fields: {
//         text: {
//           type: "text", // Text content for the block
//           label: "Text Content",
//         },
//         fontSize: {
//           type: "number", // Font size for the text
//           label: "Font Size",
//           min: 10,
//           max: 50,
//         },
//         color: {
//           type: "text", // Text color
//           label: "Text Color",
//         },
//       },
//       render: ({ text, fontSize, color }) => {
//         return (
//           <p
//             style={{
//               fontSize: fontSize || 16, // Default font size if none provided
//               color: color || "#000000", // Default text color if none provided
//             }}
//           >
//             {text || "Default Text"} {/* Default text if none provided */}
//           </p>
//         );
//       },
//     },
//     ImageBlock: {
//       fields: {
//         src: {
//           type: "text", // URL for the image
//           label: "Image URL",
//         },
//         alt: {
//           type: "text", // Alt text for accessibility
//           label: "Alt Text",
//         },
//         width: {
//           type: "number", // Optional width for the image
//           label: "Width",
//         },
//         height: {
//           type: "number", // Optional height for the image
//           label: "Height",
//         },
//       },
//       render: ({ src, alt, width, height }) => {
//         return (
//           <img
//             src={src}
//             alt={alt}
//             width={width || "auto"}
//             height={height || "auto"}
//             style={{ maxWidth: "100%" }} // Ensures responsive image
//           />
//         );
//       },
//     },
//   },
// };

// // Initial data for the CardBlock component
// const initialData: Data = {
//   root: {
//     type: "CardBlock", // Initially display CardBlock
//     props: {
//       title: "Sample Card Title",
//       description: "This is a sample card description.",
//       imageUrl: "https://via.placeholder.com/300",
//       buttonLabel: "Learn More",
//     },
//     children: [],
//   },
// };

// // Save function (implement as per your requirements)
// const save = (data: Data) => {
//   console.log("Saved data:", data); // Implement your save logic here
// };

// // Puck Editor component
// const Editor: React.FC = () => {
//   const [data, setData] = useState<Data>(initialData); // State to manage the data from Puck

//   return (
//     <div>
//       <h1>Puck Page Builder</h1>
//       <Puck config={config} data={data} onPublish={setData} />
//       <h2>Rendered Page</h2>
//       <Render config={config} data={data} /> {/* Render the page component */}
//     </div>
//   );
// };

// export default Editor;

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
          min: 1,
          max: 4,
        },
        children: {
          type: "component",
          label: "Column Content",
        },
      },
      render: ({ columnCount, children }) => {
        const columns = Array.from({ length: columnCount || 1 }).map(
          (_, index) => (
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
              {children && children[index] ? children[index] : `Column ${index + 1}`}
            </div>
          )
        );

        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
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


