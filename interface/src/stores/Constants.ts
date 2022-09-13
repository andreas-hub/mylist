/**
 * Constants
 */
class Constants {
    private _FIREBASE_CONFIG = {
        apiKey: import.meta.env.VITE_API_KEY,
        authDomain: import.meta.env.VITE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_APP_ID,
        measurementId: import.meta.env.VITE_MEASUREMENT_ID
    };

    /**
     * Your web app's Firebase configuration
     * For Firebase JS SDK v7.20.0 and later, measurementId is optional
     */
    get FIREBASE_CONFIG() {
        return this._FIREBASE_CONFIG;
    }
}

export default new Constants();
