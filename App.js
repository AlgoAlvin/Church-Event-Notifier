import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import { useState, useEffect } from 'react';
import Login from './screens/Login';
import Main from './screens/main';
import { ScrollView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { LogBox, Alert} from 'react-native';

LogBox.ignoreAllLogs();

const firebaseConfig = {
  apiKey: "AIzaSyCTtL7PWvA5nY7qDc1Kp3VjEbvVFlKsSeM",
  authDomain: "event-9abd2.firebaseapp.com",
  projectId: "event-9abd2",
  storageBucket: "event-9abd2.appspot.com",
  messagingSenderId: "854986323237",
  appId: "1:854986323237:web:87df08f60206e99b1156cc"
};

const app = initializeApp(firebaseConfig);

export default App = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(true);
    const auth = getAuth(app);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
        });
    
        return () => unsubscribe();
      }, [auth]);

      const handleAuthentication = async () => {
        try {
          if (user) {
            console.log('User logged out successfully!');
            await signOut(auth);
          } else {
            if (isLogin) {
              await signInWithEmailAndPassword(auth, email, password);
              console.log('User signed in successfully!');
            } else {
              await createUserWithEmailAndPassword(auth, email, password);

              console.log('User created successfully!');
            }
          }
        } catch (error) {
          console.error('Authentication error:', error.message);
          Alert.alert(error.message)
        }
      };
  return (
      <ScrollView>
        {user ? (
          <Main user={user} handleAuthentication={handleAuthentication} />
        ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            handleAuthentication={handleAuthentication}
            />
        )}
        </ScrollView>
  );
}