/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import{Text,View,ImageBackground,StyleSheet,Image,TextInput,TouchableHighlight,TouchableWithoutFeedback,TouchableNativeFeedback,TouchableOpacity,ScrollView}from 'react-native'


class App extends React.Component{
  state={
    text:''
  }
  render(){
    return(
      
      <View style={{flex:1}} >
      
        <ImageBackground style={{width: '100%', height: '100%'}} source={require('./test/b1c63e56-f169-4bb5-b5e9-12cd1905590d.jpeg')}>
        <ScrollView>
          <View style={{height:50,width:'100%',backgroundColor:'#a9a9a9',flexDirection:'row'}}>
              <View style={{paddingLeft:10,justifyContent:'center'}}>
              <Image source={require('./test/left-arrow.png')} style={{width:20,height:20}}/></View>
              <View style={{paddingLeft:'32%',justifyContent:'center'}}>
              
                <Text style={Styles.teks}>PROFIL</Text>
                <Text>{this.state.text}</Text>
              </View>
          </View>


      <TouchableHighlight onPress={()=>{alert('TouchableHighlight  !! ')}}>
        <View style={{alignItems:'center', justifyContent:'center',paddingTop:40}}>
          <Image source={require('./test/woman_silhouette_sun_146058_1280x1024.jpg')} style={{width: 100, height: 100,  borderRadius:50}}/>
        </View>
      </TouchableHighlight>


        <View style={{paddingTop:40,flexDirection:'row',paddingLeft:20}}>
            <TouchableNativeFeedback onPress={()=>{alert('ouchableNativeFeedback  !!')}}>
            <Image source={require('./test/man.png')} style={{width: 50, height: 50,  borderRadius:50}}/>
            </TouchableNativeFeedback>
              <View style={{paddingLeft:15}}>
                  <Text style={Styles.kata}>nama : </Text>
              <TextInput value={this.state.text} style={Styles.tek} placeholder='nama' underlineColorAndroid={'transparent'} onChangeText={inputan => this.setState({text:inputan})}/> 
            </View>
        </View> 

         
        
        <View style={{paddingTop:15,flexDirection:'row',paddingLeft:20}}>
          <TouchableOpacity onPress={()=>{alert('TouchableOpacity  !!')}}>
          <Image source={require('./test/info.png')} style={{width: 50, height: 50}}/>
          </TouchableOpacity>
            <View style={{paddingLeft:15}}>
                <Text style={Styles.tekk}>
                  info
                </Text>
                <Text style={{flexDirection:'column'}}>
                    pengguna harus mengikuti kebijakan privasi dari aturan lisensi
                </Text>
            </View>
        </View>

        <View style={{paddingTop:40,flexDirection:'row',paddingLeft:20}}>
        <TouchableWithoutFeedback onPress={()=>{alert('TouchableWithoutFeedback !!')}}>
          <Image source={require('./test/call.png')} style={{width:45,height:45}} />
          </TouchableWithoutFeedback>
            <View style={{paddingLeft:15}}>
            
              <Text style={Styles.teek}>
              calls :
              </Text>
            
              <TextInput style={Styles.cal} placeholder='your number' /> 
            </View>  
        </View>
        </ScrollView>  
        </ImageBackground>
      

      </View>
     
      
     
      
    );
    }
}
 export default App



 const Styles = StyleSheet.create({
   container:{
     height:50,
     width:'100%',
     backgroundColor:'#a9a9a9'
   },
   teks:{
     fontSize:20,
     textAlign:'center',
     lineHeight:50
   },
   image:{
    flex:1

   },
   border:{
    marginTop:20,
    borderBottomWidth:15
   },
   kata:{
      fontSize:20
   },
   cal:{
    fontSize:13
   },
   tek:{
    fontSize:13
    
   },
   tekk:{
    fontSize:20,
    
   },
   teek:{
    fontSize:20
   },
   BgimageStyle:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    width:'100%',
    height:'100%'
   }

 })





 