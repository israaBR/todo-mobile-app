import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { useState } from "react";

import { TaskItem } from "./components/taskItem";

export default function App() {
  const [tasks, setTasks] = useState([
    { title: "checked task", checked: true },
    { title: "unchecked task", checked: false },
  ]);
  const [inputTxt, setInputText] = useState("");

  const addTask = () => {
    if (!inputTxt)
      ToastAndroid.show("Can't add empty task", ToastAndroid.SHORT);
    else setTasks([...tasks, { title: inputTxt, checked: false }]);
  };

  const removeTask = (_index) => {
    tasks.filter((task, index) => index != _index);
  };
  const checkTask = (_index) => {
    tasks.map((task, index) => {
      if (index == _index) task.checked = true;
    });
  };
  const unCheckTask = (_index) => {
    tasks.map((task, index) => {
      if (index == _index) task.checked = false;
    });
  };
  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row_top}>
        <TextInput
          placeholder="What do you need to do?"
          style={styles.textInput}
          onChangeText={(input) => {
            setInputText(input);
          }}
        ></TextInput>
        <TouchableOpacity onPress={addTask}>
          <FontAwesomeIcon icon={faPlus} style={styles.icon} size={38} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.list}>
        {tasks.map((task, index) => {
          return (
            <TaskItem
              task={task.title}
              checked={task.checked}
              checkTask={checkTask}
              unCheckTask={unCheckTask}
              removeTask={removeTask}
              key={index}
            />
          );
        })}
      </ScrollView>
      <View style={styles.row_bottom}>
        <Text style={styles.text}>You have {tasks.length} pending tasks</Text>
        <View style={styles.button}>
          <Button
            title="Clear All"
            color={"#601921"}
            onPress={clearAllTasks}
          ></Button>
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: "1%",
    paddingVertical: "1%",
  },
  row_top: {
    flex: 1,
    flexDirection: "row",
    marginVertical: "3%",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  textInput: {
    flex: 3,
    width: "70%",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 18,
    paddingHorizontal: "1%",
    paddingVertical: "2%",
    borderRadius: 5,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#192160",
  },
  icon: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#192160",
    borderColor: "#192160",
    borderWidth: 1,
  },
  list: {
    width: "100%",
    // flex: 2,
    flexDirection: "column",
  },
  row_bottom: {
    flex: 1,
    flexDirection: "row",
    marginVertical: "3%",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  text: {
    flex: 2,
    fontSize: 18,
    alignSelf: "center",
  },
  button: {
    flex: 1,
    backgroundColor: "#601921",
  },
});
