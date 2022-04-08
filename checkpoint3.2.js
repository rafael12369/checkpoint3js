function aluno (nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function() {
        let somaNotas = 0;   
        for (let nota of this.notas) {
             somaNotas += nota;
        }
        return somaNotas / this.notas.length;
    };
    this.addfalta = function() {
        this.faltas++;
        return this.faltas;
    };
}

let aluno1 = new aluno ("Rafael", 2, [9, 8, 7]);
let aluno2 = new aluno ("Jose", 5 , [7, 8, 8]);
let aluno3 = new aluno ("Pedro", 2, [9, 8, 8]);


let cursos = {
    nomeCurso: "Certfied Tech Developer",
    notaAprovacao: 7,
    faltasMaximas: 5,
    listaEstudantes: [aluno1, aluno2, aluno3],
    addAluno: function (nome, faltas, notas) {
        this.listaEstudantes.push(new aluno (nome, faltas, notas));
    },
    aprovacao: function (aluno) {
        if (aluno.calcularMedia() >= this.notaAprovacao && aluno.faltas < this.faltasMaximas) {
            return true;
        }
        else if (aluno.faltas == this.faltasMaximas &&  aluno.calcularMedia() >  this.notaAprovacao + (this.notaAprovacao / 10)) {
            return true;
        }
        else {
            return false;
        }
    },
    listaResultados: function() {
        resultados = []
        for (let i = 0; i < this.listaEstudantes.length; i++) {
          resultados.push(this.aprovacao (this.listaEstudantes[i]));
        }
        return resultados;
    }

}
console.log(cursos.listaEstudantes);
console.log(cursos.listaResultados());