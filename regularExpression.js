const isEmailValid = (email) => {
  if (/^[^@ ]+@[^@ ]+\.[^@.]{2,}/.test(email)) {
    console.log('Email válido!')
    return
  }
  console.log('Email inválido!')
}

isEmailValid('acs@gmail.com')
isEmailValid('acsgmail.com')

const isPasswordValid = (password) => {
  if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(password)) {
    console.log('Senha válida!')
    return
  }
  console.log('Senha inválida!')
}

isPasswordValid('Abc@123')
isPasswordValid('Abc1234')

const isDatePtBrValid = (date) => {
  if (/\d{2}\/\d{2}\/\d{4}/.test(date)) {
    console.log('Data válida!')
    return
  }
  console.log('Data inválida!')
}

isDatePtBrValid('11/11/1221')
isDatePtBrValid('3211/11/21')

const isPhoneValid = (phone) => {
  if (/^[\\(]\d{2}[\\)]\d{5}-\d{4}$/.test(phone)) {
    console.log('Telefone válido!')
    return
  }
  console.log('Telefone inválido!')
}

isPhoneValid('(32)99999-9949')
isPhoneValid('(32)9 9999-9939')

const isBranchNameValid = (name) => {
  if (/^[a-zA-Z]+-[0-9]+$/.test(name)) {
    console.log('Nome válido!')
    return
  }
  console.log('Nome inválido!')
}

isBranchNameValid('LASAPDV-1221')
isBranchNameValid('LASAPDV-1221-11')
