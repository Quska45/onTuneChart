<script lang="ts">
    export let displayValue: string = 'none';
</script>

<div class="onTune_chart_blocker" style="display: { displayValue }">
</div>

<style>
    .onTune_chart_blocker {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: black;
        opacity: 0.7;
        z-index: 5;
    }
</style>