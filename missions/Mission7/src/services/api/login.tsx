import { signInWithEmailAndPassword, type User } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "../../config/firebase";

export const Login = async (email: string, password: string): Promise<User | Error> => {
  const auth = getAuth(firebaseApp);
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    return Error(error);
  }
};
