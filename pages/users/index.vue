<script setup>
import { ref } from "vue";
useHead({
	title: "Users",
	meta: [{ name: "description", content: "My amazing site." }],
	bodyAttrs: {
		class: "users-page",
	},
	script: [{ innerHTML: "console.log('Hello world')" }],
});

useSeoMeta({
	title: "Users",
	ogTitle: "Users",
	description: "This is my amazing site, let me tell you all about it.",
	ogDescription: "This is my amazing site, let me tell you all about it.",
	ogImage: "https://example.com/image.png",
	twitterCard: "summary_large_image",
});

const users = ref([]);

async function fetchUsers() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const userJson = await response.json();
	users.value = userJson;
}

fetchUsers();
</script>

<template>
	<div class="min-h-screen flex flex-col justify-center py-10">
		<div class="container mx-auto px-4 md:px-0">
			<!-- <template v-if="Array.isArray(users) && users.length"> -->
			<div
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 justify-between grid-flow-dense"
			>
				<div
					v-for="user in users"
					:key="user.email"
					class="w-full bg-white border border-gray-200 rounded-lg shadow"
				>
					<div class="flex flex-col items-center py-10">
						<h5 class="mb-1 text-xl font-medium text-gray-900">
							{{ user.name }}
						</h5>
						<span class="text-sm text-gray-500">
							{{ user.email }}
						</span>
						<div class="flex mt-4 space-x-3 md:mt-6">
							<a
								href="#"
								class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
								>Add friend</a
							>
							<a
								href="#"
								class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
								>Message</a
							>
						</div>
					</div>
				</div>
			</div>
			<!-- </template>
			<p v-else class="text-center font-bold text-xl">Loading users...</p> -->
		</div>
	</div>
</template>
