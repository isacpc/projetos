var tabela = document.getElementsByTagName("table")[0];     //pega tabela
var pegaDivAll = document.getElementById("todoImg");        //div geral
var novaDiv  = document.createElement('div');               //criar div para imagem
var sHi=[], sHf=[], sMi=[], sMf=[];
var horaInicial=[], horaFinal=[], minutoInicial=[], minutoFinal=[], armIndicei=[], armIndicef=[], guarda, tot = [];
var teste = [];


//guarda linha, tabela, horas e saldo
var tabelaLinhaAdicionada = [];
var tabelaTarefaAdicionada = [];
var tabelaHoraiAdicionada = [];
var tabelaHorafAdicionada = [];
var tabelaSaldoAdicionado = [];
//fim

//variáveis de input
var inputTarefa = [];
var inputHorai = [];
var inputHoraf = [];
var inputSaldo = [];
//fim

//contador e início de distância do marfin top para a imagem de mais
var cont = 0;
var pixel = 0;
//fim

novaDiv.setAttribute("id", "novaDiv");

//imagem de mais
var imagemPlus = document.createElement('img');//não se pode adicionar o src aqui
imagemPlus.src = "_imagens/plus.png";// tem de ser atribuído depois
imagemPlus.setAttribute("id", "mais");
imagemPlus.addEventListener("click", preLinha);
//fim

//imagem de impressora
var imagemImpressora = document.createElement('img');
imagemImpressora.src = "_imagens/printer.png";
imagemImpressora.setAttribute("id", "impressora");
imagemImpressora.addEventListener("click", function(){
    window.print();
});
//fim

//imagem de menos
var imagemMinus = document.createElement('img');
imagemMinus.src = "_imagens/minus.png";
imagemMinus.setAttribute("id", "menos");
imagemMinus.addEventListener("click", tiraLinha);
//fim

function tiraLinha(){
    if (tabelaLinhaAdicionada.length > 0 && tabela.childNodes.length > 2) {
        pixel-=24;
        if (tabelaLinhaAdicionada.length == 1) {
            pixel-=22;
        }
        inputTarefa.splice((inputTarefa.length-1),1);
        inputHorai.splice((inputHorai.length-1),1);
        inputHoraf.splice((inputHoraf.length-1),1);
        inputSaldo.splice((inputSaldo.length-1),1);
        horaInicial.splice((horaInicial.length-1),1);
        horaFinal.splice((horaFinal.length-1),1);
        minutoInicial.splice((horaInicial.length-1),1);
        minutoFinal.splice((horaFinal.length-1),1);
        tabelaHoraiAdicionada.splice((tabelaHoraiAdicionada.length-1),1);
        tabelaHorafAdicionada.splice((tabelaHorafAdicionada.length-1),1);
        tabelaSaldoAdicionado.splice((tabelaSaldoAdicionado.length-1),1);
        tabelaTarefaAdicionada.splice((tabelaTarefaAdicionada.length-1),1);
        tabelaLinhaAdicionada.splice((tabelaLinhaAdicionada.length-1),1);
        catchRel.splice((catchRel-1),1)
        catchRel2.splice((catchRel2-1),1)
        tabela.removeChild(tabela.childNodes[(tabela.childNodes.length-1)]);

            imagemPlus.style.marginTop = pixel+"px";
            imagemMinus.style.marginTop = pixel+"px";
        cont -= 1;

    }
}

pegaDivAll.appendChild(novaDiv);

novaDiv.appendChild(imagemPlus);
novaDiv.appendChild(imagemMinus);
novaDiv.appendChild(imagemImpressora);

//variáveis que iram alocar as imagens do relógio de cada coluna de hora
var catchRel = [];
var catchRel2 = [];
//fim


function preLinha(){
    tabelaLinhaAdicionada.push(document.createElement('tr'));
    tabelaTarefaAdicionada.push(document.createElement('td'));
        inputTarefa.push(document.createElement('input'));
    tabelaHoraiAdicionada.push(document.createElement('td'));
        inputHorai.push(document.createElement('input'));
        
    tabelaHorafAdicionada.push(document.createElement('td'));
        inputHoraf.push(document.createElement('input'));
    tabelaSaldoAdicionado.push(document.createElement('td'));
        inputSaldo.push(document.createElement('input'));
    Adiciona(cont);
}

function Adiciona(x){
    if (tabelaLinhaAdicionada.length == 1) {
        pixel+=22;
    }
    preClock();
    pixel += 24;
    inputTarefa[x].type = "text";
        inputTarefa[x].setAttribute("class", "inputTarefa");
        inputTarefa[x].setAttribute("placeholder", ("Digite a Tarefa "+(x+1)));
    inputHorai[x].type = "time";
        inputHorai[x].setAttribute("class", "inputHi");
        inputHorai[x].setAttribute("id", "si"+cont);
        inputHorai[x].addEventListener("change", saldoAddi);
    inputHoraf[x].type = "time";
        inputHoraf[x].setAttribute("class", "inputHf");
        inputHoraf[x].setAttribute("id", "sf"+cont);
        inputHoraf[x].addEventListener("change", saldoAddf);
    inputSaldo[x].type = "text";
        inputSaldo[x].setAttribute("class", "inputSaldo");
        inputSaldo[x].value = "-";
        inputSaldo[x].setAttribute("readonly", "true");
        
    tabela.appendChild(tabelaLinhaAdicionada[x]);
    tabelaLinhaAdicionada[x].appendChild(tabelaTarefaAdicionada[x]);
        tabelaTarefaAdicionada[x].appendChild(inputTarefa[x]);
    tabelaLinhaAdicionada[x].appendChild(tabelaHoraiAdicionada[x]);
        tabelaHoraiAdicionada[x].appendChild(inputHorai[x]);
        tabelaHoraiAdicionada[x].appendChild(catchRel[x]);
    tabelaLinhaAdicionada[x].appendChild(tabelaHorafAdicionada[x]);
        tabelaHorafAdicionada[x].appendChild(inputHoraf[x]);
        tabelaHorafAdicionada[x].appendChild(catchRel2[x]);
    tabelaLinhaAdicionada[x].appendChild(tabelaSaldoAdicionado[x]);
        tabelaSaldoAdicionado[x].appendChild(inputSaldo[x]);
        imagemPlus.style.marginTop = pixel +"px";
        imagemMinus.style.marginTop = pixel +"px";
    cont++;
}

function preClock(){

    catchRel[cont] = new Image();
    catchRel[cont] = document.createElement('img');
    catchRel[cont].src = "_imagens/time.png";
    catchRel[cont].setAttribute("id", cont)
    catchRel[cont].addEventListener("click",addHi);

    catchRel2[cont] = new Image();
    catchRel2[cont] = document.createElement('img');
    catchRel2[cont].src = "_imagens/time.png";
    catchRel2[cont].setAttribute("id", cont)
    catchRel2[cont].addEventListener("click",addHf);
}

function saldoAddi(){
    var idNome = String(event.target.getAttribute("id"));
    var idNum = parseInt(idNome.substring(2, idNome.length));
    var inputHstr= String(inputHorai[idNum].value);
    sHi[0] = parseInt(inputHstr.substring(0,2));
    sHi[1] = idNum;
    sHi[2] = 1;
    sMi[0] = parseInt(inputHstr.substring(3,5));
    sMi[1] = idNum;
    sMi[2] = 1; //trocar esse psuh por posição fixa
    AdicionaSaldo(sHi, sMi);
}

function saldoAddf(){
    var idNome = String(event.target.getAttribute("id"));
    var idNum = parseInt(idNome.substring(2, idNome.length));
    var inputHstr= String(inputHoraf[idNum].value);
    sHf[0] = parseInt(inputHstr.substring(0,2));
    sHf[1] = idNum;
    sHf[2] = 2;
    sMf[0] = parseInt(inputHstr.substring(3,5));
    sMf[1] = idNum;
    sMf[2] = 2;
    AdicionaSaldo(sHf, sMf);
}

function AdicionaSaldo(a1, a2){
    //a1 e a2 ordem [tempo, id, número de identificação do if]
    //criar um array que armazene os inputs da linha específica e cada coluna, para não acontecer que a linha de cima interfira na de baixo
    
    if (a1[2] == 1 && a2[2] == 1) {
        var mat1 = a1;
        var mat2 = a2; 
        if (a1[0] >= 10 || a2[0] >= 10) {
            if (a1[0] >= 10) {
                horaInicial[a1[1]] = String(a1[1]) + "." + a1[0]; //vai armazenar os valores, com o número de íncide que vale o id da linha
            }
            if (a2[0] >= 10) {
                minutoInicial[a2[1]] = String(a1[1]) + "." + a2[0];
            }
            
        }
        if (a1[0] < 10 || a2[0] < 10) {
            if (a1[0] < 10) {
                horaInicial[a1[1]] = a1[1] + "." + "0" + a1[0];   //vai armazenar os valores, com o número de íncide que vale o id da linha
            }
            if (a2[0] < 10) {
                minutoInicial[a2[1]] = a1[1] + "." + "0" + a2[0];
            }
        } 

        guarda = parseInt(a1[1]);
    }

    if (a1[2] == 2 && a2[2] == 2) {
        var mat1 = a1;
        var mat2 = a2; 
        if (a1[0] >= 10 || a2[0] >= 10) {
            if (a1[0] >= 10) {
                horaFinal[a1[1]] = String(a1[1]) + "." + a1[0]; //vai armazenar os valores, com o número de íncide que vale o id da linha
            }
            if (a2[0] >= 10) {
                minutoFinal[a2[1]] = String(a1[1]) + "." + a2[0];
            }
        }
        if (a1[0] < 10 || a2[0] < 10) {
            if (a1[0] < 10) {
                horaFinal[a1[1]] = a1[1] + "." + "0" + a1[0];   //vai armazenar os valores, com o número de íncide que vale o id da linha
            }
            if (a2[0] < 10) {
                minutoFinal[a2[1]] = a1[1] + "." + "0" + a2[0];
            }
        }
        guarda = parseInt(a1[1]);
    }
    //Agora os id's acompanham os valores em uma string 'id+valor', exemplo 312, id = 3, valor 12
    //Preciso que o valor seja atualizado no saldo quando as duas colunas de uma linha forem completadas
    
    if (parseInt(horaInicial[guarda].substring(0,1)) == parseInt(horaFinal[guarda].substring(0,1))) {
        var saldoHora = parseInt(horaFinal[guarda].substring((horaFinal[guarda].length-2),horaFinal[guarda].length)) - parseInt(horaInicial[guarda].substring((horaInicial[guarda].length-2),horaInicial[guarda].length));
        if (saldoHora < 0) {
            saldoHora+=24;
        }
        var saldoTot = contaTot(parseInt(minutoFinal[guarda].substring((minutoFinal[guarda].length-2),minutoFinal[guarda].length)), parseInt(minutoInicial[guarda].substring((minutoInicial[guarda].length-2),minutoInicial[guarda].length)),saldoHora);
        inputSaldo[guarda].value = tot[0]+"h"+tot[1]+"min";

    }


}


function contaTot(mf,mi,sh){
    var contm;
    if (mf < mi){
        contm = mf-mi;
        contm+= 60;
        sh -= 1;
    } else {
        contm = mf-mi;
    }
    if (sh < 0) {
        sh+=24;
    }
    tot[0] = sh;
    tot[1] = contm;
}

function addHi(){
    var horaT = new Date();
    var h = horaT.getUTCHours()-3;
    var m = horaT.getUTCMinutes();
    //guarda o número do id ao apertar e retorna isso pro preClocK ou usa aqui mesmo, mas tem qe criar um id pra cada 
    var numid = parseInt(event.target.getAttribute("id"));
    var hi = [h,numid,1];
    var hf = [m,numid,1];
    if (h < 0) {
        hi[0]+=24;
    }
    if (h == -3) {
        h = 21;
    } else if (h == -2) {
        h = 22;
    } else if (h == -1) {
        h = 23;
    } 

    if (h < 10) {
        h = "0"+String(h);
    }

    if (m < 10) {
        m = "0"+String(m);
    }
    inputHorai[numid].value = h+":"+m;
    AdicionaSaldo(hi, hf);
    //como cada um faz seu papel, ao invés de colocar algum parâmetro pra receber na função, é mais fácil usar event.target
    
}

function addHf(){
    var horaT = new Date();
    var h = horaT.getUTCHours()-3;
    var m = horaT.getUTCMinutes();
    //guarda o número do id ao apertar e retorna isso pro preClocK ou usa aqui mesmo, mas tem qe criar um id pra cada 
    var numid = parseInt(event.target.getAttribute("id"));
    var hi = [h,numid,2];
    var hf = [m,numid,2];
    if (h < 0) {
        hi[0]+=24;
    }
    if (h == -3) {
        h = 21;
    } else if (h == -2) {
        h = 22;
    } else if (h == -1) {
        h = 23;
    } 

    if (h < 10) {
        h = "0"+String(h);
    }

    if (m < 10) {
        m = "0"+String(m);
    }
    inputHoraf[numid].value = h+":"+m;
    AdicionaSaldo(hi, hf);
}



