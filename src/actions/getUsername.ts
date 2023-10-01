import { auth, db } from "../../firebase.config";
import { doc, getDoc, setDoc } from "firebase/firestore";

const getUsername = async () => {
  const user = await auth.currentUser;
  if (user) {
    try {
      const docRef = doc(db, "users", user?.email!);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        // Document exists, you can access its data
        const data = docSnapshot.data();
        console.log("Document data:", data);
        return data.name;
      } else {
        // Document does not exist
        console.log("Document does not exist.");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
    console.log(user);
  } else {
    console.log("ERROR");
  }
};

export default getUsername;
