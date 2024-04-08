import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import {Octicons, Ionicons} from '@expo/vector-icons';
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledTextInput,
    StyledTextLabel,
    ButtonText,
    StyledButton,
    Colors,
    MsgBox,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,
    Line
 } from '../components/styles';

import { ActivityIndicator, View } from 'react-native';
import KeyboardAvoidWrapper from '../components/KeyboardAvoidWrapper';

 
const {brand, darkLight} = Colors;

const Login = ({email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
    const [loading, setLoading] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <KeyboardAvoidWrapper>
        <StyledContainer>
            <StatusBar style = "dark"/>
             <InnerContainer>

                 <PageLogo resizeMode="cover" source={require('./../assets/QHC.jpg')}/>
                 <PageTitle> Church Name </PageTitle>
                 <SubTitle>{isLogin ? 'Account Login' : 'Account Sign Up'}</SubTitle>
                 <Formik 
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                 >
                    <StyledFormArea>
                        <MyTextInput 
                            label= "Email Address"
                            icon= "mail"
                            placeholder= 'Email'
                            placeholderTextColor= {darkLight}
                            onChangeText= {setEmail}
                            value= {email}
                            keyboardType= 'email-address'
                            autoCapitalize= 'none'
                        />

                        <MyTextInput 
                            label= "Password"
                            icon= "lock"
                            placeholder= '* * * * *'
                            placeholderTextColor= {darkLight}
                            onChangeText= {setPassword}
                            value= {password}
                            secureTextEntry= {hidePassword}
                            isPassword= {true}
                            hidePassword= {hidePassword}
                            setHidePassword= {setHidePassword}
                            autoCapitalize= 'none'
                        />
                        <MsgBox>...</MsgBox>
                        {loading ? (
                            <ActivityIndicator size = 'large' color = '#0000ff' />
                        ) : (
                        <StyledButton onPress= {handleAuthentication}>
                            <ButtonText>{isLogin ? 'Login' : 'Sign Up'} </ButtonText>
                        </StyledButton>
                        )}
                        <Line />
                        <ExtraView>
                            <ExtraText>{isLogin ? "Don't have an account already?" : "Already have an account?" } </ExtraText>
                            <TextLink onPress= {() => {setIsLogin(!isLogin)}}>
                                <TextLinkContent>{isLogin ? "Signup" : "Login" }</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>
                 </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidWrapper>
    );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) =>  {
    return (
        <View>
            <LeftIcon>
                <Octicons name = {icon} size = {30} color={brand}/>
            </LeftIcon>
            <StyledTextLabel>{label}</StyledTextLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress ={() => setHidePassword(!hidePassword)}>
                    <Ionicons name= {hidePassword ? 'eye-off' : 'eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )

}

export default Login;