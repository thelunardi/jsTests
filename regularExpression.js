isEmailValid = (email) => {
    if (/^[^@ ]+@[^@ ]+\.[^@ \.]{2,}/.test(email)) {
        console.log("Email válido!")
        return
    }
    console.log("Email inválido!")    
}

isEmailValid("acs@gmail.com")
isEmailValid("acsgmail.com")

isPasswordValid = (password) => {
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(password)) {
        console.log("Senha válida!")
        return
    }
    console.log("Senha inválida!")
}

isPasswordValid('Abc@123')
isPasswordValid('Abc123')

isDatePtBrValid = (date) => {
    if (/\d{2}\/\d{2}\/\d{4}/.test(date)) {
        console.log("Data válida!")
        return
    }
    console.log("Data inválida!")    
}

isDatePtBrValid("11/11/1111")
isDatePtBrValid("1111/11/11")

isPhoneValid = (phone) => {
    if (/^[\\(]\d{2}[\\)]\d{5}-\d{4}$/.test(phone)) {
        console.log("Telefone válido!")
        return
    }
    console.log("Telefone inválido!")    
}

isPhoneValid("(32)99989-9989")
isPhoneValid("(32)9 9989-9989")

isBranchNameValid = (name) => {
    if (/^[a-zA-Z]+-[0-9]+$/.test(name)) {
        console.log("Nome válido!")
        return
    }
    console.log("Nome inválido!")    
}

isBranchNameValid("LASAPDV-1221")
isBranchNameValid("LASAPDV-1221-11")