import { createContext, useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  GithubAuthProvider,
  deleteUser
  
} from "firebase/auth";
import { auth } from "../Firebase/firebase";
import UserDataService from "../User-operations"

export const UserContext = createContext({});
let newuser = "";

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useState(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser("");
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUser = (email, password, name) => {
    
    setLoading(true);
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then(() =>
          updateProfile( auth.currentUser, {
          displayName: name,
        }),
        
      ).then(() => {
        sendEmailVerification(auth.currentUser);
        newuser = auth.currentUser;
        newuser["creationdate"] = new Date()
        console.log(newuser);

        Create_user_order_account(newuser)
      })
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };

  const signInWithGoogle = () => {
    setLoading(true);
    setError("");

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {console.log(res)
        newuser = auth.currentUser;
        newuser["creationdate"] = new Date()
        newuser["google_one"] = true
        console.log(newuser);

        Create_user_order_account(newuser)})
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };
  
  const Create_user_order_account = (user) => {
    UserDataService.createUser(user).then((res) => {
      console.log(res);
    }).catch((err) => {
      alert(err)
    } )
  }

  const logoutUser = () => {
    signOut(auth);
  };

  const deletuser = () => {
    let UID = auth.currentUser.uid;
    auth.currentUser.delete().then(() => {
      alert("Success!")
    }).then(() =>{
      deleteTheUsersDatabase(UID);
    }).catch((err) => {
      alert(err + "\n Try relogging in to do this action")
    }).finally(() => {
      window.location.reload();
    })
  }

  const deleteTheUsersDatabase = (uid) => {
    UserDataService.delete_Account(uid).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const contextValue = {
    user,
    loading,
    error,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
    signInWithGoogle,
    deletuser,
    auth
    
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};