<script lang="ts">
    import Input from "$cmslib/components/Input.svelte";

    let activeTab = $state('metadata')
</script>

<div>
    <div class="cwcms-main-header has-tabs">
        <div class="header-container">
            <p class="header-title">Blogg</p>
        </div>
        <div class="tab-container">
            <button onclick={() => activeTab = 'metadata'} class="header-tab-button" class:active={activeTab === 'metadata'}>
                <div class="text-container">
                    Metadata
                </div>
            </button>
            <button onclick={() => activeTab = 'innehåll'} class="header-tab-button" class:active={activeTab === 'innehåll'}>
                <div class="text-container">
                    Innehåll
                </div>
            </button>
        </div>
    </div>
    <div class="cwcms-main-content">
        <Input title="Titel" description="Titeln på bloggartikeln, detta kommer att bli länkens namn, och synas i toppen av inlägget." type="text"/>
    </div>
</div>