function doSomething() {
  console.log("button clicked!");
}

function printBye() {
  console.log("bye!");
}

export default function Button() {
  return (
    <div>
      {/* onClick event */}
      <button onClick={doSomething}>Click me!</button>
      {/* nonClick event */}
      <p onMouseOut={printBye}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt a
        porro repellat suscipit quod qui tenetur inventore, facilis quas,
        aliquam voluptatem! Natus adipisci dolores eligendi illo repellendus
        sequi voluptate aperiam?
      </p>
    </div>
  );
}
