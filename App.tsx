import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './app/screens/Login';
import List from './app/screens/List';
import Details from './app/screens/Details';
import {useEffect, useState} from 'react';
import {onAuthStateChanged, User} from 'firebase/auth';
import { FIREBASE_AUTH} from './FirebaseConfig';


const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout({ userEmail }: { userEmail: string | null }){
  return(
    <InsideStack.Navigator>
      <InsideStack.Screen name= "to do" component={List} options={{title: userEmail || "to do"}}/>
      <InsideStack.Screen name="details" component={(Details)}/>
    </InsideStack.Navigator>
  );
}
export default function App() {
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) =>{
      setUser(user);
    });
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (<Stack.Screen name="Inside" component={() => <InsideLayout userEmail={user?.email || null} />} options={{headerShown: false}}/>
      ) : (
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      )}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

