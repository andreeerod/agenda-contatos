const form = document.getElementById('form-contato')
const inputNome = document.getElementById('nome')
const inputTelefone = document.getElementById('telefone')
const lista = document.getElementById('lista-contatos')
const contador = document.getElementById('contador')
const vazio = document.getElementById('vazio')

function atualizarResumo() {
    const total = lista.children.length
    contador.textContent = total === 0
        ? 'Nenhum contato'
        : total === 1 ? '1 contato' : total + ' contatos'
    vazio.hidden = total > 0
}

form.addEventListener('submit', function (evento) {
    evento.preventDefault()

    const nome = inputNome.value.trim()
    const telefone = inputTelefone.value.trim()

    const linha = document.createElement('tr')
    const colunaNome = document.createElement('td')
    const colunaTelefone = document.createElement('td')
    const avatar = document.createElement('span')

    // textContent evita interpretar HTML digitado pelo usuário
    avatar.className = 'avatar'
    avatar.textContent = nome.charAt(0).toUpperCase()
    const wrapper = document.createElement('div')
    wrapper.className = 'contato-nome'
    wrapper.append(avatar, nome)
    colunaNome.appendChild(wrapper)
    colunaTelefone.textContent = telefone

    linha.append(colunaNome, colunaTelefone)
    lista.appendChild(linha)

    form.reset()
    inputNome.focus()
    atualizarResumo()
})

atualizarResumo()
