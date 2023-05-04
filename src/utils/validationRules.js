export const isRequired = (val) => ({
    hasPassed: !!val,
    message: 'Будьласка заповніть це поле',
  });
  
  export const charLimit = (limit) => (val) => ({
    hasPassed: val.length <= limit,
    message: 'Ви превисели ліміт',
  });
  
  export const emailValidation = (val) => ({
    hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
    message: 'Невірний емейл',
  });
  
  export const passwordValidation = (val) => ({
    hasPassed: /^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(val),
    message: 'Пароль повинен містити одну цифру та один символ',
  });