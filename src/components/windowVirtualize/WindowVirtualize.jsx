import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import "./windowVirtualize.scss";

const reactArticleTopics = [
    "Understanding React Components",
    "React Hooks: A Comprehensive Guide",
    "Building a Todo App in React",
    "React State Management with Redux",
    "React Context API: When and How to Use It",
    "Optimizing Performance in React Applications",
    "React Router: Navigation and Routing",
    "React with TypeScript: Best Practices",
    "Server-Side Rendering with Next.js",
    "Introduction to React Native",
    "React vs. Angular vs. Vue",
    "Building Forms in React",
    "React Testing Library: Unit and Integration Testing",
    "Handling Side Effects in React with useEffect",
    "React Error Boundaries: Catching and Handling Errors",
    "Creating Custom Hooks in React",
    "Authentication in React Apps",
    "Styling React Components with Styled-Components",
    "State Management with React's useReducer Hook",
    "React Performance Optimization Techniques",
    "React Fragments: A Better Way to Return Multiple Elements",
    "Building a Blog with React and Markdown",
    "Deploying React Applications to Vercel",
    "Integrating GraphQL with React",
    "React Suspense: Handling Asynchronous Operations",
    "Building a Chat App with React and Firebase",
    "React Portal: Rendering Children into a Different DOM Node",
    "Using React with RESTful APIs",
    "Building Reusable React Components",
    "React's Virtual DOM Explained",
    "React Concurrent Mode: What You Need to Know",
    "Animating React Components with Framer Motion",
    "React Component Lifecycle Methods",
    "Integrating Payment Gateways in React Apps",
    "React Hook Form: Simplifying Form Handling",
    "Building a Real-Time Data Dashboard with React",
    "React Native vs. Flutter: A Comparison",
    "Working with React and D3.js for Data Visualization",
    "React Design Patterns: Common Solutions to Frequent Problems",
    "React Fiber Architecture: An Overview",
    "Using CSS Modules in React",
    "React Context vs. Redux: Which to Choose?",
    "Migrating a Legacy Project to React",
    "React for Beginners: Getting Started",
    "Building a Multilingual App with React and i18next",
    "Best Practices for Structuring React Projects",
    "React Higher-Order Components: An Introduction",
    "Implementing Dark Mode in React Applications",
    "Handling Forms and Validations in React",
    "React.memo and useMemo for Performance Optimization",
    "Using Immutable.js with React",
    "Understanding and Using React PropTypes",
    "React Native for Web: A Single Codebase for All Platforms",
    "Building a Real-Time Chat App with React and Socket.io",
    "Managing Global State in React with Recoil",
    "SEO Best Practices for React Applications",
    "Creating a PWA with React",
    "React and Webpack: Configuration and Optimization",
    "Building and Deploying React Applications with Docker",
    "Using Apollo Client with React for State Management",
    "Understanding React's Synthetic Event System",
    "Integrating Firebase Authentication with React",
    "React and Accessibility: Building Accessible Web Applications",
  ];
  

const Row = ({ index, style }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    {/* Row {index} */}
    {reactArticleTopics[index]}
  </div>
);

const WindowVirtualize = () => (
  <AutoSizer>
    {({ height, width }) => (
      <List
        className="List"
        height={height}
        itemCount={reactArticleTopics.length}
        itemSize={35}
        width={width}
      >
        {Row}
      </List>
    )}
  </AutoSizer>
);

export default WindowVirtualize;
