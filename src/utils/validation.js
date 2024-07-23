

export function validationEmail(email){
    if (!email.includes("@")){
      

      return false;
    }
    if(!email.includes(".com") && !email.includes(".com.br")){
     return false;
    }
     if (email.includes("@.")){
      return false;
     }
     if (email[0] === "@" || email[0]=== "."){
      return false;
     }
     return true;
  }
  const EXISTENT_DDDs = [
    "85", // DDD do Ceará
    "11", // DDD de São Paulo
    "21", // DDD do Rio de Janeiro
    "31", // DDD de Minas Gerais
    "41", // DDD do Paraná
    "51", // DDD do Rio Grande do Sul
    "61", // DDD do Distrito Federal
    // Adicione os outros DDDs do Brasil conforme necessário
];


export function validatephoneNumber(phoneNumber){
  if (phoneNumber.length !== 11){
    return false; 
  }
  const twoFirstDigits = phoneNumber.slice(0,2);
  const validDDD = EXISTENT_DDDs.includes(twoFirstDigits);

  if(!validDDD){
    return false;
  }
   if(phoneNumber[2] !== "9"){
    return false;
   }
   if(phoneNumber.match(/ [a-z]/i)){
    return false;
   }
  return true;

  }