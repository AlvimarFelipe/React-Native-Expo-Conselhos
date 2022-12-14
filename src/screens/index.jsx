import React,{ useState } from "react";
import { Text, View, Button,Image,ActivityIndicator} from 'react-native';
import { styles } from "./style";



export default function home() {
  const [Conseho, setConselho] = useState(null);
  const [loading, setLoading] = useState(false);
  function novoConselho(){
    setLoading(true)
    const options = {
      method: 'GET',
    };    
    fetch('https://api.adviceslip.com/advice', options)
      .then(response => response.json())
      .then(response => {
        let conselho = (traduzir(response['slip']['advice']))
        conselho.then((message) => {  
          conselho = message.responseData.translatedText;
          setConselho(conselho)
          setLoading(false)        
      });      
    })
    .catch(err => console.error(err));

  }

  


  async function traduzir(texto){
    var data = await fetch(`https://api.mymemory.translated.net/get?q=${texto}&langpair=en-GB|pt-BR}&de=mototeste33@gmail.com`);       
    return await data.json();       
  }

  return (

      <>
      
        <View style={styles.container}>
        {loading && (
          <View style={styles.loadingScreen}>
            <ActivityIndicator color="aqua" size="large"></ActivityIndicator>
          </View>
        )}
        {/* <Button style={styles.botao}
        onPress={() => novoConselho()}
        title='Preciso de um conselho' color="#313455">
        </Button> */}

        <Text  onPress={() => novoConselho()}>
        <Image
          style={styles.nuvem}
          source={require('../../assets/nuvem.png')}
        />
        </Text>
        {Conseho  ? (
          <View >
            <Text style={styles.conselho}>{Conseho}</Text>
          </View>
          ) : (
          <></>
          )}
        
        
            </View>
      </>
  );
}




