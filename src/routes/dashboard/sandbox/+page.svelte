<script lang="ts">
    import Input from "$cmslib/components/Input.svelte";

    let testValue = $state('test value')
</script>

{testValue}

<Input bind:value={testValue} type="text"/>