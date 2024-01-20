// store/index.js
export const state = () => ({
    slides: [
        // Danh sách các slide
        { id: 1, content: 'Nội dung slide 1' },
        { id: 2, content: 'Nội dung slide 2' },
        // ...
    ],
    pageSize: 5, // Số lượng slide trên mỗi trang
    currentPage: 1
})
