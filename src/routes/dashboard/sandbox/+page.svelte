<script lang="ts">
    import Input from "$cmslib/components/Input.svelte";

    let testValue = $state('3 saker att tänka på innan du skriver ett avtal')
    let date = $state('heeh')
</script>

{date}
<hr/>

<Input title="Titel" description="Titeln på bloggartikeln, detta kommer att bli länkens namn, och synas i toppen av inlägget." bind:value={testValue} type="text"/>
<Input title="URL-slugg" description="Automatiskt genererad från titeln. Detta blir länken för blogginlägget." bind:value={testValue} disabled={true} type="text"/>
<Input title="Datum" description="Automatiskt genererad från titeln. Detta blir länken för blogginlägget." bind:value={date} type="date"/>
<Input title="Datum" description="Automatiskt genererad från titeln. Detta blir länken för blogginlägget." rows={10} bind:value={date} type="textarea"/>