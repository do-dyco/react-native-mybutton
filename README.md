Installation
You can install this package using npm:

bash
npm install your-package-name

Usage
Below is an example of how to use the Button component in your React Native project:

tsx

import React from "react";
import { View, Text } from "react-native";
import { Button } from "your-package-name";

export default function App() {
  return (
    <View>
      <Button
        onPress={() => alert("Button Pressed")}
        type="primary"
        variant="solid"
        size="lg"
      >
        Press Me
      </Button>
    </View>
  );
}

Props
Prop	Type	Default	Description
children	ReactNode	-	The text or elements to display inside the button.
onPress	function	-	Function to call when the button is pressed.
type	string	primary	The color type of the button (primary, secondary, success, danger).
style	object	-	Additional styles for the button.
variant	string	solid	Button appearance (solid, outline, link).
size	string	md	Button size (xs, sm, md, lg, xl).
Button Types
The type prop allows you to define different color themes for the button:

primary: Blue color
secondary: Gray color
success: Green color
danger: Red color
Button Variants
The variant prop defines how the button looks:

solid: A button with a solid background.
outline: A transparent button with a border.
link: A button without a border or background, appearing like a link.
Button Sizes
The size prop adjusts the size of the button:

xs: Extra small button
sm: Small button
md: Medium button (default)
lg: Large button
xl: Extra large button