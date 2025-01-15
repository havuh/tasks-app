import { act, renderHook, waitFor } from '@testing-library/react'

import { defaultValues, useAlertStore } from './alert-store'

describe('AlertStore', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useAlertStore())

    // PODEMOS EVITAR LA COMPARACIÓN DE CADA PROPIEDAD Y SIMPLEMENTE COMPARAR EL OBJETO COMPLETO

    // expect(result.current.open).toBe(false)
    // expect(result.current.type).toBe('error')
    // expect(result.current.title).toBe('!Ha ocurrido un error!')
    // expect(result.current.message).toBe('Por favor, inténtalo de nuevo en unos minutos.')
    // expect(result.current.showClose).toBe(false)
    // expect(result.current.disableClose).toBe(true)
    // expect(result.current.actions).toEqual({
    //   okAction: {
    //     label: 'Aceptar',
    //   },
    // })

    expect(result.current).toEqual(expect.objectContaining(defaultValues))
  })

  it('should show alert with provided properties', () => {
    const { result } = renderHook(() => useAlertStore())
    act(() => {
      result.current.showAlert({ title: 'New Title', message: 'New Message' })
    })
    expect(result.current.open).toBe(true)
    expect(result.current.title).toBe('New Title')
    expect(result.current.message).toBe('New Message')
  })

  it('should close alert and reset to default values', async () => {
    jest.useFakeTimers()

    const { result } = renderHook(() => useAlertStore())

    act(() => {
      result.current.showAlert({ title: 'New Title', message: 'New Message' })
    })

    expect(result.current.open).toBe(true)

    act(() => {
      result.current.closeAlert()
    })

    expect(result.current.open).toBe(false)

    act(() => {
      jest.advanceTimersByTime(300)
    })

    await waitFor(() => {
      expect(result.current.title).toBe(defaultValues.title)
      expect(result.current.message).toBe(defaultValues.message)
    })

    jest.useRealTimers()
  })
})
