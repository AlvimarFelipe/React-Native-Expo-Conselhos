import React from "react";
import { Text, View, Button} from 'react-native';
import { styles } from "./style";



export default function home() {
    return (
      <View style={styles.container}>
        <Button style={styles.botao} 
        onPress={() => console.log(response)} 
        title='Preciso de um conselho'>
        </Button>
        <Text style={styles.conselho}>
            
        </Text>

      </View>
    );
}



const options = {
	method: 'GET',
};
var response

fetch('https://api.adviceslip.com/advice', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
