import {useState} from 'react'
import GoalItem from './Components/Goalitem';
import GoalInput from './Components/Goalinput';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import {StatusBar} from "expo-status-bar"


export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }


  function addGoalHandler(enteredGoalText){
    setCourseGoals(prevGoals => [
      ...prevGoals,
      {text:enteredGoalText, id:Math.random().toString()}

    ])
    endAddGoalHandler()
  };
  
  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button
        title='Add New Goal' 
        color="#a065ec" 
        onPress={startAddGoalHandler}
      />
      <GoalInput 
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}  
          renderItem={(itemData) => {
            return (
              <GoalItem 
                id={itemData.item.id}
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}/>
          )
        }}/>        
        
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop:70,
    paddingHorizontal:16,
    
  },
  inputContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor:'grey'
  },
  textInput: {
    borderWidth:1,
    borderColor: "grey",
    width: '70%',
    marginRight: 10,
    padding:8,
  },
 goalsContainer:{
    flex:4,
  },

  goalItem: {
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor: '#5e0acc',

},
goalText:{
  color:'white'
}}
);
