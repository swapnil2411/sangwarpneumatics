// import admin from "firebase-admin";

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: process.env.FIREBASE_PROJECT_ID,
//       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//       privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
//     }),
//   });
// }

// export const adminDb = admin.firestore();

// import admin from "firebase-admin";
// import serviceAccount from "@/lib/serviceAccountKey.json";

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });
// }

// export const adminDb = admin.firestore();

import admin from "firebase-admin";

let serviceAccount;

if (process.env.NODE_ENV === "development") {
  serviceAccount = require("./serviceAccountKey.json");
} else {
  serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(
      /\\n/g,
      "\n"
    ),
  };
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminDb = admin.firestore();

export { adminDb };

export default admin;