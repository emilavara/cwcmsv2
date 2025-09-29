<script lang="ts">
    interface Props {
        value: any
        type: 'text'
    }

    let { value = $bindable(), type } = $props()
</script>

<input bind:value={value} type={type} placeholder="thingy"/>