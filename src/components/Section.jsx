export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}


// component fonksiyonunun parametreler kısmına eklediğimiz
// ...props (rest parameters) parent elementte Section componeneti
// kullanılırken girilen title ve children dışındaki bütün propları 
// toplayıp bir object haline getirerek Section componenent fonksiyonuna
// argüman olarak giriyor.

// componentin return statement içindeki {...props} (object destructuring) ise
// bu ...props  ile object haline getirdiğimiz propları tekrar destructure
// ederek ayrı ayrı proplar halinde çağırıldığı html elemanına ekliyor.
// Yukarıda section elemanına id attribute ekliyor. mesela parent elementte
// bir de className tanımlasaydık onu da destructure edip ekleyecekti.