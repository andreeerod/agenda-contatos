const form = document.getElementById('form-contato')
const inputNome = document.getElementById('nome')
const inputTelefone = document.getElementById('telefone')
const lista = document.getElementById('lista-contatos')

form.addEventListener('submit', function (evento) {
    evento.preventDefault()

    const linha = document.createElement('tr')
    const colunaNome = document.createElement('td')
    const colunaTelefone = document.createElement('td')

    // textContent evita interpretar HTML digitado pelo usuário
    colunaNome.textContent = inputNome.value.trim()
    colunaTelefone.textContent = inputTelefone.value.trim()

    linha.append(colunaNome, colunaTelefone)
    lista.appendChild(linha)

    form.reset()
    inputNome.focus()
})
