
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@my_todo_tasks';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  // READ: Load saved tasks when the app starts
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem(STORAGE_KEY);

      if (savedTasks !== null) {
        const parsedTasks = JSON.parse(savedTasks);

        if (Array.isArray(parsedTasks)) {
          setTasks(parsedTasks);
        }
      }
    } catch (error) {
      console.log('Error loading tasks:', error);
      Alert.alert('Error', 'Unable to load saved tasks.');
    } finally {
      setLoading(false);
    }
  };

  // SAVE: Store tasks using JSON.stringify()
  const saveTasks = async (updatedTasks) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedTasks)
      );

      setTasks(updatedTasks);
      return true;
    } catch (error) {
      console.log('Error saving tasks:', error);
      Alert.alert('Error', 'Unable to save tasks.');
      return false;
    }
  };

  // CREATE and UPDATE
  const handleSaveTask = async () => {
    const trimmedInput = taskInput.trim();

    if (trimmedInput === '') {
      Alert.alert('Required', 'Please enter a task first.');
      return;
    }

    let updatedTasks;

    if (editingId !== null) {
      // UPDATE existing task
      updatedTasks = tasks.map((task) =>
        task.id === editingId
          ? { ...task, title: trimmedInput }
          : task
      );
    } else {
      // CREATE new task
      const newTask = {
        id: Date.now().toString(),
        title: trimmedInput,
        completed: false,
      };

      updatedTasks = [...tasks, newTask];
    }

    const success = await saveTasks(updatedTasks);

    if (success) {
      setTaskInput('');
      setEditingId(null);
    }
  };

  // EDIT: Place selected task inside the input
  const handleEditTask = (task) => {
    setTaskInput(task.title);
    setEditingId(task.id);
  };

  // CANCEL EDITING
  const handleCancelEdit = () => {
    setTaskInput('');
    setEditingId(null);
  };

  // UPDATE: Mark task as completed or not completed
  const toggleTask = async (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    await saveTasks(updatedTasks);
  };

  // DELETE
  const handleDeleteTask = (id) => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            const updatedTasks = tasks.filter(
              (task) => task.id !== id
            );

            const success = await saveTasks(updatedTasks);

            if (success && editingId === id) {
              handleCancelEdit();
            }
          },
        },
      ]
    );
  };

  // DISPLAY EACH TASK
  const renderTask = ({ item }) => (
    <View style={styles.taskCard}>
      <TouchableOpacity
        style={styles.taskContent}
        onPress={() => toggleTask(item.id)}
      >
        <View
          style={[
            styles.checkbox,
            item.completed && styles.checkedBox,
          ]}
        >
          {item.completed && (
            <Text style={styles.checkMark}>✓</Text>
          )}
        </View>

        <Text
          style={[
            styles.taskText,
            item.completed && styles.completedText,
          ]}
        >
          {item.title}
        </Text>
      </TouchableOpacity>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEditTask(item)}
        >
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteTask(item.id)}
        >
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4F46E5" />
        <Text style={styles.loadingText}>Loading your tasks...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.title}>My To-Do List</Text>
          <Text style={styles.subtitle}>
            Stay organized and get things done!
          </Text>
        </View>

        {/* INPUT SECTION */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a new task..."
            placeholderTextColor="#999"
            value={taskInput}
            onChangeText={setTaskInput}
            onSubmitEditing={handleSaveTask}
            returnKeyType="done"
          />

          <TouchableOpacity
            style={styles.addButton}
            onPress={handleSaveTask}
          >
            <Text style={styles.addButtonText}>
              {editingId !== null ? 'Update' : 'Add'}
            </Text>
          </TouchableOpacity>
        </View>

        {editingId !== null && (
          <TouchableOpacity
            onPress={handleCancelEdit}
            style={styles.cancelButton}
          >
            <Text style={styles.cancelText}>Cancel Editing</Text>
          </TouchableOpacity>
        )}

        {/* TASK COUNTER */}
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>
            Total Tasks: {tasks.length}
          </Text>

          <Text style={styles.counterText}>
            Completed: {tasks.filter((task) => task.completed).length}
          </Text>
        </View>

        {/* TASK LIST */}
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={renderTask}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                No tasks yet!
              </Text>
              <Text style={styles.emptySubtext}>
                Add your first task above.
              </Text>
            </View>
          }
        />

        {/* FOOTER */}
        <Text style={styles.footer}>
          Your tasks are saved on this device.
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// STYLES
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#F4F5FB',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F5FB',
  },

  loadingText: {
    marginTop: 12,
    color: '#555',
  },

  header: {
    backgroundColor: '#4F46E5',
    padding: 25,
    paddingTop: 35,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  subtitle: {
    fontSize: 14,
    color: '#E0E7FF',
    marginTop: 7,
  },

  inputContainer: {
    flexDirection: 'row',
    margin: 18,
    gap: 10,
  },

  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  addButton: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: 22,
    justifyContent: 'center',
    borderRadius: 12,
  },

  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },

  cancelButton: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: -10,
    marginBottom: 10,
  },

  cancelText: {
    color: '#4F46E5',
    fontWeight: '600',
  },

  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 12,
  },

  counterText: {
    color: '#555',
    fontWeight: '600',
    fontSize: 13,
  },

  listContent: {
    paddingHorizontal: 18,
    paddingBottom: 20,
    flexGrow: 1,
  },

  taskCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },

  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 23,
    height: 23,
    borderWidth: 2,
    borderColor: '#4F46E5',
    borderRadius: 6,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkedBox: {
    backgroundColor: '#4F46E5',
  },

  checkMark: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  taskText: {
    fontSize: 15,
    color: '#333',
    flex: 1,
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
    gap: 8,
  },

  editButton: {
    backgroundColor: '#F59E0B',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 7,
  },

  deleteButton: {
    backgroundColor: '#EF4444',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 7,
  },

  actionText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },

  emptyContainer: {
    alignItems: 'center',
    marginTop: 65,
  },

  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
  },

  emptySubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 7,
  },

  footer: {
    textAlign: 'center',
    padding: 15,
    fontSize: 12,
    color: '#888',
  },
});