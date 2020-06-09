import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

export const onServiceWorkerUpdateReady = () => window.location.reload(true);