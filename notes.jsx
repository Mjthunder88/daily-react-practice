// * This file is just for my personal notes and recap of things I have learned



// ? useContext and steps to use it
// You use useContext to pass data from a parent component anywhere in its componenet tree. 
//  So either to a distant relative or to one that is only a couple componenets away. 
// Essitantilly it helps with not having to pass props through tons of differn't compoents, just to make it to one componenet. 

// ! But passing props makes your components more configurable. So if you can pass props and it won't be too complicated
// ! Don't use useContext. But if it will be eaiser or you have several components you would have to cross just to get somewhere.
// ! Thats where use context comes in. 


// ? Steps on how to use it: 
// * step 1: Create and export it with export const MyContext = createContext(defaultValue).

// * step 2: Pass it to the useContext(MyContext) Hook to read it in any child component, no matter how deep.

// * step 3: Wrap children into <MyContext.Provider value={...}> to provide it from a parent.

// - Context passes through any components in the middle.

// - Context lets you write components that “adapt to their surroundings”.

// -  Before you use context, try passing props or passing JSX as children.
