export default function App(props) {
  return (
    <>
      <nav class='grid grid-cols-3 pt-5 pb-5 bg-pink-100'>
        <div class='ml-10'>
          <a href='/'>🎶</a>
        </div>
        <div class='text-center'>
          <a href='/albums'>albums</a>
        </div>
        <div class='text-center'>
          <a href='/about'>about</a>
        </div>
      </nav>
      {props.children}
    </>
  )
}
