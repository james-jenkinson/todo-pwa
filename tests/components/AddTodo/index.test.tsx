import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import AddTodo from '../../../src/components/AddTodo'

describe('AddTodo', () => {
  it('should accept text input', () => {
    render(<AddTodo />)
    const textInput = screen.getByRole('textbox') as HTMLInputElement

    fireEvent.change(textInput, { target: { value: 'foo' } })

    expect(textInput.value).toEqual('foo')
  })

  it('should be cleared on form submission', async () => {
    render(<AddTodo />)
    const textInput = screen.getByRole('textbox') as HTMLInputElement

    fireEvent.change(textInput, { target: { value: 'foo' } })
    const originalText = textInput.value

    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(originalText).toEqual('foo')
    await waitFor(() => expect(textInput.value).toEqual(''))
  })

  it('should not allow empty text', async () => {
    render(<AddTodo />)

    const form = screen.getByRole('form')
    fireEvent.submit(form)

    await screen.findByText('Please enter a name for the todo')
  })
})
