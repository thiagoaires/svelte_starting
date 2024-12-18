<script lang="ts">
  import type { Snippet } from "svelte";


  interface UserInputProps{
    children: Snippet;
    userName: String;
  }

  let {userName, children, ...props}: UserInputProps = $props();
  $inspect(userName);
  function onChange(event: any){
    console.log(`i'll send to database: ${event}`);
  } 


</script> 

<h1>your username</h1>
<input type="text" bind:value={userName}/>
<p>{userName}</p>
{@render children()}


<style>

  h1{
      color: blue;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

</style>