<script setup lang="ts">
import { ref } from "vue";
interface product {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}
const products = ref<product[]>([]);
onBeforeMount(async () => {
	await fetch("https://dummyjson.com/products")
		.then((res) => res.json())
		.then((data) => (products.value = data.products));
});
</script>

<template>
	<div class="py-10">
		<div class="container mx-auto px-4 md:px-0">
			<div
				class="grid grid-cols-1 md:grid-cols-2 gap-3 justify-between grid-flow-dense"
			>
				<template v-if="Array.isArray(products) && products.length">
					<div class="product" v-for="(product, i) in products" :key="i">
						<RouterLink
							:to="`/products/details/${product.id}`"
							class="flex flex-col w-full items-center overflow-hidden bg-white border border-gray-200 rounded-lg shadow sm:flex-row hover:bg-gray-100"
						>
							<div
								class="product-image h-[200px] md:h-[250px] flex-shrink-0 w-full sm:w-[40%] overflow-hidden"
							>
								<img
									class="object-cover w-full h-full"
									:src="product.thumbnail"
									:alt="product.title"
								/>
							</div>
							<div
								class="flex flex-1 flex-col justify-between p-4 leading-normal"
							>
								<h5
									class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
								>
									{{ product.title }}
								</h5>
								<p
									class="mb-3 text-sm bg-gradient-to-tr from-pink-600 to-pink-400 px-3 py-1 rounded-2xl text-white w-max"
								>
									{{ product.brand }}
								</p>
								<p class="mb-3 font-normal text-gray-700 line-clamp-3">
									{{ product.description }}
								</p>
							</div>
						</RouterLink>
					</div>
				</template>
				<template v-else>
					<UIProductCardLoading v-for="(product, i) in 4" :key="product" />
				</template>
			</div>
		</div>
	</div>
</template>
