import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { useSnack } from "./snackBarContext";

const AuthContext = createContext();

const inititialState = {
  user: null,
  isAuthenticated: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    inititialState
  );
  const { showSnackbar } = useSnack();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch({ type: "login", payload: user });
      }
    });
  }, []);

  const signin = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      dispatch({ type: "login", payload: user });
      showSnackbar("Successfully login.");
      return user;
    } catch (error) {
      showSnackbar("Something went wrong", "error");
    }
  };

  const login = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: "login", payload: user });
      showSnackbar("Successfully login.");
      return user;
    } catch (error) {
      if (error.message === "Firebase: Error (auth/wrong-password).")
        showSnackbar("Incorrect credential", "error");
      if (error.message === "Firebase: Error (auth/user-not-found).")
        showSnackbar("Incorrect credential, user not found.", "error");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "logout" });
      showSnackbar("Successfully logout.");
    } catch (error) {
      showSnackbar("Something went wrong", "error");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, signin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
