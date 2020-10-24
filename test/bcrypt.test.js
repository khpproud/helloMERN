const bcrypt = require('bcrypt');
const saltRounds = 10;
const plainPW = 'p@ssW0rd'
const someOtherPW = 'blowfish'

async function generateHash() {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    console.log(salt);
    const hashed = await bcrypt.hash(plainPW, salt);
    console.log(hashed);
    return hashed
  } catch(err) {
    return err;
  }
}

async function checkPassword(password) {
  const hash = await generateHash()

  const match = await bcrypt.compare(password, hash);

  match ? console.log('Password matched') : console.log('Password not matched');
}

(async () => { 
  await checkPassword(plainPW) // true
  await checkPassword(someOtherPW) // false
})()