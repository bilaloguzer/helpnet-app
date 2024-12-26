<script lang="ts">
  import { stats } from '$lib/data/mockData';
  import { projects } from '$lib/data/mockData';
  import ProjectCard from '$lib/components/projects/ProjectCard.svelte';

const recentProjects = projects
  .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  .slice(0, 2);
</script>

<main>
	<!-- Hero Section -->
	<section class="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
		<div class="container mx-auto px-4">
			<div class="max-w-3xl">
				<h1 class="mb-4 text-5xl font-bold">İyilik için bir araya gelin</h1>
				<p class="mb-8 text-xl">Toplumsal projelerle değişime katkıda bulunun</p>
				<div class="space-x-4">
					<a
						href="/projects"
						class="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50"
					>
						Projelere Göz At
					</a>
					<a
						href="/organizations/projects/new"
						class="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-semibold hover:bg-white/10"
					>
						Proje Başlat
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Stats Section -->
  <section class="bg-gray-50 py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
        <div class="rounded-lg bg-white p-6 shadow-sm">
          <p class="text-4xl font-bold text-blue-600">{stats.totalDonations}</p>
          <p class="mt-2 text-gray-600">Toplam Bağış</p>
        </div>
        <!-- Diğer stat box'ları için de aynı değişiklikleri uygulayın -->
      </div>
    </div>
  </section>
 
  <!-- Recent Projects Section -->
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="mb-8 flex items-center justify-between">
        <h2 class="text-3xl font-bold">Son Eklenen Projeler</h2>
        <a href="/projects" class="text-blue-600 hover:text-blue-700">Tümünü Gör →</a>
      </div>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        {#each recentProjects as project}
          <ProjectCard {project} />
        {/each}
      </div>
    </div>
  </section>
 </main>

<style>
	/* Additional custom styles can go here */
</style>
