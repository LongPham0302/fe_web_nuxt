<template>
    <div class="mx-auto">
        <div class="flex items-center justify-between">
            <div class="text-2xl font-bold ml-3">{{ title }}</div>
            <div class="flex gap-2 mr-2">
                <button v-for="brand in brands" :key="brand"
                    class="bg-white shadow-md rounded-full px-4 py-2 text-xs font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 whitespace-nowrap">
                    {{ brand }}
                </button>
                <button
                    class="bg-white shadow-md rounded-full px-4 py-2 text-xs font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 whitespace-nowrap">
                    <i class="fas fa-chevron-down"></i> {{ viewAll }}
                </button>
            </div>
        </div>
        <div class="max-w-6xl mx-auto mt-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
                <!-- Loop through product data to generate cards -->
                <div v-for="product in products" :key="product.id" class="bg-white p-4 rounded-md shadow-md">
                    <img :src="product.image" alt="Product Image" class="w-full h-32 object-cover mb-4">
                    <div class="text-xl font-bold mb-2">{{ product.name }}</div>
                    <div class="text-gray-600">{{ product.description }}</div>
                    <div class="mt-4 text-blue-500 font-semibold">{{ product.price }}</div>
                    <button
                        class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Buy
                        Now</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Slide",
    data() {
        return {
            title: "LAPTOP",
            brands: [
                "Macbook",
                "Asus",
                "MSI",
                "Lenovo",
                "HP",
                "Acer",
                "Dell",
                "Huawei",
                "Gigabyte",
                "Surface",
            ],
            viewAll: "Xem tất cả",
            products: [
                {
                    id: 1,
                    name: "Product 1",
                    description: "Description of Product 1",
                    price: "$100",
                    image: "https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2023/6/13/03-16866569815101672545124-16-10-534-1000-crop-16866570358101851702408.jpg",
                },
                {
                    id: 1,
                    name: "Product 1",
                    description: "Description of Product 1",
                    price: "$100",
                    image: "https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2023/6/13/03-16866569815101672545124-16-10-534-1000-crop-16866570358101851702408.jpg",
                },
                {
                    id: 1,
                    name: "Product 1",
                    description: "Description of Product 1",
                    price: "$100",
                    image: "https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2023/6/13/03-16866569815101672545124-16-10-534-1000-crop-16866570358101851702408.jpg",
                },
                {
                    id: 1,
                    name: "Product 1",
                    description: "Description of Product 1",
                    price: "$100",
                    image: "https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2023/6/13/03-16866569815101672545124-16-10-534-1000-crop-16866570358101851702408.jpg",
                },
                {
                    id: 1,
                    name: "Product 1",
                    description: "Description of Product 1",
                    price: "$100",
                    image: "https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2023/6/13/03-16866569815101672545124-16-10-534-1000-crop-16866570358101851702408.jpg",
                },
                {
                    id: 1,
                    name: "Product 1",
                    description: "Description of Product 1",
                    price: "$100",
                    image: "https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2023/6/13/03-16866569815101672545124-16-10-534-1000-crop-16866570358101851702408.jpg",
                }
            ]
        };
    },
};
</script>
  