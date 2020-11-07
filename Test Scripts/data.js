let rndNumber = Math.random().toString(36).substr(1,4);

let data = {

    email: 'dummy' + rndNumber + '@mailinator.com',
    firstName: 'Mariana',
    lastName: 'Cuevas',
    password: '12345678',
    newpassword: '12345678',
    address: 'Ignacio Allende 328',
    city: 'CDMX',
    postcode: '11260',
    phone:'1111111111',
    emailValido: 'dummy.c8c@mailinator.com',
    url_myAccount: 'http://automationpractice.com/index.php?controller=my-account',
    url_authentication: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
    message: 'I would like to know about the status of my order #10000',
    keyword: 'dress',
    keywordError: 'zapatito blanco'

}

export {data}
