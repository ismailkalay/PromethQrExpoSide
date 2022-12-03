import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        padding: 20,
        //marginTop: 50,
    },
    barcode:{
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginLeft: 70,
        padding: 20,
    },
    txt:{
        // backgroundColor: "black", 
        color: "black", 
        fontSize: 40
    },
    loginButtonSection: {
        width: '100%',
        // height: '30%',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
       backgroundColor: '#06baab',
       color: 'white',
       height: 35,
       marginTop: 30,
       justifyContent: 'center', //up dwn
       alignItems: 'center',  //r & l
       width: '70%',
       borderRadius: 10,
    },
    pad:{
        padding: 30,
    },
})

export default styles;