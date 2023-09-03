const allButtons = document.querySelectorAll('button')
const buttonIsNone = document.querySelector('[data-testid="bagButton"]');
const containerInfosProduct = document.querySelector('[data-testid="product-price"]')
const priceOriginal = containerInfosProduct.querySelector('[data-testid="price-original"]')
const priceValue = containerInfosProduct.querySelector('[data-testid="price-value"]')
const discountSpan = containerInfosProduct.querySelector('span:nth-child(3)')
const priceBoxFloat = document.querySelector('[data-testid="showcase-price"] small')
const buttonBoxFloat = document.querySelector('[data-testid="float-button"] label')


// Escondendo o Botao de "Adicionar Sacola" 
buttonIsNone.style.display = 'none'

//Mudando o texto do Botão
buttonBoxFloat.innerHTML = 'Comprar'


// Trocando a porcentagem de pix, pelo desconto real do produto 
function changeProductText(){
    const textOriginalValue = priceOriginal.textContent;
    const textPriceValue = priceValue.textContent;

    const valueOriginalFormat = parseFloat(textOriginalValue.replace(/[^\d,]/g, '').replace(',', '.'));
    const priceCurrentFormat = parseFloat(textPriceValue.replace(/[^\d,]/g, '').replace(',', '.'));

    const differenceValues =  valueOriginalFormat - priceCurrentFormat;

    const formattedValue = differenceValues.toFixed(2);

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 2 // Definido para 2 casas decimais
    });

    discountSpan.innerHTML = `(${formatter.format(formattedValue)} de <strong>desconto</strong>)`;
    priceBoxFloat.style.color = '#59c00b'
    priceBoxFloat.innerHTML = `(${formatter.format(formattedValue)} de <strong style="color: #59c00b">desconto</strong>)`;
}

//Aplicando a Mesma cor de fundo pro botão
function changeBackgroundButton(){

    allButtons.forEach((item) => {
        if (item.textContent.includes('Adicionar à sacola') || item.textContent.includes('Comprar')) {
            item.style.backgroundColor = '#0086ff'
        }
    })
}

changeProductText()
changeBackgroundButton()
