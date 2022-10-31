import {StyleSheet, View, Text, Pressable} from 'react-native'

function GoalItem(props) {
    return(
        <View style={styles.goalItem}> 
            <Pressable 
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem }
            >
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </Pressable>
            </View>
        
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    pressedItem:{
        opacity:0.5,
    },
    goalItem: {
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor: '#5e0acc',
    
    },
    goalText:{
        color:'white'
      }
})