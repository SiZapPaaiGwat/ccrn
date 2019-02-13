import { TodoListScreen, TrashListScreen } from '../screens/Todos/index'
import SettingsScreen from '../screens/Settings/index'
import WebViewScreen from '../screens/WebView/index'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'

const TodoListStack = createStackNavigator(
  {
    TodoList: TodoListScreen,
    Settings: SettingsScreen,
    Register: WebViewScreen
  },
  {
    initialRouteName: 'TodoList',
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#bbb'
      }
    }
  }
)

const TrashListStack = createStackNavigator(
  {
    TrashList: TrashListScreen,
    Settings: SettingsScreen
  },
  {
    initialRouteName: 'TrashList'
  }
)

const routes = {
  TodoList: TodoListStack,
  TrashList: TrashListStack
}

export const AppNavigator = createAppContainer(createBottomTabNavigator(routes, {
  initialRouteName: 'TodoList'
}))
