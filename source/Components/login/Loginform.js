import { View, Text, Button, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { elevation } from '../../Shared/Styles'

export default function Loginform() {
    return (
        <View style={styles.wrapper}>
            <View style={[styles.inputField, elevation]}>
                <TextInput
                    placeholderTextColor='#444'
                    placeholder='Phone number, username or email'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={false}
                />
            </View>
            <View style={[styles.inputField, elevation]}>
                <TextInput
                    placeholderTextColor='#444'
                    placeholder='Password'
                    textContentType='password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                />
            </View>
            <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
                <Text style={{ color: '#6BB0F5' }}>Forgot password?</Text>
            </View>
            <Pressable
                titlesize={20}
                style={styles.button}
                onPress={() => console.log('clicked button')}
            >
                <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
            <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <TouchableOpacity style>
                <Text style={{ color: '#6BB0F5'}}>Sign Up</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 60
    },
    inputField: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10
    },
    button: {
        backgroundColor: '#6BB0F5',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 10,
    },
    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },
    signupContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    }
})