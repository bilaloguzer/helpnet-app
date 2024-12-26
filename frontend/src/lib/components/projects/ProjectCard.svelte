<script lang="ts">
import type { Project } from '$lib/types';

export let project: Project;

// Progress hesaplama
const progress = Math.round((project.raised / project.target) * 100);
const formattedTarget = new Intl.NumberFormat('tr-TR', { style: 'currency', currency: project.currency }).format(project.target);
const formattedRaised = new Intl.NumberFormat('tr-TR', { style: 'currency', currency: project.currency }).format(project.raised);
</script>

<div class="overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl">
 <img src={project.mainImage} alt={project.title} class="h-48 w-full object-cover" />
 <div class="p-6">
   <h3 class="mb-2 text-xl font-semibold">{project.title}</h3>
   <p class="mb-4 text-gray-600">{project.description}</p>
   
   <div class="mb-4 h-2.5 w-full rounded-full bg-gray-200">
     <div class="h-2.5 rounded-full bg-blue-600" style="width: {progress}%"></div>
   </div>
   
   <div class="mb-4 flex justify-between text-sm">
     <span>Hedef: {formattedTarget}</span>
     <span>Toplanan: {formattedRaised}</span>
   </div>
   
   <a 
     href="/projects/{project.id}" 
     class="mt-4 inline-block w-full rounded bg-blue-600 px-4 py-2 text-center text-white transition hover:bg-blue-700"
   >
     Projeyi İncele
   </a>
 </div>
</div>