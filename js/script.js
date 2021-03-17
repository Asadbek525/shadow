let output_code = document.getElementById('output--code');
    let output_code1 = document.getElementById('output--code1');
    let box = document.getElementById('box');
    let text = document.getElementById('text');
    const onChange = (event) => {
      return event.target.value;
    };
    const onKeyup = () => {
      let style = onChange(event);
      box.style = style;
      console.log('working');
      output_code.innerText = style;
    };
    const onFocus = () => {
      onKeyup();
    };
    const onChangeText = (event) => {
      return event.target.value;
    };
    const onKeyupText = () => {
      let style = onChangeText(event);
      text.style = style;
      console.log('working');
      output_code1.innerText = style;
    };
    const onFocusText = () => {
      onKeyupText();
    };