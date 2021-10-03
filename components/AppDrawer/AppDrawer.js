import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from '../Home/Home';
import News from '../News/News';
import MapView from '../News/MapView/MapView';
import LookDisaster from '../LookDisaster/LookDisaster';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export function AppDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="MapView" component={MapView} />
      <Drawer.Screen name="Look For Disasters" component={LookDisaster} />
      <Drawer.Screen name="News" component={News} />
    </Drawer.Navigator>
  );
}