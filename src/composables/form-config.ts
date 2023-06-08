import type { FormInstance, FormItemRule, FormRules } from 'element-plus'

// --------------------------------------------- F O R M  R E F --------------------------------------------------------
export function useElFormRef (initialValue: any = null) {
  return ref<FormInstance>(initialValue)
}

// --------------------------------------------- F O R M  M O D E L ----------------------------------------------------
export function useElFormModel<T extends object> (model: T) {
  return reactive<T>(model)
}

// ------------------------------------------- F O R M  R U L E S ------------------------------------------------------
export function useElFormRules (model: FormRules) {
  return reactive(model)
}

export function useRequiredRule ({ required = true } = {}) {
  return { required, message: 'Field is required', trigger: 'change' } as FormItemRule
}

export function useConfirmPassword (initialPassword: Ref<string>) {
  return {
    validator (_rule, value: string, callback) {
      if (initialPassword.value === value) {
        return callback()
      }

      callback(new Error('Passwords do not match'))
    }
  } as FormItemRule
}

export function useCVCRule () {
  return {
    validator (_rule, value: string, callback) {
      if (!value || !/^\d{3}$/.test(value)) {
        return callback(new Error('Invalid CVC'))
      }

      callback()
    }
  } as FormItemRule
}

export function useCardExpirationRule () {
  return {
    validator (_rule, value: string, callback) {
      if (!value || !/^\d{2}\/\d{2}$/.test(value)) {
        return callback(new Error('Invalid format'))
      }

      const [month, year] = value.split('/')

      const expirationMonth = Number(month)
      const expirationYear = Number(year)

      const currentDate = new Date()
      const currentYear = currentDate.getFullYear() % 100
      const currentMonth = currentDate.getMonth() + 1

      if (
        expirationYear < currentYear ||
        (expirationYear === currentYear && expirationMonth < currentMonth)
      ) {
        return callback(new Error('Invalid date'))
      }
      callback()
    }
  } as FormItemRule
}

export function useCardNumberRule () {
  return {
    validator (_rule, value: string, callback) {
      const cleanedNum = value.replace(/\s/g, '')

      const isVisa = /^4[0-9]{12}(?:[0-9]{3})?$/.test(cleanedNum)
      const isMastercard = /^5[1-5][0-9]{14}$/.test(cleanedNum)
      const isMastercard2017 = /^2[2-7][0-9]{14}$/.test(cleanedNum)

      if (isVisa || isMastercard || isMastercard2017) {
        return callback()
      }

      return callback(new Error('Invalid card number'))
    }
  } as FormItemRule
}

export function useEmailRule () {
  return { type: 'email', message: 'Incorrect email', trigger: ['change', 'blur'] } as FormItemRule
}

export function useMinLenRule (min: number): FormItemRule {
  return { min, message: `Minimum length is ${min}`, trigger: 'change' }
}

export function useMaxLenRule (max: number): FormItemRule {
  return { max, message: `Max length is ${max}`, trigger: 'change' }
}
