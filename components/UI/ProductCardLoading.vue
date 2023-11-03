<template>
	<div
		class="flex flex-col w-full items-center overflow-hidden bg-white border border-gray-200 rounded-lg shadow sm:flex-row"
	>
		<div
			class="product-image h-[200px] md:h-[250px] flex-shrink-0 w-full sm:w-[40%] overflow-hidden"
		>
			<UISkeletonLoading />
		</div>
		<div class="flex flex-1 flex-col justify-between p-4">
			<h5 class="mb-2 w-14 rounded-2xl overflow-hidden h-6">
				<UISkeletonLoading />
			</h5>
			<p class="mb-3 w-[70%] rounded-lg overflow-hidden h-8">
				<UISkeletonLoading />
			</p>
			<p class="mb-3 w-full h-24 rounded-lg overflow-hidden">
				<UISkeletonLoading />
			</p>
		</div>
	</div>
</template>
