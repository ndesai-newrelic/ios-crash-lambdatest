import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { List, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

interface Todo {
  id: number;
  text: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id: any) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input}>
        <TextInput
          label="Add a new todo"
          value={newTodo}
          onChangeText={setNewTodo}
        />
      </View>
      <View style={styles.buttons}>
        <Button title="Add" accessibilityLabel="Add" onPress={addTodo} />
        <List.Section>
          {todos.map((todo) => (
            <List.Item
              key={todo.id}
              title={todo.text}
              right={() => (
                <Button
                  title="Delete"
                  onPress={() => deleteTodo(todo.id)}
                />
              )}
            />
          ))}
        </List.Section>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    padding: 10,
    marginTop: 50,
    marginBottom: 10,
    borderRadius: 10,
    color: "black",
  },
  buttons: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default TodoList;
