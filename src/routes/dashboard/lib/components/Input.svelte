<script lang="ts">
    interface Props {
        value: any
        type: 'text' | 'textarea' | 'date'
        title?: string
        description?: string
        required?: boolean
        placeholder?: string
        disabled?: boolean
        rows?: number
    }

    let { value = $bindable(), type, title, description, required, placeholder, disabled, rows }: Props = $props()
</script>

<div class="cwcms-input-container">
    <div class="cwcms-input-title">{title}</div>
    {#if type != 'textarea'}
        <input bind:value={value} type={type} {disabled}/>
    {/if}

    {#if type === 'textarea'}
        <textarea bind:value={value} {rows} {disabled}></textarea>
    {/if}
    <div class="cwcms-input-description">{description}</div>
</div>