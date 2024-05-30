import albums from '../../assets/albums.json'

let album = albums.albums

export default function Albums() {
  return (
    <div class='grid grid-cols-1 mb-10 gap-10 mt-10 ml-10 mr-10 place-items-center md:grid-cols-2'>
      <For each={album}>
        {(album: any) => (
          <div class='grid w-4/5 aspect-square pt-5 pb-5 place-items-center bg-slate-100 rounded-md'>
            <a class='grid place-items-center' href={'albums/' + album.kebob}>
              <img class='w-4/5' src={album.image_url} alt={album.title} />
            </a>
          </div>
        )}
      </For>
    </div>
  )
}
