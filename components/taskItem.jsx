import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import CheckBox from "expo-checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

export const TaskItem = (props) => {
  return (
    <View style={styles.item}>
      <CheckBox
        disabled={props.checked}
        value={props.checked}
        onValueChange={(newValue) => {
          console.log(newValue);
        }}
      />
      <Text style={props.checked ? styles.checkedTask : styles.unCheckedTask}>
        {props.task}
      </Text>
      <TouchableOpacity
        onPress={() => {
          props.removeTask(props.key);
        }}
      >
        <FontAwesomeIcon icon={faTrash} style={styles.icon} size={38} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    height: "auto",
    marginVertical: "1%",
  },
  checkbox: {
    flex: 1,
  },
  unCheckedTask: {
    flex: 2,
    color: "#ffffff",
    fontSize: 20,
    paddingHorizontal: "3%",
    paddingVertical: "4%",
    backgroundColor: "#192160",
    borderRadius: 7,
  },
  checkedTask: {
    flex: 2,
    color: "#fff",
    backgroundColor: "#babccf",
    fontSize: 20,
    paddingHorizontal: "3%",
    paddingVertical: "4%",
    textDecorationLine: "line-through",
    borderRadius: 7,
  },
  icon: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#601921",
  },
});
