import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Dimensions,ScrollView,TouchableOpacity} from 'react-native';
import { Container, Header, Title, Content, Button, Body, Icon, Text, View, Right, Left } from 'native-base';
import Animbutton from '../../animbutton'
import styles from './styles'
const { width, height } = Dimensions.get('window')
let arrnew = []
const jsonData = {"quiz" : {
  "quiz1" : {
    "question1" : {
      "correctoption" : "B",
      "options" : {
        "A" : "A. Muamalah",
        "B" : "B. Ibadah",
        "C" : "C. Aqidah",
        "D" : "D. Akhlak"
      },
      "question" : "Masalah zakat dibicarakan dalam bidang?"
    },
    "question2" : {
      "correctoption" : "A",
      "options" : {
        "A" : "A. Harta Benda",
        "B" : "B. Jasmani",
        "C" : "C. Jiwa",
        "D" : "D. Kedudukan"
        },
      "question" : "Zakat merupakan ketentuan Allah yang berhubungan dengan?"
    },
    "question3" : {
      "correctoption" : "A",
      "options" : {
        "A" : "A. Wajib Ain",
        "B" : "B. Wajib Kifayah",
        "C" : "C. Sunnah",
        "D" : "D.Sunnah Muakad"
        },
      "question" : "Zakat fitrah termasuk ibadah yang hukumnya?"
    },
    "question4" : {
      "correctoption" : "D",
      "options" : {
        "A" : "A. Menukarkan",
        "B" : "B. Menambah",
        "C" : "C. Menyisihkan Harta",
        "D" : "D. Mensucikan"
        },
      "question" : "Salah satu pengertian zakat menurut bahasa adalah?"
    },
    "question5" : {
      "correctoption" : "C",
      "options" : {
        "A" : "A. Harta",
        "B" : "B. Profesi",
        "C" : "C. Fitrah",
        "D" : "D. Mal"
        },
      "question" : "Zakat yang dikeluarkan untuk membersihkan jiwa seseorang disebut zakat?"
    }
  }
}
}
export default class Quiz extends Component {
  constructor(props){
    super(props);
    this.qno = 0
    this.score = 0
 
    const jdata = jsonData.quiz.quiz1
    arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
    this.state = {
      question : arrnew[this.qno].question,
      options : arrnew[this.qno].options,
      correctoption : arrnew[this.qno].correctoption,
      countCheck : 0
    }
 
  }
  prev(){
    if(this.qno > 0){
      this.qno--
      this.setState({ question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }
  }
  next(){
    if(this.qno < arrnew.length-1){
      this.qno++
 
      this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }else{
      
      this.props.quizFinish(this.score*100/5)
     }
  }
  _answer(status,ans){
 
    if(status == true){
        const count = this.state.countCheck + 1
        this.setState({ countCheck: count })
        if(ans == this.state.correctoption ){
          this.score += 1
        }
      }else{
        const count = this.state.countCheck - 1
        this.setState({ countCheck: count })
        if(this.state.countCheck < 1 || ans == this.state.correctoption){
        this.score -= 1
       }
      }
 
  }
  render() {
    let _this = this
    const currentOptions = this.state.options
    const options = Object.keys(currentOptions).map( function(k) {
      return (  <View key={k} style={{margin:10}}>
 
        <Animbutton countCheck={_this.state.countCheck} onColor={"#6971F7"} effect={""} _onPress={(status) => _this._answer(status,k)} text={currentOptions[k]} />
 
      </View>)
    });
 
    return (
      <ScrollView style={{backgroundColor: '#FFFFFF',paddingTop: 10}}>
      <Header style={styles.header}>
          <Left>
            <Button transparent onPress={this.back}>
              <Icon name="arrow-back" style={styles.backArrow}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>TelQuiz</Title>
          </Body>
          <Right/>
        </Header>
      <View  >
        <Text style={styles.welcome}>
          {this.state.question}
        </Text>
     </View>
        <View>
        { options }
        </View>
        <View style={{alignItems: 'center'}}>
      {/*   <Button
          onPress={() => this.prev()}
          title="Prev"
          color="#841584"
        />
        <View style={{margin:15}} />*/}
 
        <TouchableOpacity 
          onPress={() => this.next()}
          style={{
            backgroundColor:"#44B883", 
            width: 280, 
            height: 40, 
            borderRadius: 5, 
            alignItems: 'center', 
            justifyContent: 'center',
            alignContent: 'center'
          }}
        >
          <Text style={{color:'white'}}>Next</Text>
        </TouchableOpacity >
      </View>
      </ScrollView>
    );
  }
}
 

