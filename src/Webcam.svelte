<script>
    let videoSource = null;
    let loading = false;
    let devices = 0;
    let err = ""
    const getCameraVideo = async ()=>{
        try{
            loading = true;
            const stream = await navigator.mediaDevices.getUserMedia({video: true})
            videoSource.srcObject = stream;
            videoSource.play();
            loading = false;
            
        }
        catch (error){
            console.log('error', error)
            err = error;
            // alert("Camera error", error)
        }
    }
</script>
<div>
    {#if loading}
    <h1>Cargando</h1>
    {/if}
    {devices}
    <!-- svelte-ignore a11y-media-has-caption -->
    <video bind:this={videoSource}></video>
    <button on:click={getCameraVideo}>Click</button>
    {err}
</div>

