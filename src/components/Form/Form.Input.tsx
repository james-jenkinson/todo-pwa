import React from 'react'
import { useFormContext } from 'react-hook-form'
import './form.input.css'

interface Props {
  name: string
  defaultValue?: string
}

const FormInput: React.FC<Props> = (props) => {
  const { register, errors } = useFormContext()
  const error = errors[props.name]

  const isErrorState = error !== undefined

  return (
    <div>
      <input
        className={isErrorState ? 'form-input--error' : ''}
        defaultValue={props.defaultValue}
        name={props.name}
        ref={register}
      />
      {isErrorState && <span className='form-input__error-label'>{error.message}</span>}
    </div>
  )
}

export default FormInput
