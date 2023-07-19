import { StyleSheet } from "react-native";
import { COLOR } from "./Theme";

export const AppStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.background,

    },
    icon: {
        width: 24,
        height: 24
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 1000,
    },
    border: {
        borderWidth: 0.5,
        borderColor: COLOR.border,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        fontStyle: 'normal',
        color: COLOR.titlePrimary,
    },
    text: {
        color: COLOR.normalText,
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',

    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    header: {
        backgroundColor: COLOR.header,
        width: '100%',
        height: "13%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.59,
        elevation: 5
    }


})