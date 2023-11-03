<template>
	<div class="bg-gray-200 font-sans leading-normal tracking-normal">
		<PartialsNavBar />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
.router-link-exact-active {
	@apply text-pink-700 font-bold;
}
</style>
