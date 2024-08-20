export default function Tabs({ children, buttons, ButtonsContainer = "div" }) {
  return (
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      {children}
    </>

  )
}

// component'in re-usability arttırmak için ButtonContainer prop ile 
// buttonları kapsayan elementi prop olarak parent elementte componenti 
// kullanırken verdik.

// buttons prop ile component içinde children prop haricinde parent element
// üzerinden componenti kullanırken jsx enjekte edebileceğimiz bir 
// alan daha oluşturduk.