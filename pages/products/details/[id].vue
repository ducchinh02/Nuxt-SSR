<script setup>
const route = useRoute();
const itemId = route.params.id;

const productDetails = await fetch(`https://dummyjson.com/products/${itemId}`)
	.then((res) => res.json())
	.then((data) => data);

useServerSeoMeta({
	ogTitle: () => productDetails.title,
	title: () => productDetails.title,
	description: () => productDetails.description,
	ogDescription: () => productDetails.description,
	ogImage: () => productDetails.thumbnail,
	ogImageUrl: () => productDetails.thumbnail,
	twitterCard: () => "summary_large_image",
	twitterTitle: () => productDetails.title,
	twitterDescription: () => productDetails.description,
	twitterImage: () => productDetails.thumbnail,
});
</script>
<template>
	<section class="py-10 min-h-screen flex items-center">
		<div class="container mx-auto px-4 md:px-0">
			<div
				class="lg:w-4/5 mx-auto bg-white rounded-2xl overflow-hidden shadow-md flex flex-wrap"
			>
				<img
					class="lg:w-1/2 w-full object-contain object-center rounded border border-gray-200"
					:src="productDetails.thumbnail"
					:alt="productDetails.title"
				/>
				<div class="lg:w-1/2 w-full p-5 lg:px-10 lg:py-6 mt-0 lg:mt-0">
					<h2
						class="text-sm title-font bg-gradient-to-tr from-pink-600 to-pink-400 px-3 py-1 text-white w-max rounded-2xl tracking-widest"
					>
						{{ productDetails.brand }}
					</h2>
					<h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
						{{ productDetails.title }}
					</h1>
					<div class="flex mb-4">
						<span class="flex items-center">
							<svg
								fill="currentColor"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-4 h-4 text-yellow-400"
								viewBox="0 0 24 24"
							>
								<path
									d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
								></path>
							</svg>
							<span class="text-gray-600 ml-3"
								>{{ productDetails.rating }}
							</span>
						</span>
					</div>
					<p class="leading-relaxed">
						{{ productDetails.description }}
					</p>
					<div class="flex my-6 items-center pt-5 border-t-2 border-gray-200">
						<span class="title-font font-medium text-2xl text-gray-900"
							>${{ productDetails.price }}
						</span>
						<span class="ml-auto title-font font-medium text-2xl text-gray-900"
							>${{
								(
									productDetails.price +
									(productDetails.price / 100) *
										productDetails.discountPercentage
								).toFixed(2)
							}}
						</span>
						<span class="title-font font-medium ml-4 text-lg text-red-500"
							>-{{ productDetails.discountPercentage }}%
						</span>
					</div>
					<div class="flex items-center">
						<button
							class="flex ml-auto text-white bg-gradient-to-tr from-pink-600 to-pink-400 rounded-lg border-0 py-2 px-6 focus:outline-none"
						>
							Add to cart
						</button>
						<button
							class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
						>
							<svg
								fill="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
								></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
