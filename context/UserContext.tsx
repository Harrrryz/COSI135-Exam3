import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

// Define the shape of the user data
interface User {
  name: string;
  age: number;
  weight: number; // in lbs
  height: number; // in inches
}

// Define the shape of the context value
interface UserContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

// Create the context with a default undefined value
const UserContext = createContext<UserContextType | undefined>(undefined);

// Default user data as specified
const defaultUser: User = {
  name: 'Tim Hickey',
  age: 66.95,
  weight: 165,
  height: 68,
};

// Create the Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};