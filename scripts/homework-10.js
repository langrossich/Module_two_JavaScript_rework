let getUsersList = () => {
    const link = 'https://reqres.in/api/users?per_page=12';
    return fetch(link)
        .then(response => response.json())
}

const printSurnames = (users) => {
    users.forEach(({last_name: surname}) => console.log(surname))
    return users
}

const printSurnamesWithF = (users) => {
    users.filter(({last_name: surname}) => surname.startsWith('F'))
        .forEach(user => console.log(user))

    return users    
}

const printAllDatabase = (users) => {
    const result = users.map(({first_name: name, last_name: surname}) => `${surname} ${name}`)
        .join(', ')

    console.log(`Наша база содержит данные следующих пользователей: ${result}`) 
    
    return users[0]
}

const printKeys = (users) => {
    Object.keys(users).forEach(key => console.log(key))

}

getUsersList()
    .then(({data:users}) => users)
    .then(printSurnames)
    .then(printSurnamesWithF)
    .then(printAllDatabase)
    .then(printKeys)