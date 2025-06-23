import { UserProvider } from '@/context/UserContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

// Helper function for tab icons
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    // Wrap the entire navigation with the UserProvider
    <UserProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          headerStyle: {
            backgroundColor: '#f8f8f8',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          }}
        />
        <Tabs.Screen
          name="age"
          options={{
            title: 'Age',
            tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
          }}
        />
        <Tabs.Screen
          name="bmi"
          options={{
            title: 'BMI',
            tabBarIcon: ({ color }) => <TabBarIcon name="heartbeat" color={color} />,
          }}
        />
      </Tabs>
    </UserProvider>
  );
}