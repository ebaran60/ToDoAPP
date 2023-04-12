import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderRadius:10,
        padding:10,
        margin:5,
        backgroundColor:"green"
    },
    textUnDone: {
        color: "#fff"
    },
    doneContainer:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textDone: {
        color: "#fff",
        textDecorationLine: "line-through"
    }
})