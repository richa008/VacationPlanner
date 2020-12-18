import * as Admin from "firebase-admin";

Admin.initializeApp();

export const Database = Admin.firestore();