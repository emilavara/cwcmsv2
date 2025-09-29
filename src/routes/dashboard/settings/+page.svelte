<script lang="ts">
    import Input from "$cmslib/components/Input.svelte";

    let activeTab = $state('profil')
</script>

<div>
    <div class="cwcms-main-header has-tabs">
        <div class="header-container">
            <div class="header-title">Inställningar</div>
        </div>
        <div class="tab-container">
            <button onclick={() => activeTab = 'profil'} class="header-tab-button" class:active={activeTab === 'profil'}>
                <div class="text-container">
                    Profil
                </div>
            </button>
            <button onclick={() => activeTab = 'säkerhet'} class="header-tab-button" class:active={activeTab === 'säkerhet'}>
                <div class="text-container">
                    Säkerhet
                </div>
            </button>
            <button onclick={() => activeTab = 'appinställningar'} class="header-tab-button" class:active={activeTab === 'appinställningar'}>
                <div class="text-container">
                    Appinställningar
                </div>
            </button>
        </div>
    </div>
    <div class="cwcms-main-content">
        <Input title="Namn" description="Titeln på bloggartikeln, detta kommer att bli länkens namn, och synas i toppen av inlägget." type="text"/>
    </div>
</div>