import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function TaskTracker() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (taskText.trim() === '') return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: taskText,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setTaskText('');
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskCard}>
      <TouchableOpacity
        style={styles.taskInfo}
        onPress={() => toggleTask(item.id)}
      >
        <Text style={styles.statusIcon}>
          {item.completed ? '✓' : '○'}
        </Text>

        <Text
          style={[
            styles.taskText,
            item.completed && styles.completedTask,
          ]}
        >
          {item.title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask(item.id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Task Tracker</Text>

      <Text style={styles.subtitle}>
        Manage your daily tasks
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a new task..."
          value={taskText}
          onChangeText={setTaskText}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addTask}
        >
          <Text style={styles.addButtonText}>
            Add
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total Tasks: {tasks.length}
        </Text>

        <Text style={styles.summaryText}>
          Completed:{' '}
          {tasks.filter((task) => task.completed).length}
        </Text>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No tasks yet. Add one above.
          </Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },

  subtitle: {
    color: '#777',
    marginTop: 4,
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },

  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 14,
    fontSize: 15,
    marginRight: 10,
  },

  addButton: {
    backgroundColor: '#4F46E5',
    borderRadius: 14,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  summaryText: {
    fontWeight: '600',
    color: '#555',
  },

  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  taskInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  taskText: {
    fontSize: 15,
    fontWeight: '500',
  },

  completedTask: {
    textDecorationLine: 'line-through',
    color: '#888',
  },

  deleteButton: {
    backgroundColor: '#EF4444',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },

  deleteText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 40,
  },
});