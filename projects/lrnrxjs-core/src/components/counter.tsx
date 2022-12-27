import { createSignal } from "solid-js"

export function Counter() {
  const [ count, setCount ] = createSignal(0)

  return <div class="flex gap-4">
    <button onClick={() => setCount(count() - 1)}>-</button>
    <p>{ count() }</p>
    <button onClick={() => setCount(count() + 1)}>+</button>
  </div>
}