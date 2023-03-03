import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register, ForgotPassword, Home, MyCart, ProductInfo, HomeScreen } from '../screens'
import { COLORS, ROUTES } from '../constants';


const Stack = createStackNavigator();

function AuthNavigator() {

    return (
        <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.ONBOARDING}>
            <Stack.Screen name={ROUTES.LOGIN} component={Login} options={
                { headerShown: false }
            } />

            <Stack.Screen name={ROUTES.REGISTER} component={Register} />
            <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword}
                options={({ route }) => ({
                    headerTintColor: COLORS.black,
                    headerBackTitleVisible: true,
                    headerStyle: {
                        backgroundColor: COLORS.white,
                    },
                    title: route.params.userId,
                })}
            />

            {/* <Stack.Screen name={ROUTES.HOMESCREEN} component={HomeScreen} /> */}

            <Stack.Screen name={ROUTES.HOME} component={Home} />
            <Stack.Screen name={ROUTES.MYCART} component={MyCart} />
            <Stack.Screen name={ROUTES.PRODUCTINFO} component={ProductInfo} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;