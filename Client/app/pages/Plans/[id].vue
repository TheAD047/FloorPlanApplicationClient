<template>
  <div class="rounded-lg shadow-lg">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-wrap -mx-4">
          <!-- Product Images -->
          <div class="w-full md:w-1/2 px-4 mb-8">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product"
                    class="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage">
              <div class="flex gap-4 py-4 justify-center overflow-x-auto">
                  <img id="img1" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 1"
                        class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                        v-on:click="changeImage(this.src)">
                  <img id="img2" src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 1"
                        class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                        onclick="changeImage(this.src)">
                  <img id="img3" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 2"
                        class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                        onclick="changeImage(this.src)">
                  <img id="img4" src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 3"
                        class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                        onclick="changeImage(this.src)">
                  <img id="img5" src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Thumbnail 4"
                        class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                        onclick="changeImage(this.src)">
              </div>
          </div>

          <!-- Product Details -->
          <div class="w-full md:w-1/2 px-4">
              <h2 class="text-3xl font-bold mb-2"> {{ data.title }}</h2>
              <p class="text-gray-600 mb-4"> {{ data.bedrooms }} Bed {{ data.bathrooms }} Bath {{  data.area }} Sq.Ft.</p>
              <div class="mb-4">
                <span class="text-2xl font-bold mr-2"></span>
              </div>

              <hr class="mt-6 border-b-1 border-blueGray-300">

              <p class="text-gray-700 mb-6 py-4">
                  {{ data.description }}
              </p>                       
              
              <button type="submit" class="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  Add to Cart
              </button>

              <div>
                  <h3 class="text-lg font-semibold mb-2">How it works</h3>
                  <ol class="list-disc list-inside text-gray-700">
                      <li>One time purchase grants you access to the floor plan in entirety</li>
                      <li>The access is lifetime no renewal needed</li>
                      <li>Once purchased the plan just needs approval from your local city department</li>
                      <li>If you need consultation or have some questions go to FAQs</li>
                  </ol>
              </div>

              <br />
              <br />

              <!--if admin-->
              <div class="flex flex-wrap">
                  <button v-on:click="showModalToggle('DeleteModal')" class="mr-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button> 
                  <a class="mx-2 px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</a>
              </div>
              <DeleteModal :id="id" objectType="plan" />
              <!---->            
          </div>
      </div>
    </div>   
  </div>

  <br />

  <hr class="mt-6 border-b-1 border-blueGray-300">

  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PlanSuggestion :id="1"></PlanSuggestion>
        <PlanSuggestion :id="1"></PlanSuggestion>
        <PlanSuggestion :id="1"></PlanSuggestion>
    </div>
  </div>
</template>

<script setup>
    import DeleteModal from '~/components/modals/DeleteModal.vue';
    import { showModalToggle } from '~/assets/js/common';
    import PlanSuggestion from '~/components/misc/PlanSuggestion.vue';

    const {id} = useRoute().params;
    const config = useRuntimeConfig();
    const uri = config.public.apiRouteBase + 'plans/' + id;

    const {data, error, status} = await useFetch(uri);
    console.log(data);  

    function changeImage(img) {
        console.log(img);
        
        if(document.getElementById('mainImage').src != img.src)
        {
            document.getElementById('mainImage').src = img.src;
        }
    }
</script>