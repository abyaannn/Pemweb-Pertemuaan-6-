function appendValue(value) {
    const screen = document.getElementById('screen');
    screen.value += value;
  }
  
  function clearScreen() {
    const screen = document.getElementById('screen');
    screen.value = '';
  }
  
  function calculate() {
    const screen = document.getElementById('screen');
    try {
      screen.value = eval(screen.value);
    } catch (error) {
      screen.value = 'Error';
    }
  }