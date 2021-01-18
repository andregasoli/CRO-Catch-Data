const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const specs = fs
    .readFileSync('src/spec.txt', 'utf8')
    .split("/n")
    .map(spec => {
        let norm = spec.replace('\n', '');
        norm = spec.replace('\r', '');
        return norm.trim();
    });

for (const spec of specs) {
    const form = new FormData();
    form.append('txtAcao', 'busca1');
    form.append('frmBusca1txtEspecialidades', spec);

    axios({
        method: 'post',
        url: 'http://crors.org.br/wp-content/themes/crors/controler/post-servicos-busca-por-especialidade.php',
        data: form,
        headers: { 'Content-Type': form.getHeaders()['content-type'] }
    }).then(({ data }) => {
        console.log("DEU BOM");
    }).catch(() => console.log("DEU RUIM"));
}
