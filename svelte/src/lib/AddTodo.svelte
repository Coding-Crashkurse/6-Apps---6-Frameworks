<form action="">
    <input type="text" placeholder="todo" id="todovalue" bind:value={name}/>
    <input type="submit" id="todohandler" on:click|preventDefault={addTodo(name)} />
  </form>

<script>
    let name = ""
    export let addTodo
</script>