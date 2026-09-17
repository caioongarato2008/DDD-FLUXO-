const requisicao = require('readline-sync')

class Reserva{
    constructor(sistema, data_entrada, data_saida, quarto, id_c){
        this.status = "Pendente"
        this.check_in = data_entrada
        this.check_out = data_saida
        this.sistema = sistema
        this.quarto = quarto
        this.id_c = id_c
    }
    
}

class Funcionario{

    constructor(){
    }

    login(email, senha){

        if(this.email == email && this.password == senha){

            return true

        }
        else{

            return false
        }
    
    }

    cadastro(nome, cpf, email, senha, sistema){

        this.id_u = ''
        this.user_name = nome
        this.cpf = cpf
        this.email = email
        this.password = senha
        sistema.funcionarios.push(this)

        while(true){
            this.id_u += String(Math.floor(Math.random()*10))
            if(this.id_u.length == 8){
                break
            }
        }
    }

    ver_meus_dados(){
        console.log(`\nNome de usuário: ${this.user_name}`)
        console.log(`\nID: ${this.id_u}`)
        console.log(`\nCPF: ${this.cpf}`)
        console.log(`\nEmail: ${this.email}`)
        console.log(`\nSenha: ${this.password}`)
    }

    ver_lista_de_quartos(sistema){

        var c = 0
        console.log(`\nTotal de ${sistema.quartos.length} quartos disponíveis:`)
        while(true){

            console.log(`\n${c+1}:`)
            console.log(`Número de camas: ${sistema.quartos[c].number_beds}`)
            console.log(`Preço por noite: ${sistema.quartos[c].price_night}`)
            console.log(`Nome: ${sistema.quartos[c].name}`)
            console.log(`Descrição: ${sistema.quartos[c].description}`)
            c += 1

            if(sistema.quartos.length == c){
                break
            }
         
        }

    }
    ver_lista_de_reservas(sistema){

        if(sistema.reservas.length == 0){

            console.log("\nNenhuma reserva realizada.")
        }

        else{

            var c = 0
            console.log(`\nTotal de ${sistema.reservas.length} reservas feitas:`)
            while(true){

                console.log(`\n${c+1}:`)
                console.log(`Data de Check-In: ${sistema.reservas[c].check_in}`)
                console.log(`Data de Check-Out: ${sistema.reservas[c].check_out}`)
                console.log(`Quarto Reservado: ${sistema.reservas[c].quarto.name}`)
                console.log(`ID do Cliente: ${sistema.reservas[c].id_c}`)
                c += 1

                if(sistema.reservas.length == c){
                    break
                }
                
            }

        }

    }

    ver_lista_de_clientes(sistema){

        if(sistema.clientes.length == 0){

            console.log("\nNenhum Cliente Registrado.")

        }

        else{

            var c = 0
            console.log(`\nTotal de ${sistema.clientes.length}:`)
            while(true){

                console.log(`\n${c+1}:
                Nome: ${sistema.clientes[c].user_name}
                Data de Nascimento: ${sistema.clientes[c].nascimento}
                CPF: ${sistema.clientes[c].cpf}
                Email: ${sistema.clientes[c].email}`)
                c += 1

                if(sistema.clientes.length == c){
                    break
                }
                
            }

        }

    }

    mudar_status_reseva(sistema, reserva, status){

        if(status == 1){

            sistema.reservas[reserva-1].status = "Pendente"
            console.log(`Status da Reserva do Cliente ${reserva.id_c} alterada para "Pendente".`)

        }

        else if(status = 2){

            sistema.reservas[reserva-1].status = "Adiada"
            console.log(`Status da Reserva do Cliente ${reserva.id_c} alterada para "Adiada".`)

        }

        else if(status = 3){

            sistema.reservas[reserva-1].status = "Realizada" 
            console.log(`Status da Reserva do Cliente ${reserva.id_c} alterada para "Realizada".`)
            
        }
        else if(status = 4){

            sistema.reservas[reserva-1].status = "Cancelada" 
            console.log(`Status da Reserva do Cliente ${reserva.id_c} alterada para "Cancelada".`)
            
        }
    }
    adicionar_quarto(sistema, cama, preco, nome, desc){

        new Quartos(sistema, cama, preco, nome, desc)

        console.log('\nQuarto Adicionado com sucesso!')

    }

    modificar_meus_dados(){

        console.log("\nInsira as informações abaixo para a modificação dos dados da sua conta.")
        let a1 = requisicao.question('\nUser Name: ')
        let a2 = requisicao.question("\nCPF: ")
        let a3 = requisicao.question("\nEmail: ")
        let a4 = requisicao.question('\nSenha: ')
        this.user_name = a1
        this.cpf = a2
        this.email = a3
        this.password = a4

        console.log("\nDados modificados com sucesso!")

    }

}

class Cliente{

    constructor(){
        
    }

    cadastro(nome, nascimento, cpf, email, senha, sistema){

        this.id_u = ''
        this.user_name = nome
        this.nascimento = nascimento
        this.cpf = cpf
        this.email = email
        this.password = senha
        sistema.clientes.push(this)

        while(true){
            this.id_u += String(Math.floor(Math.random()*10))
            if(this.id_u.length == 8){
                break
            }
        }

    }

    login(email, senha){

        if(this.email == email && this.password == senha){

            return true

        }
        else{

            return false
        }

    }

    ver_meus_dados(){
        console.log(`\nNome de usuário: ${this.user_name}`)
        console.log(`\nID: ${this.id_u}`)
        console.log(`\nCPF: ${this.cpf}`)
        console.log(`\nEmail: ${this.email}`)
        console.log(`\nSenha: ${this.password}`)
    }

    ver_lista_de_quartos(sistema){

        var c = 0
        console.log(`\nTotal de ${sistema.quartos.length} quartos disponíveis:`)
        while(true){

            console.log(`\n${c+1}:`)
            console.log(`Número de camas: ${sistema.quartos[c].number_beds}`)
            console.log(`Preço por noite: ${sistema.quartos[c].price_night}`)
            console.log(`Nome: ${sistema.quartos[c].name}`)
            console.log(`Descrição: ${sistema.quartos[c].description}`)
            c += 1

        if(sistema.quartos.length == c){
            break
        }
            
        }

    }

    fazer_reserva(reserva, sistema){

        if(reserva in sistema.reservas){

            console.log('\nQuarto já reservado!')
        }

        else{

            this.reserva = reserva
            reserva.id_u = ""

            while(reserva.id_u.length < 9){
                reserva.id_u += String(Math.floor(Math.random()*10))
            }
            
            reserva.status = 'Reservado'

            sistema.reservas.push(reserva)

        }
    }

    cancelar_reserva(){

        this.reserva = null

    }

    avalia_estadia(sistema){

        if(sistema.quartos.length == 0){
            console.log("\nNenhum quarto disponível para avaliar.")
        }

        else{

            console.log("\nQual estadia você deseja avaliar?")

            var c = 0
            console.log(`\nTotal de ${sistema.quartos.length} quartos disponíveis para avaliação:`)
            while(true){

                console.log(`\n${c+1}:`)
                console.log(`Nome: ${sistema.quartos[c].name}`)
                c += 1

            if(sistema.quartos.length == c){
                break
            }
            
            }


            while(true){

                var xx = requisicao.question("\nInsira sua resposta aqui: ")

                if(xx > 0 && xx <= sistema.quartos.length){
                    break
                }
                else{
                    console.log("\nInsira uma opção válida.")
                }
            }


        while(true){

            var nota = requisicao.question("\nNota para a estadia (0 a 5 estrelas): ")

            if(nota >= 0 && nota <= 5){
                break
            }
            else{
                console.log("\nInsira uma opção válida.")
            }
        }


        var comentarios = requisicao.question("\nDiga como foi sua estadia: ")

        sistema.quartos[xx-1].avaliacoes.push([nota, comentarios, this])

        console.log("\nConcluído!")

    }

}


    ver_avaliacoes(sistema){

        for(var i of sistema.quartos){
            for(var j of i.avaliacoes){
                console.log(`\nAvaliação feita por ${j[2].user_name} acerca do ${i.name}:`)
                console.log(`Nota: ${j[0]}`)
                console.log(`Descrição: ${j[1]}`)
            }
        }
    }

    modificar_meus_dados(){

        console.log("\nInsira as informações abaixo para a modificação dos dados da sua conta.")
        let a1 = requisicao.question('\nUser Name: ')
        let a2 = requisicao.question('\nData de nascimento: ')
        let a3 = requisicao.question("\nCPF: ")
        let a4 = requisicao.question("\nEmail: ")
        let a5 = requisicao.question('\nSenha: ')
        this.user_name = a1
        this.nascimento = a2
        this.cpf = a3
        this.email = a4
        this.password = a5

        console.log("\nDados modificados com sucesso!")

    }
}


class Quartos{

    constructor(sistema, n_camas, p_noite, nome, descricao){

        this.number_beds = n_camas
        this.price_night = p_noite
        this.name = nome
        this.description = descricao
        this.sistema = sistema
        this.avaliacoes = []
        sistema.quartos.push(this)

    }
}

class Sistema{

    constructor(){
        this.reservas = []
        this.quartos = []
        this.clientes = []
        this.funcionarios = []
    }

    inicio(){

        var a = new Quartos(this, 4, "R$ 200,00", "Quarto do Sol", "Quarto perfeito para sua família, acomodando 4 camas, além de uma bela vista para a praia.", this)
        var b = new Quartos(this, 2, "R$ 120,00", "Quarto da Lua", "Quarto perfeito para quem busca conforto, acomodando 2 camas e uma varanda para utilização.", this)
        var c = new Cliente()
        c.cadastro("Caio Ongarato", "28/02/2008", "14261664790", "caio@", 123, this)
        var d = new Cliente()
        d.cadastro("Daniel Arruda", "29/04/2005", "14223654790", "daniel@", 456, this)
        var f = new Funcionario()
        f.cadastro("João", "1234567", "joao@", 1234, this)

        console.log("\nVocê está sendo direcionado para o Sistema da Hotel Fluxo.")
        console.log("\nDeseja continuar? Digite sim (S) ou não [N]")
        let inicio1
        let new_user

        while(true){
                let inicio = requisicao.question("\nInsira sua resposta aqui: ")

                if(inicio == "S" || inicio == "N"){
                    inicio1 = inicio
                    break
                }

                console.log('\nDigite uma opção válida.\n')
        }

        if(inicio1 == "S"){

            console.log("\nSeja bem-vindo ao Sistema da Hotel Fluxo! Deseja entrar como Cliente (C) ou Funcionário (F)?")
            let resposta1

            while(true){
                    let pergunta1 = requisicao.question("\nInsira sua resposta aqui: ")

                    if(pergunta1 == "C" || pergunta1 == "F"){
                        resposta1 = pergunta1
                        break
                    }

                    console.log('\nDigite uma opção válida.\n')

                }
                if(resposta1 == "C"){

                    console.log('\nDeseja realizar Cadastro (digite 1), Login (digite 2)?\n')
                    let resposta
                    while(true){
                        let pergunta = requisicao.question("Digite aqui: ")
                        if(pergunta == 1 || pergunta == 2 || pergunta ==3){
                            resposta = pergunta
                            break
                        }

                        console.log('\nDigite uma opção válida.\n')
                    }
                    if(resposta == 1){

                        console.log("\nInsira as informações abaixo para a criação de sua conta.")
                        let pergunta1 = requisicao.question('\nUser Name: ')
                        let pergunta2 = requisicao.question('\nData de nascimento: ')
                        let pergunta3 = requisicao.question("\nCPF: ")
                        let pergunta4 = requisicao.question("\nEmail: ")
                        let pergunta5 = requisicao.question('\nSenha: ')

                        new_user = new Cliente()

                        new_user.cadastro(pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, this)

                        console.log(`\nID gerado: ${new_user.id_u}`)
                    }
                    else if (resposta == 2){
                        while(true){
                            new_user = null
                            let pp = requisicao.question("\nEmail: ")
                            let qq = requisicao.question("\nSenha: ")

                            for(var i of this.clientes){

                                if(i.login(pp, qq)){

                                    new_user = i
                                    break
                                }
                                else{
                                    console.log('\nEmail ou senha Incorretos.')
                                    console.log('\nTente novamente.')
                                }
                            }
                            if(new_user != null){
                                break
                            }
                        }
                    }
                    
                    console.log('\nUsuário logado! O que deseja fazer?')

                    while(true){

                        console.log('\nObs: Digite o número correspondente a cada ação')
                        console.log('\n[1] Ver meus Dados')
                        console.log('\n[2] Ver Lista de Quartos')
                        console.log('\n[3] Fazer Reserva')
                        console.log('\n[4] Cancelar Reserva')
                        console.log('\n[5] Ver minhas reservas')
                        console.log('\n[6] Avaliar a Estadia')
                        console.log('\n[7] Ver avaliações de estadias')
                        console.log('\n[8] Sair do Programa')

                        let answer = requisicao.question("\nInsira sua resposta: ")
                        let resp 

                        if(answer == 1 || answer == 2 || answer == 3 || answer == 4 || answer == 5 || answer == 6 || answer == 7 || answer == 8){
                            resp = answer
                            if(resp == 1){

                                new_user.ver_meus_dados()
                            }
                            else if(resp == 2){

                                new_user.ver_lista_de_quartos(this)

                            }
                            else if(resp == 3){

                                let entrada = requisicao.question("\nData de Check-In: ")
                                let saida = requisicao.question("\nData de Check-Out: ")

                                console.log('\nQual dos quartos você gostaria de realizar uma reserva?')

                                let c = 0

                                while(c < this.quartos.length){
                                    var bb = c+1
                                    console.log(`\n[${bb}] Nome: ${this.quartos[c].name}`)
                                    c += 1
                                }

                                console.log("\nDigite o número correspondente.")
                                let bedroom = requisicao.question("\nInsira sua resposta aqui: ")
                                new_user.fazer_reserva(new Reserva(this, entrada, saida, this.quartos[bedroom-1].name, new_user.id_u), this)

                                console.log('\nReserva concluída!')
                                console.log('\nDados:')
                                console.log(`\nNome do Quarto: ${new_user.reserva.quarto}`)
                                console.log(`\nData de Check-In: ${new_user.reserva.check_in}`)
                                console.log(`\nData de Check-Out: ${new_user.reserva.check_out}`)
                                console.log(`\nID do Cliente: ${new_user.reserva.id_c}`)
                                console.log(`\nID da Reserva: ${new_user.reserva.id_u}`)
                                console.log(`\nStatus: ${new_user.reserva.status}`)
                            
                            }
                            else if (resp == 4){

                                if(new_user.reserva == null){

                                    console.log("\nVocê não apresenta reservas.")
                                }
                                else{

                                    new_user.cancelar_reserva()
                                    console.log('\nReserva Cancelada!')

                                }

                            }
                            else if (resp == 5){

                                if(new_user.reserva == null){

                                    console.log("\nVocê não apresenta reservas.")
                                }
                                else{

                                    console.log("\nSua reserva:")
                                    console.log(`\nNome do Quarto: ${new_user.reserva.quarto}`)
                                    console.log(`\nData de Check-In: ${new_user.reserva.check_in}`)
                                    console.log(`\nData de Check-Out: ${new_user.reserva.check_out}`)
                                    console.log(`\nID do Cliente: ${new_user.reserva.id_c}`)
                                    console.log(`\nID da Reserva: ${new_user.reserva.id_u}`)

                                }                      
                            }  
                            else if(resp == 6){
                                new_user.avalia_estadia(this)
                            }
                            else if(resp == 7){
                                new_user.ver_avaliacoes(this)
                            }
                            else if(resp == 8){
                                break
                            }      
                            else{

                                console.log('\nDigite uma opção válida.')
                            }           
                        }
                    }
                    console.log("\nVolte sempre!")
                    console.log("\n--- FIM ---\n")

                }
                else if(resposta1 == "F"){

                    console.log('Deseja realizar Cadastro (digite 1), Login (digite 2) ou Sair do Programa (digite 3)?\n')
                    let resposta
                    while(true){
                        let pergunta = requisicao.question("Digite aqui: ")

                        if(pergunta == 1 || pergunta == 2 || pergunta ==3){
                            resposta = pergunta
                            break
                        }

                        console.log('\nDigite uma opção válida.\n')
                    }
                    if(resposta == 1){

                        console.log("\nInsira as informações abaixo para a criação de sua conta.")
                        let pergunta1 = requisicao.question('\nUser Name: ')
                        let pergunta2 = requisicao.question("\nCPF: ")
                        let pergunta3 = requisicao.question("\nEmail: ")
                        let pergunta4 = requisicao.question('\nSenha: ')

                        new_user = new Funcionario()

                        new_user.cadastro(pergunta1, pergunta2, pergunta3, pergunta4, this)

                        console.log(`\nID gerado: ${new_user.id_u}`)
                    }
                    else if (resposta == 2){
                        while(true){
                            new_user = null
                            let pp = requisicao.question("\nEmail: ")
                            let qq = requisicao.question("\nSenha: ")
                            for(var i of this.funcionarios){
                                if(i.login(pp, qq)){
                                    new_user = i
                                    break
                                }
                                else{
                                    console.log('\nEmail ou senha Incorretos.')
                                    console.log('\nTente novamente.')
                                }
                            }
                            if(new_user != null){
                                break
                            }
                        }
                    }

                    console.log('\nUsuário logado! O que deseja fazer?')

                    while(true){

                        console.log('\nObs: Digite o número correspondente a cada ação')
                        console.log('\n[1] Ver meus Dados')
                        console.log('\n[2] Ver Lista de Quartos')
                        console.log('\n[3] Ver Lista de Reservas')
                        console.log('\n[4] Ver Lista de Clientes')
                        console.log('\n[5] Mudar Status da Reserva')
                        console.log('\n[6] Adicionar quarto')
                        console.log('\n[7] Sair do Programa')

                        let answer = requisicao.question("\nInsira sua resposta: ")
                        let resp

                        if(answer == 1 || answer == 2 || answer == 3 || answer == 4 || answer == 5 || answer == 6 || answer == 7){
                            resp = answer
                            if(resp == 1){

                                console.log(new_user.ver_meus_dados())
                            }
                            else if(resp == 2){

                                new_user.ver_lista_de_quartos(this)

                            }
                            else if(resp == 3){

                                new_user.ver_lista_de_reservas(this)
                            
                            }
                            else if (resp == 4){

                                new_user.ver_lista_de_clientes(this)

                            }
                            else if (resp == 5){

                                if(this.reservas.length == 0){

                                    console.log("Nenhuma reserva encontrada.")
                                }
                                else{
                                    let c = 0
                                    console.log("\nDeseja alterar os status de qual reserva?")
                                    console.log("\nDigite o número correspondente.")
                                    
                                    while(true){

                                        console.log(`\n${c+1}:
                                        Data de Check-In: ${this.reservas[c].check_in}
                                        Data de Check-Out: ${this.reservas[c].check_out}
                                        Quarto Reservado: ${this.reservas[c].quarto.name}
                                        ID do Cliente: ${this.reservas[c].id_c}`)
                                        c += 1

                                    if(this.reservas.length == c){
                                        break
                                    }

                                }
                                let pp
                                while(true){

                                    pp = requisicao.question("\nInsira sua resposta: ")

                                    if(pp > 0 || pp <= this.reservas.length){
                                        break
                                    }
                                    else{
                                        console.log('Insira uma opção válida.')
                                    }
                                }

                                console.log('\nDeseja alterar seu status para:')
                                console.log('\n[1] Pendente')
                                console.log('\n[2] Adiada')
                                console.log('\n[3] Realizada')
                                console.log('\n[4] Cancelada')
                                
                                let cc
                                while(true){

                                    cc = requisicao.question("\nInsira sua resposta: ")

                                    if(cc == 1 || cc == 2 || cc == 3 || cc == 4){
                                        break
                                    }
                                    else{
                                        console.log('Insira uma opção válida.')
                                    }
                                }
                                new_user.mudar_status_reseva(this, pp, cc)

                                }
                            }
                            else if(resp == 6){

                                let tt = requisicao.question("\nNome do Quarto: ")
                                let yy = requisicao.question("\nNº de camas: ")
                                let uu = requisicao.question("\nP/p Noite: ")
                                let ii = requisicao.question("\nDescricao: ")

                                new_user.adicionar_quarto(this, tt, yy, uu, ii)

                            }  
                            else if(resp == 7){
                                break
                            }                                     
                            else{

                                console.log('\nDigite uma opção válida.')
                            }           
                        }
                    }
                    console.log("\nVolte sempre!")
                    console.log("\n--- FIM ---\n")
                }
        }
        else if (inicio1 == "N"){
            console.log("Volte Sempre!")
            console.log("--- FIM ---")

        }

    }

}

const hotel_fluxo = new Sistema()
hotel_fluxo.inicio()