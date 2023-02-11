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
    { title: "unchecked task", checked: false },
    { title: "checked task", checked: true },
    { title: "checked task", checked: true },
    { title: "checked task", checked: true },
    { title: "checked task", checked: true },
    { title: "checked task", checked: true },
    { title: "checked task", checked: true },
    { title: "checked task", checked: true },
    { title: "unchecked task", checked: false },
    { title: "unchecked task", checked: false },
  ]);
  const [inputTxt, setInputText] = useState("");

  const addTask = () => {
    if (!inputTxt)
      ToastAndroid.show("Can't add empty task", ToastAndroid.SHORT);
    else setTasks([...tasks, { title: inputTxt, checked: false }]);
  };

  const removeTask = (_index) => {
    tasks.filter((task, index) => {
      if (index != _index) return task;
    });
    console.log(tasks.length);
  };
  const checkTask = (_index) => {
    let checked;
    setTasks(
      tasks.map((task, index) => {
        if (index == _index) {
          checked = true;
        } else {
          checked = task.checked;
        }
        return {
          title: task.title,
          checked,
        };
      })
    );
  };
  const unCheckTask = (_index) => {
    let checked;
    setTasks(
      tasks.map((task, index) => {
        if (index == _index) {
          checked = false;
        } else {
          checked = task.checked;
        }
        return {
          title: task.title,
          checked,
        };
      })
    );
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
      <View style={styles.list}>
        <ScrollView>
          {tasks.map((task, index) => {
            return (
              <TaskItem
                index={index}
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
      </View>

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
    backgroundColor: "#f7f7ff",
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
    backgroundColor: "#f7f7ff",
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
    backgroundColor: "#f7f7ff",
    color: "#192160",
    borderColor: "#192160",
    borderWidth: 1,
  },
  list: {
    flex: 10,
    width: "100%",
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
