# Mobile Programming 1

Activities and exercises from my **Mobile Programming 1** course. They start with JavaScript fundamentals and move on to building React Native screens in TypeScript.

## Activities

| Activity | Topic | What it demonstrates |
|----------|-------|----------------------|
| [Activity 1.2](activity-1.2-oop-recap) | JavaScript classes (Student Management System) | Objects, classes, inheritance (`Person` → `Student`, `Teacher`), `Course` class |
| [Activity 1.3](activity-1.3-javascript-essentials) | JavaScript arrays and functions (Student Information Dashboard) | Variables, arrays, spread operator, `map()` and `filter()` |
| [Activity 2](activity-2-static-ui) | Static App UI | Personal Finance Dashboard built from reusable components (`BalanceCard`, `TransactionCard`, `CategoryCard`), `StyleSheet` styling |
| [Activity 3](activity-3-user-input-flatlist) | User Input and FlatList | Task tracker with `TextInput`, `useState`, `FlatList`, mark as complete and delete |
| [Activity 4](activity-4-app-navigation) | App Navigation | Recipe app using React Navigation (native stack), passing data between screens with route params |

## Tech

- JavaScript (Node.js) for Activities 1.2 and 1.3
- React Native with TypeScript for Activities 2 to 4
- React Navigation (`@react-navigation/native-stack`) for Activity 4

## Running the activities

**Activities 1.2 and 1.3** (JavaScript):

```bash
node "activity-1.2-oop-recap/student_management.js"
node "activity-1.3-javascript-essentials/student_dashboard.js"
```

**Activities 2 to 4** are React Native screens. They are course code files, not full projects, so copy them into an [Expo](https://expo.dev) project to run them (Activity 4 also needs `npm install @react-navigation/native @react-navigation/native-stack`).

## Screenshots

> 📸 Screenshots coming soon — run the activities locally to see them in action.

## Author

**Ella Talahiban**: [github.com/eltlhibn](https://github.com/eltlhibn)
