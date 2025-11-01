import { initializeApp, getApps, FirebaseApp, FirebaseOptions } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

/**
 * Firebase Configuration
 * Initializes Firebase services with environment variables
 */

// Firebase configuration object from environment variables
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/**
 * Validates Firebase configuration
 * Ensures all required environment variables are present
 */
function validateFirebaseConfig(): void {
  const requiredKeys: (keyof FirebaseOptions)[] = [
    "apiKey",
    "authDomain",
    "projectId",
    "storageBucket",
    "messagingSenderId",
    "appId",
  ];

  const missingKeys = requiredKeys.filter(
    (key) => !firebaseConfig[key] || firebaseConfig[key] === `YOUR_${key.toUpperCase()}`
  );

  if (missingKeys.length > 0) {
    console.error(
      `Missing Firebase configuration keys: ${missingKeys.join(", ")}`
    );
    console.error(
      "Please check your .env file and ensure all NEXT_PUBLIC_FIREBASE_* variables are set correctly."
    );
  }
}

// Validate configuration in development mode
if (process.env.NODE_ENV === "development") {
  validateFirebaseConfig();
}

/**
 * Initialize Firebase App
 * Prevents multiple initializations by checking existing apps
 */
let firebaseApp: FirebaseApp;

try {
  // Check if Firebase app is already initialized
  if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
    console.log("✅ Firebase initialized successfully");
  } else {
    firebaseApp = getApps()[0];
    console.log("✅ Firebase app already initialized");
  }
} catch (error) {
  console.error("❌ Error initializing Firebase:", error);
  throw new Error(
    `Firebase initialization failed: ${error instanceof Error ? error.message : "Unknown error"}`
  );
}

/**
 * Initialize Firebase Auth
 * Sets up authentication with additional configuration
 */
let auth: Auth;

try {
  auth = getAuth(firebaseApp);
  
  // Optional: Configure auth settings
  // auth.useDeviceLanguage(); // Use device language for auth UI
  // auth.settings.appVerificationDisabledForTesting = process.env.NODE_ENV === 'development';
  
  console.log("✅ Firebase Auth initialized successfully");
} catch (error) {
  console.error("❌ Error initializing Firebase Auth:", error);
  throw new Error(
    `Firebase Auth initialization failed: ${error instanceof Error ? error.message : "Unknown error"}`
  );
}

/**
 * Initialize Firestore Database
 */
let db: Firestore;

try {
  db = getFirestore(firebaseApp);
  console.log("✅ Firestore initialized successfully");
} catch (error) {
  console.error("❌ Error initializing Firestore:", error);
  throw new Error(
    `Firestore initialization failed: ${error instanceof Error ? error.message : "Unknown error"}`
  );
}

/**
 * Initialize Firebase Storage
 */
let storage: FirebaseStorage;

try {
  storage = getStorage(firebaseApp);
  console.log("✅ Firebase Storage initialized successfully");
} catch (error) {
  console.error("❌ Error initializing Firebase Storage:", error);
  throw new Error(
    `Firebase Storage initialization failed: ${error instanceof Error ? error.message : "Unknown error"}`
  );
}

/**
 * Initialize Auth with custom configuration
 * Useful for setting up auth persistence, language, etc.
 * 
 * @param options - Optional auth configuration
 * @returns Initialized Auth instance
 */
export function initAuth(options?: {
  useDeviceLanguage?: boolean;
  disableAppVerification?: boolean;
}): Auth {
  try {
    const authInstance = getAuth(firebaseApp);
    
    // Apply custom configuration
    if (options?.useDeviceLanguage) {
      authInstance.useDeviceLanguage();
    }
    
    if (options?.disableAppVerification && process.env.NODE_ENV === 'development') {
      authInstance.settings.appVerificationDisabledForTesting = true;
    }
    
    console.log("✅ Custom Auth initialization completed");
    return authInstance;
  } catch (error) {
    console.error("❌ Error in custom Auth initialization:", error);
    throw new Error(
      `Custom Auth initialization failed: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

/**
 * Export Firebase instances
 */
export { firebaseApp, auth, db, storage };

/**
 * Export Firebase configuration for debugging purposes
 * Note: Only exports non-sensitive info in development
 */
export const getFirebaseConfig = (): Partial<FirebaseOptions> => {
  if (process.env.NODE_ENV === "development") {
    return {
      projectId: firebaseConfig.projectId,
      authDomain: firebaseConfig.authDomain,
      storageBucket: firebaseConfig.storageBucket,
    };
  }
  return {};
};
