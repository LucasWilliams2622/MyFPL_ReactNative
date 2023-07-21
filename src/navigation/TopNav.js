import * as React from 'react'
import { View } from 'react-native'
import { Text,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
const tab = createMaterialTopTabNavigator();
function Schedule(){
    return(
        <View>
            <Text> </Text>
        </View>
    )
}
function SceduleText(){
    return(
        <View>
            <Text>  </Text>
        </View>
    )
}
function MyTabs(){
    const insets = useSafeAreaInsets();
    return(
        <tab.Navigator
        initialRouteName='Schedule'
        tabBarOptions={{
            activeTinColor : "#e91e63",
            labelStyle:{ fontSize: 12},
            style:{backgroundColor: 'white'}
        }}
        >
            <tab.Screen name="Schedule" 
                component={Schedule}
                options={{tabBarLabel:'Schedule'}}
            />
              <tab.Screen name="ScedukeText" 
                component={SceduleText}
                options={{tabBarLabel:'ScedukeText'}}
            />
          
     </tab.Navigator>
    )
   
}
export default function TopNav() {
    return(
    
        
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}