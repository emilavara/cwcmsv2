<script lang="ts">
    interface Props {
        text: string
        onClick: () => void
        onHold?: () => void
        holdTime?: number
        type: 'primary' | 'secondary' | 'tertiary'
        active: boolean
    }

    const { text = 'Button', onClick, onHold, holdTime }: Props = $props();

    let holdTimeout: number

    const pointerDownHandler = () => {

    }

    const pointerUpHandler = () => {

    }
</script>

<button class="cwcms-tabbutton">
    {text}
</button>

<style lang="scss">
    .cwcms-tabbutton {
        all: unset;
        appearance: none;
    }
</style>