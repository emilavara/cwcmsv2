<script lang="ts">
    interface Props {
        text: string
        onClick: () => void
        onHold?: () => void
        holdTime?: number
        type: 'primary' | 'secondary' | 'tertiary'
        active: boolean
        icon: string
    }

    const { text = 'Button', onClick, onHold, holdTime, active, icon }: Props = $props();

    let holdTimeout: number

    const pointerDownHandler = () => {

    }

    const pointerUpHandler = () => {

    }
</script>

<button class="cwcms-tabbutton" class:active>
    <div class="icon-container">
        <i class="ph {icon}"></i>
    </div>
    <div class="text-container">
        {text}
    </div>
    <div class="bracket top-left"></div>
    <div class="bracket top-right"></div>
    <div class="bracket bottom-left"></div>
    <div class="bracket bottom-right"></div>
</button>

<style lang="scss">
    .cwcms-tabbutton {
        all: unset;
        appearance: none;
        padding: 0.5rem 0.75rem;
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #656565;
        cursor: pointer;

        .icon-container {
            font-size: 20px;
            position: relative;
            top: 1px;
        }

        .text-container {
            font-weight: 400;
        }

        .bracket {
            display: none;
            position: absolute;

            &.top-left {
                height: 5px;
                width: 5px;
                top: -1px;
                left: -1px;
                border-top: 1px solid var(--color-border-accent);
                border-left: 1px solid var(--color-border-accent);
            }

            &.top-right {
                height: 5px;
                width: 5px;
                top: -1px;
                right: -1px;
                border-top: 1px solid var(--color-border-accent);
                border-right: 1px solid var(--color-border-accent);
            }

            &.bottom-left {
                height: 5px;
                width: 5px;
                bottom: -1px;
                left: -1px;
                border-bottom: 1px solid var(--color-border-accent);
                border-left: 1px solid var(--color-border-accent);
            }

            &.bottom-right {
                height: 5px;
                width: 5px;
                bottom: -1px;
                right: -1px;
                border-bottom: 1px solid var(--color-border-accent);
                border-right: 1px solid var(--color-border-accent);
            }
        }

        &.active {
            border: 1px solid var(--color-border-corner);
            color: var(--color-border-accent);
            background-image: linear-gradient(-45deg, #f9f9f9 25%, #fee1be79 25%, #fee1be79 50%, #f9f9f9 50%, #f9f9f9 75%, #fee1be79 75%, #fee1be79 100%);
            background-size: 3.66px 3.66px;

            .bracket {
                display: block;
            }
        }
    }
</style>