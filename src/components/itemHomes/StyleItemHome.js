import { StyleSheet } from "react-native";
import { COLOR } from '../../constants/Theme'

export const StyleItemHome = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        padding:16
    },
    title:{
        fontSize:20,
        color:'black',
        fontWeight:"500",
        marginBottom:16,
    },
    borders:{
        borderColor:'#FF782D',
        borderRadius:10,
        borderTopLeftRadius:0,
        borderWidth:2,
        marginBottom:16,
        width:'100%',
        minHeight:'5%',
        padding:10,

    },
    titleSchedule:{
        color:'#981212',
    },
    imgInformation:{
        width:50,
        height:50,
        backgroundColor:'gray',
        marginRight:10,
        borderRadius:5
        
    },
    companyName:{
        color:'black',
        fontSize:15,
        fontWeight:'500'
    },
    contents:{
        
    }
})