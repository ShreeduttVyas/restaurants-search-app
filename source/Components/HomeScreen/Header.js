import React from "react";
import { Text, View, StyleSheet} from "react-native";

const Header = () => {  
    return(
        <View style={styles.container}>
            <Text style={styles.lightHeader}>Grab your</Text>
            <Text style={styles.boldHeader}>delicious meal!</Text>
        </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    container :{
        marginTop: 30,
        marginHorizontal: 25
    },
    lightHeader :{
        fontSize: 35
    },
    boldHeader :{
        fontSize: 40,
        fontWeight: "bold"
    }

})