import { TextField } from '../components/fields/text-field';

import { requiredRule, namePatternRule, emailPetternRule, telPetternRule } from './inputValidationRules';
import { boolean } from '@storybook/addon-knobs';

function createFormTextFieldConfig(label: string, name: string, type: 'text' | 'tel' | 'email' | 'password', placeholder: string, defaultValue: string = "") {
  return {
    renderTextInput: (handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, value: string, valid: boolean, error: string, key: string|number) => (
      <TextField
        key={key}
        type={type}
        label={label}
        name={name}
        placeholder={placeholder}
        handleChange={handleChange}
        isValid={valid}
        errorMessage={error}
      />
    ),
    label,
    value: defaultValue,
    valid: false,
    errorMessage: '',
    touched: false
  };
}

export const signupForm = {
    user_name: {
      ...createFormTextFieldConfig('Имя', 'user_name', 'text', 'Введите Ваше имя'),
      validationRules: [
        requiredRule('Имя'),
        namePatternRule()
      ]
    },
    user_email: {
      ...createFormTextFieldConfig('Еmail', 'user_email', 'email', 'Введите ваш email'),
      validationRules: [
        requiredRule('Еmail'),
        emailPetternRule()
      ]
    },
    user_tel: {
      ...createFormTextFieldConfig('Номер телефона', 'user_tel', 'tel', 'Введите номер телефона'),
      validationRules: [
        requiredRule('Номер телефона'),
        telPetternRule()
      ]
    }
};
