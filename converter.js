// Função para converter WEBP para PNG
function converterWebpParaPng(arquivoWebp) {
    var reader = new FileReader();

    reader.onload = function(event) {
        var img = new Image();
        img.onload = function() {
            var canvas = document.getElementById('canvasConvertido');
            var ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            var pngDataUrl = canvas.toDataURL('image/png');
            document.getElementById('imagemConvertida').src = pngDataUrl;
            document.getElementById('imagemConvertida').style.display = 'block';
        };
        img.src = event.target.result;
    };

    reader.readAsDataURL(arquivoWebp);
}

// Event listener para o input de arquivo
document.getElementById('inputFile').addEventListener('change', function(event) {
    var arquivo = event.target.files[0];
    if (arquivo) {
        if (arquivo.type === 'image/webp') {
            converterWebpParaPng(arquivo);
        } else {
            alert('Por favor, selecione uma imagem no formato WEBP.');
        }
    }
});
