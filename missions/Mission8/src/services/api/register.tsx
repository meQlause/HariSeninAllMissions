import { createUserWithEmailAndPassword, getAuth, type User } from "firebase/auth";
import { firebaseApp } from "../../config/firebase";

export const Register = async (email: string, password: string): Promise<User | Error> => {
  const auth = getAuth(firebaseApp);
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    return Error(error);
  }
};
