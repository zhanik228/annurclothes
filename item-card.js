const textContainer = document.querySelector('.item-section-info__color-text')
const colors = document.querySelectorAll('.item-section-info__color')
const defaultColor = document.querySelector('.item-section-info__color--beige')

const chosenColor = 'Бежевый'

function changeColor(color) {
    textContainer.textContent = chosenColor
    color.classList.add('item-section-info__color--selected')
}

function chooseDefaultColor() {
    changeColor(defaultColor)
}

chooseDefaultColor()

colors.forEach((color) => {
    color.addEventListener('click', function( event ) {
        const currentId = parseInt(event.target.id)

        colors.forEach((color) => color.classList.remove('item-section-info__color--selected'))
        
        switch ( currentId ) {
            case 1: textContainer.textContent = 'Черный'
                    event.target.classList.add('item-section-info__color--selected')
                break;
            case 2: textContainer.textContent = 'Бежевый'
                    event.target.classList.add('item-section-info__color--selected')
                break;
            case 3: textContainer.textContent = 'Розовый'
                    event.target.classList.add('item-section-info__color--selected')
                break;
        }
    })
})