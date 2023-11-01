import React, { Component } from "react"; // Importa React y Component desde la biblioteca "react."
import { SafeAreaView, StyleSheet, Text, View } from "react-native"; // Importa componentes y estilos de "react-native."
import Button from "./components/Button";  // Importa el componente "Button" desde un archivo personalizado.
import Row from "./components/Row";  // Importa el componente "Row" desde un archivo personalizado.
import calculator, { initialState } from "./util/calculator";  // Importa funciones y objetos desde "calculator."

// create class component of App
export default class App extends Component { // Define una clase de componente llamada "App."
  state = initialState;  // Inicializa el estado del componente con el objeto "initialState."

  // handle tap method
  HandleTap = (type, value) => { // Declara un método llamado "HandleTap" para manejar las acciones del usuario.
    this.setState((state) => calculator(type, value, state)); // Actualiza el estado del componente utilizando la función "calculator."
  };

  // render method
  render() { // Inicia el método "render" para definir la interfaz de usuario de la aplicación.
    return ( // Comienza la declaración del JSX para la estructura de la interfaz de usuario.
       // Crea un componente "View" con un estilo definido por "styles.container."
       <View style={styles.container}>
        {/*// Envuelve el contenido con un componente "SafeAreaView" para proporcionar una zona segura en dispositivos móviles.*/}
        <SafeAreaView>
          <Text style={styles.value}> {/*// Crea un componente "Text" con un estilo definido por "styles.value" para mostrar el valor actual.*/}
            {parseFloat(this.state.currentValue).toLocaleString()} {/*// Muestra el valor actual en un formato legible para el usuario.*/}
          </Text>

      {/* Define filas de botones y botones con sus respectivas funciones "onPress." */}
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.HandleTap("clear")}
            />

            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.HandleTap("posneg")}
            />

            <Button
              text="%"
              theme="secondary"
              onPress={() => this.HandleTap("percentage")}
            />

            <Button
              text="/"
              theme="accent"
              onPress={() => this.HandleTap("operator", "/")}
            />
          </Row>

          {/* Number */}
          <Row>
            <Button text="7" onPress={() => this.HandleTap("number", 7)} />
            <Button text="8" onPress={() => this.HandleTap("number", 8)} />
            <Button text="9" onPress={() => this.HandleTap("number", 9)} />
            <Button
              text="X"
              theme="accent"
              onPress={() => this.HandleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="5" onPress={() => this.HandleTap("number", 5)} />
            <Button text="6" onPress={() => this.HandleTap("number", 6)} />
            <Button text="7" onPress={() => this.HandleTap("number", 7)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.HandleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.HandleTap("number", 1)} />
            <Button text="2" onPress={() => this.HandleTap("number", 2)} />
            <Button text="3" onPress={() => this.HandleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.HandleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button text="0" onPress={() => this.HandleTap("number", 0)} />
            <Button text="." onPress={() => this.HandleTap("number", ".")} />
            <Button
              text="="
              theme="primary"
              onPress={() => this.HandleTap("equal", "=")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}

// create styles of app
const styles = StyleSheet.create({  // Define un objeto de estilos.
  container: {  // Define un estilo llamado "container."
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: { // Define un estilo llamado "value."
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
