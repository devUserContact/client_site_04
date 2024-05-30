import { For, Show, Suspense, createResource } from 'solid-js'
import { useParams } from '@solidjs/router'
import albums from '../../assets/albums.json'

let album = albums.albums
const getSpecifiedAlbum = async (url: any) => {
  for (var i: number = 0; i < album.length; i++) {
    if (album[i].kebob === url) {
      let res = album[i]
      console.log(res)
      return res
    }
  }
}

export default function Album() {
  const params = useParams()
  let url = params.album
  const [specifiedAlbum] = createResource(url, getSpecifiedAlbum)

  return (
    <Suspense>
      <Show when={specifiedAlbum()}>
        <div class='grid grid-cols-1 mb-10 gap-10 mt-10 ml-10 mr-10 place-items-center md:grid-cols-2'>
          <div class=''>
            <img class='w-3/5 float-right' src={specifiedAlbum()?.image_url} />
          </div>
          <div class='mt-auto mb-auto mr-auto ml-10 text-left'>
            <p class=''>{specifiedAlbum()?.title}</p>
            <p class=''>{specifiedAlbum()?.release_date}</p>
            <br />
            <For each={specifiedAlbum()?.links}>
              {(link: any) => (
                <>
                  <a href={link.spotify} target='_blank'>
                    <p>spotify</p>
                  </a>
                  <a href={link.apple_music} target='_blank'>
                    <p>apple music</p>
                  </a>
                  <a href={link.bandcamp} target='_blank'>
                    <p>bandcamp</p>
                  </a>
                </>
              )}
            </For>
          </div>
        </div>
      </Show>
    </Suspense>
  )
}
