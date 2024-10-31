import { createContext, useState } from "react";
import { serverInstance } from "@/Api/ServerInstance";

export default function UserProvider({ children }) {
  const [user, setUser] = useState();

  const getUser = async () => {
    try {
      serverInstance("user", "get")
        .then((res) => {
          if (res?.status) {
            setUser(res?.data[0]);
          } else {
          }
        })
        .catch((errors) => {
          console.log(errors);
        });
    } catch (error) {}
  };

  return (
    <UserContext.Provider value={{ user, getUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const UserContext = createContext();
