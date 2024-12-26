<script>
    import {stats, recentProjects } from "$lib/data/mockData";
    import ProjectCard from "$lib/components/projects/ProjectCard.svelte";
</script>

<section class="py-16">
    <div class="container mx-auto px-4">
        <h2 class="mb-8 text-3xl font-bold">Tüm Projeler</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            {#each recentProjects as project}
    <ProjectCard {project} />
            {/each}
        </div>

        
    </div>
</section>