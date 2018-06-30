export const updateConcertFormData = concertFormData => {
  return {
    type: 'INPUT_DATA',
    concertFormData
  }
}

export const resetConcertForm = () => {
  return {
    type: 'RESET_CONCERT_FORM'
  }
}
