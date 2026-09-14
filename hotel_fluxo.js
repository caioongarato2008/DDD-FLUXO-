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

}


class Quartos{

    constructor(sistema, n_camas, p_noite, nome, descricao){

        this.number_beds = n_camas
        this.price_night = p_noite
        this.name = nome
        this.description = descricao
        this.sistema = sistema
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

}

hotel_fluxo = new Sistema

a = new Quartos(hotel_fluxo, 4, "R$ 200,00", "Quarto do Sol", "Quarto perfeito para sua família, acomodando 4 camas, além de uma bela vista para a praia.", hotel_fluxo)
b = new Quartos(hotel_fluxo, 2, "R$ 120,00", "Quarto da Lua", "Quarto perfeito para quem busca conforto, acomodando 2 camas e uma varanda para utilização.", hotel_fluxo)
c = new Cliente()
c.cadastro("Caio Ongarato", "28/02/2008", "14261664790", "caio@", 123, hotel_fluxo)
d = new Cliente()
d.cadastro("Daniel Arruda", "29/04/2005", "14223654790", "daniel@", 456, hotel_fluxo)
f = new Funcionario()
f.cadastro("João", "1234567", "joao@", 1234, hotel_fluxo)

console.log("\nSeja bem-vindo ao Sistema da Hotel Fluxo! O que deseja fazer?\n")
console.log('Cadastro (digite 1), Login (digite 2) ou Sair do Programa (digite 3)?\n')
while(true){
    let pergunta = requisicao.question("Digite aqui: ")

    if(pergunta == 1 || pergunta == 2 || pergunta ==3){
        resposta = pergunta
        break
    }

    console.log('\nDigite uma opção válida.\n')

}

if(resposta == 1){
    console.log("\nDeseja cadastrar-se em nossa plataforma como Cliente ou Funcionário? [C/F]\n")
    
    while(true){
        let pergunta1 = requisicao.question("Insira sua resposta aqui: ")

        if(pergunta1 == "C" || pergunta1 == "F"){
            resposta1 = pergunta1
            break
        }

        console.log('\nDigite uma opção válida.\n')

    }
    
    if(resposta1 == 'C'){

        console.log("\nInsira as informações abaixo para a criação de sua conta.")
        let pergunta1 = requisicao.question('\nUser Name: ')
        let pergunta2 = requisicao.question('\nData de nascimento: ')
        let pergunta3 = requisicao.question("\nCPF: ")
        let pergunta4 = requisicao.question("\nEmail: ")
        let pergunta5 = requisicao.question('\nSenha: ')

        new_user = new Cliente()

        new_user.cadastro(pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, hotel_fluxo)

        console.log(`\nID gerado: ${new_user.id_u}`)

        while(true){

            console.log('\nUsuário logado! O que deseja fazer?')
            console.log('\nObs: Digite o número correspondente a cada ação')
            console.log('\n[1] Ver meus Dados')
            console.log('\n[2] Ver Lista de Quartos')
            console.log('\n[3] Fazer Reserva')
            console.log('\n[4] Cancelar Reserva')
            console.log('\n[5] Ver minhas reservas')
            console.log('\n[6] Sair do Programa')

            let answer = requisicao.question("\nInsira sua resposta: ")

            if(answer == 1 || answer == 2 || answer == 3 || answer == 4 || answer == 5 || answer == 6){
                resposta = answer
                if(resposta == 1){

                    new_user.ver_meus_dados()
                }
                else if(resposta == 2){

                    new_user.ver_lista_de_quartos(hotel_fluxo)

                }
                else if(resposta == 3){

                    let entrada = requisicao.question("\nData de Check-In: ")
                    let saida = requisicao.question("\nData de Check-Out: ")

                    console.log('\nQual dos quartos você gostaria de realizar uma reserva?')

                    var c = 0

                    while(c < hotel_fluxo.quartos.length){
                        var bb = c+1
                        console.log(`\n[${bb}] Nome: ${hotel_fluxo.quartos[c].name}`)
                        c += 1
                    }

                    console.log("\nDigite o número correspondente.")
                    let bedroom = requisicao.question("\nInsira sua resposta aqui: ")
                    new_user.fazer_reserva(new Reserva(hotel_fluxo, entrada, saida, hotel_fluxo.quartos[bedroom-1].name, new_user.id_u), hotel_fluxo)

                    console.log('\nReserva concluída!')
                    console.log('\nDados:')
                    console.log(`\nNome do Quarto: ${new_user.reserva.quarto}`)
                    console.log(`\nData de Check-In: ${new_user.reserva.check_in}`)
                    console.log(`\nData de Check-Out: ${new_user.reserva.check_out}`)
                    console.log(`\nID do Cliente: ${new_user.reserva.id_c}`)
                    console.log(`\nID da Reserva: ${new_user.reserva.id_u}`)
                    console.log(`\nStatus: ${new_user.reserva.status}`)
                
                }
                else if (resposta == 4){

                    if(new_user.reserva == null){

                        console.log("\nVocê não apresenta reservas.")
                    }
                    else{

                        new_user.cancelar_reserva()
                        console.log('\nReserva Cancelada!')

                    }

                }
                else if (resposta == 5){

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
                else if(resposta == 6){
                    break
                }                                     
                else{

                    console.log('\nDigite uma opção válida.')
                }           
            }
        }
    }
    else if(resposta1 == 'F'){

        console.log("\nInsira as informações abaixo para a criação de sua conta.")
        let pergunta1 = requisicao.question('\nUser Name: ')
        let pergunta2 = requisicao.question("\nCPF: ")
        let pergunta3 = requisicao.question("\nEmail: ")
        let pergunta4 = requisicao.question('\nSenha: ')

        new_user = new Funcionario()

        new_user.cadastro(pergunta1, pergunta2, pergunta3, pergunta4, hotel_fluxo)

        console.log(`\nID gerado: ${new_user.id_u}`)

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

            if(answer == 1 || answer == 2 || answer == 3 || answer == 4 || answer == 5 || answer == 6 || answer == 7){
                resposta = answer
                if(resposta == 1){

                    console.log(new_user.ver_meus_dados())
                }
                else if(resposta == 2){

                    new_user.ver_lista_de_quartos(hotel_fluxo)

                }
                else if(resposta == 3){

                    new_user.ver_lista_de_reservas(hotel_fluxo)
                
                }
                else if (resposta == 4){

                    new_user.ver_lista_de_clientes(hotel_fluxo)

                }
                else if (resposta == 5){

                    if(hotel_fluxo.reservas.length == 0){

                        console.log("Nenhuma reserva encontrada.")
                    }
                    else{
                        var c = 0
                        console.log("\nDeseja alterar os status de qual reserva?")
                        console.log("\nDigite o número correspondente.")
                        
                        while(true){

                            console.log(`\n${c+1}:
                            Data de Check-In: ${sistema.reservas[c].check_in}
                            Data de Check-Out: ${sistema.reservas[c].check_out}
                            Quarto Reservado: ${sistema.reservas[c].quarto.name}
                            ID do Cliente: ${sistema.reservas[c].id_c}`)
                            c += 1

                        if(sistema.reservas.length == c){
                            break
                        }

                    }

                    while(true){

                        let pp = requisicao.question("\nInsira sua resposta: ")

                        if(pp > 0 || pp <= hotel_fluxo.reservas.length){
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

                    while(true){

                        let cc = requisicao.question("\nInsira sua resposta: ")

                        if(cc == 1 || cc == 2 || cc == 3 || cc == 4){
                            break
                        }
                        else{
                            console.log('Insira uma opção válida.')
                        }
                    }
                    new_user.mudar_status_reseva(hotel_fluxo, pp, cc)

                    }
                }
                else if(resposta == 6){

                    let tt = requisicao.question("\nNome do Quarto: ")
                    let yy = requisicao.question("\nNº de camas: ")
                    let uu = requisicao.question("\nP/p Noite: ")
                    let ii = requisicao.question("\nDescricao: ")

                    new_user.adicionar_quarto(hotel_fluxo, tt, yy, uu, ii)

                }  
                else if(resposta == 7){
                    break
                }                                     
                else{

                    console.log('\nDigite uma opção válida.')
                }           
            }
        }

    }
}
else if(resposta == 2){

    console.log("\nDeseja entrar em nossa plataforma como Cliente ou Funcionário? [C/F]\n")

    while(true){
        let pergunta1 = requisicao.question("Insira sua resposta aqui: ")

        if(pergunta1 == "C" || pergunta1 == "F"){
            resposta1 = pergunta1
            break
        }
        console.log('\nDigite uma opção válida.\n')
    }

    if(resposta1 == 'C'){

        while(true){

            new_user = null
            let pp = requisicao.question("\nEmail: ")
            let qq = requisicao.question("\nSenha: ")

            for(var i of hotel_fluxo.clientes){

                if(i.password == qq || i.email == pp){

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

        console.log('\nUsuário logado! O que deseja fazer?')

        while(true){

            console.log('\nObs: Digite o número correspondente a cada ação')
            console.log('\n[1] Ver meus Dados')
            console.log('\n[2] Ver Lista de Quartos')
            console.log('\n[3] Fazer Reserva')
            console.log('\n[4] Cancelar Reserva')
            console.log('\n[5] Ver minhas reservas')
            console.log('\n[6] Sair do Programa')

            let answer = requisicao.question("\nInsira sua resposta: ")

            if(answer == 1 || answer == 2 || answer == 3 || answer == 4 || answer == 5 || answer == 6){
                resposta = answer
                if(resposta == 1){

                    new_user.ver_meus_dados()
                }
                else if(resposta == 2){

                    new_user.ver_lista_de_quartos(hotel_fluxo)

                }
                else if(resposta == 3){

                    let entrada = requisicao.question("\nData de Check-In: ")
                    let saida = requisicao.question("\nData de Check-Out: ")

                    console.log('\nQual dos quartos você gostaria de realizar uma reserva?')

                    var c = 0

                    while(c < hotel_fluxo.quartos.length){
                        var bb = c+1
                        console.log(`\n[${bb}] Nome: ${hotel_fluxo.quartos[c].name}`)
                        c += 1
                    }

                    console.log("\nDigite o número correspondente.")
                    let bedroom = requisicao.question("\nInsira sua resposta aqui: ")
                    new_user.fazer_reserva(new Reserva(hotel_fluxo, entrada, saida, hotel_fluxo.quartos[bedroom-1].name, new_user.id_u), hotel_fluxo)

                    console.log('\nReserva concluída!')
                    console.log('\nDados:')
                    console.log(`\nNome do Quarto: ${new_user.reserva.quarto}`)
                    console.log(`\nData de Check-In: ${new_user.reserva.check_in}`)
                    console.log(`\nData de Check-Out: ${new_user.reserva.check_out}`)
                    console.log(`\nID do Cliente: ${new_user.reserva.id_c}`)
                    console.log(`\nID da Reserva: ${new_user.reserva.id_u}`)
                    console.log(`\nStatus: ${new_user.reserva.status}`)
                
                }
                else if (resposta == 4){

                    if(new_user.reserva == null){

                        console.log("\nVocê não apresenta reservas.")
                    }
                    else{

                        new_user.cancelar_reserva()
                        console.log('\nReserva Cancelada!')

                    }

                }
                else if (resposta == 5){

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
                else if(resposta == 6){
                    break
                }                                     
                else{

                    console.log('\nDigite uma opção válida.')
                }           
            }
        }
    }
    else if(resposta1 == 'F'){

        while(true){

            new_user = null
            let pp = requisicao.question("\nEmail: ")
            let qq = requisicao.question("\nSenha: ")

            for(var i of hotel_fluxo.funcionarios){

                if(i.password == qq || i.email == pp){

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

            if(answer == 1 || answer == 2 || answer == 3 || answer == 4 || answer == 5 || answer == 6 || answer == 7){
                resposta = answer
                if(resposta == 1){

                    console.log(new_user.ver_meus_dados())
                }
                else if(resposta == 2){

                    new_user.ver_lista_de_quartos(hotel_fluxo)

                }
                else if(resposta == 3){

                    new_user.ver_lista_de_reservas(hotel_fluxo)
                
                }
                else if (resposta == 4){

                    new_user.ver_lista_de_clientes(hotel_fluxo)

                }
                else if (resposta == 5){

                    if(hotel_fluxo.reservas.length == 0){

                        console.log("Nenhuma reserva encontrada.")
                    }
                    else{
                        var c = 0
                        console.log("\nDeseja alterar os status de qual reserva?")
                        console.log("\nDigite o número correspondente.")
                        
                        while(true){

                            console.log(`\n${c+1}:
                            Data de Check-In: ${sistema.reservas[c].check_in}
                            Data de Check-Out: ${sistema.reservas[c].check_out}
                            Quarto Reservado: ${sistema.reservas[c].quarto.name}
                            ID do Cliente: ${sistema.reservas[c].id_c}`)
                            c += 1

                        if(sistema.reservas.length == c){
                            break
                        }

                    }

                    while(true){

                        let pp = requisicao.question("\nInsira sua resposta: ")

                        if(pp > 0 || pp <= hotel_fluxo.reservas.length){
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

                    while(true){

                        let cc = requisicao.question("\nInsira sua resposta: ")

                        if(cc == 1 || cc == 2 || cc == 3 || cc == 4){
                            break
                        }
                        else{
                            console.log('Insira uma opção válida.')
                        }
                    }
                    new_user.mudar_status_reseva(hotel_fluxo, pp, cc)

                    }
                }
                else if(resposta == 6){

                    let tt = requisicao.question("\nNome do Quarto: ")
                    let yy = requisicao.question("\nNº de camas: ")
                    let uu = requisicao.question("\nP/p Noite: ")
                    let ii = requisicao.question("\nDescricao: ")

                    new_user.adicionar_quarto(hotel_fluxo, tt, yy, uu, ii)

                }  
                else if(resposta == 7){
                    break
                }                                     
                else{

                    console.log('\nDigite uma opção válida.')
                }           
            }
        }

    }

}
else{
    null
}


console.log("\nVolte sempre!")
console.log("\n--- FIM ---\n")