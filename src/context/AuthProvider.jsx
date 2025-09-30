import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.init";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const signUpUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInByGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const profileUpdate = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
        // console.log("User signed out");
      }
      setLoader(false);
    });

    return unSubscribe;
  }, []);

  const signOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  const forgetPassword = (email) => {
    setLoader(true);
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    setUser,
    signUpUser,
    signInByGoogle,
    signInUser,
    signOutUser,
    profileUpdate,
    forgetPassword,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
