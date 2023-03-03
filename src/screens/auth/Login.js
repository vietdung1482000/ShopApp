import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { COLORS, ROUTES } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Login = (props) => {
    // const { navigation } = props;
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
                <View style={styles.wFull}>
                    <View style={styles.row}>
                        <Image source={{ uri: 'https://i.pinimg.com/564x/38/07/5f/38075f9a8a6aca7be3e15e57e892bdc0.jpg' }} style={{
                            width: 55,
                            height: 55,
                            marginRight: 7,
                            borderRadius: 50
                        }} />
                        <Text style={styles.brandName}>Technology Store</Text>
                    </View>

                    <Text style={styles.loginContinueTxt}>Login in to continue</Text>
                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" />

                    <View style={styles.loginBtnWrapper}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(ROUTES.HOME)}
                            activeOpacity={0.7} style={styles.loginBtn}>
                            <Text style={styles.loginText}>Log In</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD, {
                        userId: "X0001"
                    })}>
                        <Text style={styles.forgotPassText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}> Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REGISTER)}>
                        <Text style={styles.signupBtn}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    container: {
        padding: 15,
        width: '100%',
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    brandName: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.primary,
        opacity: 0.9,
    },
    loginContinueTxt: {
        fontSize: 21,
        textAlign: 'center',
        color: COLORS.gray,
        marginBottom: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.grayLight,
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        height: 55,
        paddingVertical: 0,
    },
    loginBtnWrapper: {
        color: COLORS.gradientForm,
        height: 55,
        borderRadius: 10,
        marginTop: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    linearGradient: {
        width: '100%',
        borderRadius: 50,
    },
    loginBtn: {
        borderRadius: 10,
        backgroundColor: '#A376F1',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 55,
    },
    loginText: {
        color: "black",
        fontSize: 16,
        fontWeight: '400',
    },
    forgotPassText: {
        color: COLORS.primary,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15,
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        textAlign: 'center',
        flexDirection: 'row',
    },
    footerText: {
        color: COLORS.gray,
        fontWeight: 'bold',
    },
    signupBtn: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    wFull: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
});