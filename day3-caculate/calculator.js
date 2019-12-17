{
    // 创建单个button
    function createButtons(text, container, classname) {
        let button = document.createElement('button');
        classname && button.classList.add(classname);
        button.textContent = text.toString();
        container.append(button);
    }
    // 定义按钮
    let keys = [
        ['Clear', '➗'],
        [7, 8, 9, '✖️'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        [0, '.', '=']
    ];
    // 创建界面
    let calc = document.createElement('div');
    calc.classList.add('calc');
    document.body.appendChild(calc);
    let output = document.createElement('div');
    output.classList.add('output');
    let span = document.createElement('span');
    output.appendChild(span);
    span.textContent = '0';
    calc.appendChild(output);
    // 创建多个按钮
    keys.forEach((row) => {
        let div = document.createElement('div');
        div.classList.add('row');
        row.forEach((text) => {
            createButtons(text, div, `button_${text}`);
        });
        calc.append(div);
    });
    let n1 = null;
    let n2 = null;
    let operator = null;
    let result;
    // 计算结果
    let getResult = (n1, n2, operator) => {
        let number1 = parseFloat(n1);
        let number2 = parseFloat(n2);
        let result;
        switch (operator) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '✖️':
                result = number1 * number2;
                break;
            case '➗':
                result = number1 / number2;
                break;
        }
        return result.toString();
    };
    // 事件监听
    calc.addEventListener('click', (e) => {
        if (e.target instanceof HTMLButtonElement) {
            let txt = e.target.textContent;
            if ('0123456789.'.indexOf(txt) > -1) {
                if (operator) {
                    if (result) {
                        n1 = result;
                    }
                    n2 = n2 === null ? txt : n2 + txt;
                    span.textContent = n2;
                }
                else {
                    n1 = n1 === null ? txt : n1 + txt;
                    span.textContent = n1;
                }
            }
            else if (('+-✖️➗').indexOf(txt) > -1) {
                operator = txt;
            }
            else if (operator && txt === '=') {
                span.textContent = result = getResult(n1, n2, operator);
                n1 = null;
                n2 = null;
                operator = null;
            }
            else if (txt === 'Clear') {
                n1 = null;
                n2 = null;
                operator = null;
                result = null;
                span.textContent = '0';
            }
        }
    });
}
