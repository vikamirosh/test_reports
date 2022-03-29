export const kolobok = (character) => {
    switch(character) {
        case 'дедушка':
           return 'я от дедушки ушел'     
        case 'бабушка':
            return 'я от бабушки ушел'     
        default:
            return 'и от тебя уйду'     
      }
}

export const newYear = (character) => {
    return `${character}! ${character}! ${character}!`
}