import { StyleSheet } from "react-native";
import { COLOR } from '../../constants/Theme'

export const styleAppHeader = StyleSheet.create({
    logo: {
        width: '40%',
        height: '48%',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: "#F26F25",
        borderWidth: 2,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: 'center',
        position: 'absolute',
        top: 5,
        right: 5

    },
    imgLogo: {
        width: '80%',
        height: '80%',
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    headerAvatar: {
        flexDirection: 'row',
        width: '55%',
        height: '59%',
        backgroundColor: 'white',
        borderBottomRightRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewTitleName: {
        width: '57%',
        paddingLeft: 6

    },
    titleName: {
        color: '#B76639',
        fontSize: 13,

    },
    view1: {
        width: '42%',
        height: '27%',
        backgroundColor: '#F26F25',
        borderBottomRightRadius:100,
        shadowColor:'black',
        elevation:10,
        

    },
    rightBottomIcon:{
        flexDirection:'row',
        position:'absolute',
        bottom:2,
        right:5,
        
    },
    notificationIcon:{
        width:50,
        
    },
    qrCodeIcon:{
        width:38,

    }
})