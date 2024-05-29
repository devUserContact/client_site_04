import type { Component } from 'solid-js'
import albums from '../../assets/albums.json'

let album = albums.albums

export default function Albums() {
  return (
    <div class='grid grid-cols-1 mb-10 gap-10 mt-10 ml-10 mr-10 place-items-center md:grid-cols-2'>
      <For each={album}>
        {(album) => (
          <div class='grid w-4/5 aspect-square pt-5 pb-5 place-items-center bg-slate-100 rounded-md'>
            <img
              class='w-4/5'
              src={album.image_url}
              alt={album.title}
            />
            <p class='mt-2'>{album.title}</p>
          </div>
        )}
      </For>
    </div>
  )
}
