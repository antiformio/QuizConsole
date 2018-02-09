(function () {
    function Question(quest, ansArray, correct) {
        this.quest = quest;
        this.ansArray = ansArray;
        this.correct = correct;
    }

    var ans1 = ['Porto', 'Sporting', 'Benfica'];
    var qu1 = new Question('Melhor clube do mundo?', ans1, 2);

    var ans2 = ['Chaves', 'Vila Real', 'Braga'];
    var qu2 = new Question('Onde nasci ?', ans2, 0);

    var ans3 = ['FEUP', 'ISEP', 'UA'];
    var qu3 = new Question('Melhor faculdade ?', ans3, 1);

    var ans4 = ['Gomorra', 'Chicas del Cable', 'Rita'];
    var qu4 = new Question('Melhor TVSHOW ?', ans4, 0);

    var questArray = [qu1, qu2, qu3, qu4];

    Question.prototype.quiz = function () {
        console.log(this.quest);

        for (var i = 0; i < this.ansArray.length; i++) {
            console.log(i + ' : ' + this.ansArray[i]);
        }

    };

     /*Método para verificar se a resposta é certa ou não
     o callback é o retorno da função score() e serve
     para incrementar o score*/
    Question.prototype.checkAnswer = function (resposta, callback) {
        var sc;
        if (this.correct === resposta) {
            console.log('Resposta Certa!!');
            sc = callback(true);
        } else {
            console.log('Resposta Errada!!');
            sc = callback(false);
        }

        this.displayScore(sc);

    }

    // Método para display do score
    Question.prototype.displayScore = function (score) {
        console.log('----------------------------------------------');
        console.log(' Score: ' + score);
        console.log('----------------------------------------------');
    }


    // Funcão para actualizar o score.
    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    
    // O returno de score() é uma função e fica nesta variavel
    var keepScore = score();

    function novoJogo() {
        var randQues = Math.floor(Math.random() * questArray.length);
        questArray[randQues].quiz();
        var res = prompt('Escolha a resposta correcta.');

        if (res !== 'exit') {
             /*Passamos para checkAnser a variavel keepScore que é uma
             função que incrementa (ou não) um contador privado.*/ 
            questArray[randQues].checkAnswer(parseInt(res), keepScore);
            novoJogo();
        }

    }


    novoJogo();

})();