import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  View,
} from "react-native";
import { StyleProp } from "react-native";

interface CustomButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  type?: "primary" | "secondary" | "success" | "danger" | "clear";
  style?: StyleProp<ViewStyle>;
  variant?: "solid" | "outline" | "link";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Button = ({
  children,
  onPress,
  type = "primary",
  style,
  variant = "solid",
  size = "md",
}: CustomButtonProps) => {
  return (
    <View
      style={[
        styles.button,
        styles[type],
        styles[variant],
        style,
        styles[size],
      ]}
    >
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            styles.text,
            variant === "outline" || variant === "link"
              ? styles.clearButtonText
              : styles.buttonText,
          ]}
        >
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    margin: 10,
  } as ViewStyle,
  xs: {
    width: "40%",
  },
  sm: {
    width: "50%",
  },
  md: {
    width: "60%",
  },
  lg: {
    width: "70%",
  },
  xl: {
    width: "100%",
    height: 100,
  },
  primary: {
    backgroundColor: "#1c6dc4",
    borderColor: "#1c6dc4",
  },
  secondary: {
    backgroundColor: "#474747",
    borderColor: "#474747",
  },
  success: {
    backgroundColor: "#1ca75d",
    borderColor: "#1ca75d",
  },
  danger: {
    backgroundColor: "#DC2626",
    borderColor: "#DC2626",
  },
  solid: {},
  outline: {
    borderWidth: 1,
    backgroundColor: "transparent",
  },
  link: {
    borderWidth: 0,
    backgroundColor: "transparent",
  },
  clear: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
  },
  clearButtonText: {
    color: "black",
  },
});
