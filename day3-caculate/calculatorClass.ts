{
    class Calculator{
        public n1:string = null;
        public n2:string = null;
        public operator:string = null;
        public result:string; 
        public calc:HTMLDivElement;
        public span:HTMLSpanElement;
        public keys:Array<Array<string|number>> = [
            ['Clear','➗'],
            [7,8,9,'✖️'],
            ['4','5','6','-'],
            ['1','2','3','+'],
            [0,'.','=']
        ];
        constructor(){
            this.createContainer()
            this.createOutput()
            this.createButton()
            this.bindEvents()
        }
        createContainer(){
            let calc = document.createElement('div')
            calc.classList.add('calc')
            document.body.appendChild(calc)
            this.calc = calc
        }
        createOutput(){
            let div = document.createElement('div')
            let span = document.createElement('span')
            span.textContent = '0'
            div.append(span)
            div.classList.add('output')
            this.calc.append(div)
            this.span = span
        }
        createSingleButton(txt:string,classname:string):HTMLButtonElement{
            let button = document.createElement('button')
            button.textContent = txt
            button.classList.add(`button_${classname}`)
            return button
        }
        createButton(){
             this.keys.forEach((row:Array<string|number>)=>{
                let div = document.createElement('div');
                div.classList.add('row')
                row.forEach((button)=>{
                    div.append(this.createSingleButton(button.toString(),button.toString()))
                })
                this.calc.append(div)
             })       
        }
        getResult(n1:string, n2:string,operator:string):string{
            let number1 = parseFloat(n1)
            let number2 = parseFloat(n2)
            let result:number;
            switch(operator){
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
            return result.toString()
        }
        bindEvents(){
            this.calc.addEventListener('click',(e)=>{
                if(e.target instanceof HTMLButtonElement){
                    if(e.target instanceof HTMLButtonElement){
                        let txt = e.target.textContent;
                        if('0123456789.'.indexOf(txt)>-1){
                            if(this.operator){
                                if(this.result){
                                    this.n1 = this.result
                                }
                                this.n2 = this.n2 === null? txt: this.n2+txt
                                this.span.textContent = this.n2
                            }else{
                                this.n1 = this.n1 === null? txt: this.n1+txt
                                this.span.textContent = this.n1
                            }
                        }else if (('+-✖️➗').indexOf(txt)>-1){
                            this.operator = txt
                        }else if( this.operator && txt === '='){         
                            this.span.textContent = this.result =this.getResult(this.n1,this.n2,this.operator)
                            this.n1=null;
                            this.n2=null;
                            this.operator = null;
                        }else if(txt === 'Clear'){
                            this.n1=null;
                            this.n2=null;
                            this.operator = null;
                            this.result = null;
                            this.span.textContent = '0'
                        }
                    }
                }
            })
        }
    }
    new Calculator()
    
}