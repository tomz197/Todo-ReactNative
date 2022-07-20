import Swipeable from 'react-native-swipeable';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from "react-native";

const leftContent = <Text>Pull to activate</Text>;
 
const rightButtons = [
  <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
  <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
];
 
export default SwipeGesture = () => {
  return (
    <Swipeable leftContent={leftContent} onLeftActionRelease={() => alert("swiped")} rightButtons={rightButtons}>
      <Text>My swipeable content</Text>
    </Swipeable>
  );
}