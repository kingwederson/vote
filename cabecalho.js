function cabecalho(){
    var cabecalho = window.document.getElementById("espacocabecalho")
    cabecalho.innerHTML = `
    <div class="cabe">
        <table>
            <tr>
                <td>
                    <img src="../santinho.png" class="capitular">
                </td>
                <td>
                    <header>
                        <img src="../letreiro.svg?id=1" id="wordmark">
                    </header>
                </td>
            </tr>
        </table>
        <nav class="menu">
            <ul>
                <a href="../index.html"><li>Principal</li></a>
                <a href="../perguntas/"><li>Perguntas</li></a>
                <a href="../apoio/"><li>Apoio</li></a>
                <a href="../depoimentos/"><li>Depoimentos</li></a>
                <a href="../facebook/"><li>Facebook</li></a>
                <a href="../instagram/"><li>Instagram</li></a>
                <a href="../youtube/"><li>YouTube</li></a>
            </ul>
        </nav>
        <p class="contato">Mande um email para <b>contato@wederson.net.br</b> ou uma mensagem via <a href="https://api.whatsapp.com/send?phone=5532999185541"><b>Whatsapp</b></a> ou Telegram para <b>+55 32 999 185 541</b>.</p>
    </div>
    `
}