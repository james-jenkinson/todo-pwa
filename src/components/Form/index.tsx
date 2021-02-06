import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FormInput from './Form.Input'

interface Props<T extends {[key: string]: any}> {
  onSubmit: SubmitHandler<T>
  children: React.ReactNode[] | React.ReactNode
  name: string
  schema: any
}

const Form = <T,>(props: Props<T>): React.ReactElement => {
  const methods = useForm({ resolver: yupResolver(props.schema) })

  const onSubmit = methods.handleSubmit<T>((a, b) => {
    props.onSubmit(a, b)
    methods.reset()
  })

  return (
    <FormProvider
      {...methods}
    >
      <form onSubmit={onSubmit} aria-label={props.name}>
        {props.children}
      </form>
    </FormProvider>
  )
}

export default Object.assign(
  Form,
  {
    Input: FormInput
  }
)
