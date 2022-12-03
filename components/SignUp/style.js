import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        padding: 20,
        marginTop: 50,
    },

    action: {
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 5,
        width: '100%'
    },

    textInput:{
        borderBottomColor: '#F19784',
        borderBottomWidth: 1,
        marginBottom: 50,
        height: 40,
        fontSize: 20,
        flex: 1,

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
       justifyContent: 'center', //up dwn
       alignItems: 'center',  //r & l
       width: '70%',
       borderRadius: 10,
    }

})

export default styles;