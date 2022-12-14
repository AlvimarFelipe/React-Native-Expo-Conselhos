import { StyleSheet} from 'react-native';



export const styles = StyleSheet.create({
    loadingScreen: {
        position: "absolute",
        display: "flex",
        width: "100%",
        height: "110%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0008",
        opacity: 1,
        zIndex: 9999
    },
    
    container: {
      flex: 1,    
      backgroundColor: '#2196F3',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
    },
    titulo:{
        fontSize:30,
        color:'white',
        
    },
    botao:{
        
        fontWeight:'bold',
        fontSize:60,
        color:'white',
        backgroundColor: "#313455",
     
    },
    conselho:{
        color:'white',
        fontWeight: 'bold',
        fontSize:40,
        padding:20
    
    },
    nuvem:{
        width:253,
        height:135,
    }
 
  
    
});
  