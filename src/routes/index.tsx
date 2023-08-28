import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"
import type { DocumentHead } from "@builder.io/qwik-city"

import * as books from "../data/books.json"

export const useBooks = routeLoader$(() => {
  return books.library
})

export default component$(() => {
  const books = useBooks()

  return (
    <>
      <h1 class="text-black">Books</h1>
      <ul>
        {books.value.map(({ book }) => (
          <li key={book.ISBN}>{book.title}</li>
        ))}
      </ul>
    </>
  )
})

export const head: DocumentHead = {
  title: "Welcome to Library",
  meta: [
    {
      name: "description",
      content: "Library",
    },
  ],
};
