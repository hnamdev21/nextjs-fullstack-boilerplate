// "use client";

// import React from "react";
// import { Provider } from "react-redux";

// import { getStore } from "@/stores/_";

// const StoreProvider = ({ children }: { children: React.ReactNode }) => {
//   const store = getStore();

//   return (
//     <Provider store={store}>
//       {typeof window !== "undefined"
//         ? // <PersistGate loading={null} persistor={store.__persistor}>
//           children
//         : // </PersistGate>
//           children}
//     </Provider>
//   );
// };

// export default StoreProvider;
