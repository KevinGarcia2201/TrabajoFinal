import React from "react"; // Importa React desde la biblioteca "react."
import { StyleSheet, View } from "react-native";// Importa estilos y componentes de "react-native."

const Row = ({ children }) => {// Define un componente funcional llamado "Row" que toma un prop llamado "children."
  return <View style={styles.container}>{children}</View>; // Devuelve un componente "View" con un estilo definido por "styles.container" y muestra los elementos hijos (children) dentro de él.
};

// create styles of Row
const styles = StyleSheet.create({ // Define un objeto de estilos para el componente "Row."
  container: { // Define un estilo llamado "container."
    flexDirection: "row", // Establece la dirección del flujo de elementos a "row" (horizontal).
  },
});

export default Row;  // Exporta el componente "Row" para su uso en otros lugares del código.
