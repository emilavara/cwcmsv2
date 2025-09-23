<script lang="ts">
    import '$cmscss/main.scss'
	let { children } = $props();

	import Sidebar from '$cmscomponents/Sidebar.svelte'
</script>

<svelte:head>
    <title>cwCMS – Översikt</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/regular/style.css"/>
</svelte:head>

<div class="cwcms-layout">
    <div class="cwcms-sidebar-container">
        <Sidebar/>
    </div>
    <div class="cwcms-main-container">
        {@render children?.()}
    </div>
</div>