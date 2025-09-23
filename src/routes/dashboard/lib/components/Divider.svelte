<script lang="ts">

</script>

<div class="cwcms-divider">
    <div class="line"></div>
</div>

<style lang="scss">
    .cwcms-divider {
        margin: 1rem 0;
        .line {
            height: 1px;
            position: relative;
            background-color: var(--color-border-primary);

            &::before, &::after {
                height: 5px;
                width: 5px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 0;
                content: "";
                opacity: 0.5;
                background-image: url("data:image/svg+xml,%3Csvg width='5' height='5' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 2H5V3H0V2Z' fill='%23717171'/%3E%3Cpath d='M5 4.37114e-08V5H4V0L5 4.37114e-08Z' fill='%23717171'/%3E%3C/svg%3E%0A");
            }

            &::after {
                right: unset;
                left: 0;
                background-image: url("data:image/svg+xml,%3Csvg width='5' height='5' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 2H0V3H5V2Z' fill='%23717171'/%3E%3Cpath d='M0 4.37114e-08V5H1V0L0 4.37114e-08Z' fill='%23717171'/%3E%3C/svg%3E%0A");
            }
        }
    }
</style>