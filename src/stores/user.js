import { defineStore } from "pinia";

import { auth } from "../firebase";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, } from "firebase/auth";

export const useUserStore = defineStore("user",{
    state: () => {
        return{
         user : null,
        };
    },
    actions: {
        async register(email,password){
            try {
                await createUserWithEmailAndPassword( auth, email , password ); 
            } catch (error) {
                switch (error.code){
                    case "auth/email-already-in-use":
                        alert("Email already in use");
                    break;
                    case "auth/invalid-email":
                        alert("invalid email");
                        break;
                }
                return;
            }
           this.user =auth.currentUser;
           this.$router.push("/dashboard");
        },
        async login(email,password){
            try {
                await signInWithEmailAndPassword( auth, email , password ); 
            } catch (error) {
                switch (error.code){
                    case "auth/user-not-found":
                        alert("User not found");
                        break
                    case "auth/wrong-password":
                        alert("Wrong password");
                        break;
                }
                return;
            }
           this.user =auth.currentUser;
           this.$router.push("/dashboard");
        },
        async logout (){
            await signOut(auth);
            this.user =null;
            //this.$router.push("/login");
            this.$router.push("../");
        },
    },
});