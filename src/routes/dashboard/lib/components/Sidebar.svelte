<script lang="ts">
    import Divider from '$cmscomponents/Divider.svelte'
</script>

<div class="cwcms-sidebar">
    <div class="cwcms-sidebar-header">
        <div class="client-logo-container">
            Client Logo
        </div>
        <i class="ph ph-sidebar-simple"></i>
    </div>
    <div class="cwcms-sidebar-content">
        <Divider></Divider>
    </div>
    <div class="cwcms-sidebar-footer monochrome-striped-background"></div>
</div>

<style lang="scss">
    .cwcms-sidebar {
        display: grid;
        grid-template-rows: 64px 1fr 64px;
        height: 100vh;

        .cwcms-sidebar-header {
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .client-logo-container {
                /* font-size: 14px; */
            }

            .ph {
                font-size: 20px;
            }
        }

        .cwcms-sidebar-content {
            padding: 1rem;
        }

        .cwcms-sidebar-footer {
            border-top: 1px solid var(--color-border-primary);
            padding: 1rem;
        }
    }
</style>