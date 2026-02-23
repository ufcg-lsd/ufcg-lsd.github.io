// "use client";

// import { ContentfulClient } from "@/utils/contentful";
// import React, { createContext, useContext, ReactNode, useMemo } from "react";

// // 1. Define the shape of our context
// interface ContentfulContextType {
//   client: ContentfulClient;
// }

// // 2. Create the Context
// const ContentfulContext = createContext<ContentfulContextType | undefined>(undefined);

// // 3. Create the Provider Component
// export const ContentfulProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   // We use useMemo to ensure the client instance is stable across re-renders
//   const client = useMemo(() => new ContentfulClient(), []);

//   return (
//     <ContentfulContext.Provider value={{ client }}>
//       {children}
//     </ContentfulContext.Provider>
//   );
// };

// // 4. Create a custom hook for easy access
// export const useContentful = () => {
//   const context = useContext(ContentfulContext);
//   if (!context) {
//     throw new Error("useContentful must be used within a ContentfulProvider");
//   }
//   return context;
// };