<script lang="ts">
    import Divider from '$cmscomponents/Divider.svelte'
    import TabButton from '$cmscomponents/TabButton.svelte';
    import { page } from '$app/stores'
    import clientLogo from '../../assets/client_logo.svg'

    const DASHBOARD_BASE = '/dashboard'

    // keep the current path in reactive state
    let pathname = $state('/')

    // subscribe to the `page` store so this component re-renders on nav
    $effect(() => {
        const unsub = page.subscribe(p => { pathname = p.url.pathname })
        return () => unsub()
    })

    const normalize = (s: string) => {
        const n = s.replace(/\/+$/, '')
        return n === '' ? '/' : n
    }

    const resolveHref = (to: string) => {
        const abs = to.startsWith('/') ? to : `${DASHBOARD_BASE}/${to}`
        return normalize(abs)
    }

    function isActive(href: string): boolean {
        const current = normalize(pathname)
        const target = resolveHref(href)

        if (!current.startsWith(DASHBOARD_BASE)) return false
        if (target === DASHBOARD_BASE) return current === DASHBOARD_BASE
        return current === target || current.startsWith(target + '/')
    }
</script>

<div class="cwcms-sidebar">
    <div class="cwcms-sidebar-header">
        <div class="client-logo-container">
            <img src={clientLogo}>
        </div>
        <i class="ph ph-sidebar-simple"></i>
    </div>
    <div class="cwcms-sidebar-content">
        <Divider/>
        <TabButton icon="ph-layout" active={isActive('/dashboard')} text="Översikt" type="link" link={'/dashboard/'}/>
        <TabButton icon="ph-chat-text" active={isActive('/dashboard/blog')} text="Blogg" type="link" link={'/dashboard/blog/'}/>
        <TabButton icon="ph-newspaper" text="Nyheter"/>
        <Divider/>
        <TabButton icon="ph-gear" active={isActive('/dashboard/settings')} text="Inställningar" type="link" link={'/dashboard/settings'}/>
    </div>
    <div class="cwcms-sidebar-footer monochrome-striped-background"></div>
</div>

<style lang="scss">
    .cwcms-sidebar {
        display: grid;
        grid-template-rows: 64px 1fr 128px;
        height: 100vh;

        .cwcms-sidebar-header {
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .client-logo-container {
                width: 8rem;
                display: grid;
                place-items: center;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .ph {
                font-size: 20px;
            }
        }

        .cwcms-sidebar-content {
            padding: 1rem;
            display: flex;
            gap: 0.5rem;
            flex-direction: column;
        }

        .cwcms-sidebar-footer {
            border-top: 1px solid var(--color-border-primary);
            padding: 1rem;
        }
    }
</style>