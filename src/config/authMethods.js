import { FacebookAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const googleProvider = new GoogleAuthProvider();

