import React from "react";// Importa React desde la biblioteca "react."
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";  // Importa dimensiones, estilos, texto y TouchableOpacity de "react-native."

export default ({ onPress, text, size, theme }) => {// Define un componente funcional que toma propiedades onPress, text, size y theme.
  const buttonStyles = [styles.button]; // Inicializa un array con el estilo base "button."
  const textStyles = [styles.text]; // Inicializa un array con el estilo base "text."

  if (size === "double") { // Si el tamaño es "double," se agrega el estilo "buttonDouble" al array de estilos "buttonStyles."
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") { // Si el tema es "secondary," se agrega el estilo "buttonSecondary" al array de estilos "buttonStyles" y "textSecondary" al array de estilos "textStyles."
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {// Si el tema es "accent," se agrega el estilo "buttonAccent" al array de estilos "buttonStyles."
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    // Devuelve un componente "TouchableOpacity" con las propiedades de "onPress" y el estilo "buttonStyles."
    <TouchableOpacity onPress={onPress} style={buttonStyles}> 
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

// set dimmenstion
const screen = Dimensions.get("window");// Obtiene las dimensiones de la ventana del dispositivo.
const buttonWidth = screen.width / 4;  // Calcula el ancho de un botón como una cuarta parte del ancho de la pantalla.

const styles = StyleSheet.create({  // Define un objeto de estilos.
  button: { // Define un estilo llamado "button."
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: { // Define un estilo llamado "text."
    color: "#fff",
    fontSize: 24,
  },
  textSecondary: { // Define un estilo llamado "textSecondary."
    color: "#060606",
  },
  buttonDouble: { // Define un estilo llamado "buttonDouble."
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: { // Define un estilo llamado "buttonSecondary."
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: { // Define un estilo llamado "buttonAccent."
    backgroundColor: "#ffc107",
  },
});
