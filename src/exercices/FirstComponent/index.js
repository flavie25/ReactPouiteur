import React from 'react'

import SecondComponent from './SecondComponent.js'
import Button from 'components/Button'

const FirstComponent= () => {
  return (
    <div>
      <Button prename="j'adore">Cool </Button>
      <Button > Chouette </Button>
      First component
      <SecondComponent color="red"> Second component children </SecondComponent>
      <SecondComponent> Second component children green please </SecondComponent>
    </div>
  )
}

export default FirstComponent;
