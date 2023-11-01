// Definición del estado inicial de la calculadora
export const initialState = {
    currentValue: "0",  // Valor actual en la pantalla de la calculadora
    operator: null,          // Operador seleccionado
    previousValue: null,     // Valor anterior
  };
  

  // Función para manejar la entrada de números
  export const handleNumber = (value, state) => {
    if (state.currentValue === "0") {
      // Si el valor actual es "0", lo reemplazamos con el nuevo número
      return { currentValue: `${value}` };
    }
  // Si hay un valor actual, concatenamos el nuevo número
    return {
      currentValue: `${state.currentValue}${value}`,
    };
  };
  
  // Función para realizar cálculos cuando se presiona el botón de igual
  const handleEqual = (state) => {
    const { currentValue, previousValue, operator } = state;
  
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = { operator: null, previousValue: null };
  
    switch (operator) {
      case "+":
        return {
          currentValue: `${previous + current}`,
          ...resetState,
        };
      case "-":
        return {
          currentValue: `${previous - current}`,
          ...resetState,
        };
      case "*":
        return {
          currentValue: `${previous * current}`,
          ...resetState,
        };
      case "/":
        return {
          currentValue: `${previous / current}`,
          ...resetState,
        };
  
      default:
        return state;
    }
  };
  
  // Función principal de la calculadora que maneja diferentes tipos de acciones
  const calculator = (type, value, state) => {
    switch (type) {
      case "number":
        return handleNumber(value, state);
      case "clear":
        return initialState;
      case "posneg":
        return {
          currentValue: `${parseFloat(state.currentValue) * -1}`,
        };
      case "percentage":
        return {
          currentValue: `${parseFloat(state.currentValue) * 0.01}`,
        };
      case "operator":
        return {
          operator: value,
          previousValue: state.currentValue,
          currentValue: "0",
        };
      case "equal":
        return handleEqual(state);
      default:
        return state;
    }
  };
  
  export default calculator;
  