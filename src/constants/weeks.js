const WeeksData = [
    {
        time: "Tuần 1",
        data: [{
            title: "Tìm hiểu quy trình thực hiện thực tập dự án tốt nghiệp",
            link: "https://drive.google.com/drive/folders/1wQsReLe4seCLsVYNhwV8x720RIzkxpbU?usp=drive_link"
        }]
    },
    {
        time: "Tuần 2",
        data: [{ title: "Khởi tạo dự án và phân chia công việc", link: "https://docs.google.com/spreadsheets/d/1bVT7z40Sg6aFfDapOI4_-Wmfm9wa-wwE8CoGizv-MPo/edit?usp=drive_link" }]
    },
    {
        time: "Tuần 3", data: [{ title: "Trình bày mục tiêu tính năng dự án", link: "https://docs.google.com/document/d/1YJiDl2GH-Um4cl8qLueEx6AxucRNIMWWYGmBQwIESA0/edit?usp=drive_link" },

        { title: "Phân tích các hệ thống tương tự", link: "https://docs.google.com/document/d/1k9lVSvMq0GzaK2WOeQhiLBJ1T5JzjPHS/edit?usp=drive_link&ouid=102652003963482320349&rtpof=true&sd=true" }]
    },

    {
        time: "Tuần 4", data: [{ title: "Hoàn thành quy trình giải quyết vấn đề", link: "https://docs.google.com/document/d/1plqCf27jPaJlA3bisHrI_-8uzjjIvzwMRYskCY_FQ7w/edit?usp=drive_link", },
        { title: "Thiết kế các quy trình chức năng workflow", link: "https://drive.google.com/drive/folders/1FIzptd_xqkF72LcBkSYfMdzcZp99xglz?usp=drive_link" }]
    },

    {
        time: "Tuần 5", data: [{ title: "Thiết kế các bản mẫu prototype phù hợp workflow", link: "https://drive.google.com/drive/folders/17LDnMvd7Ui0YW9RPCNI3SHW06fPvdUC-?usp=drive_link" },
        { title: "Bàn luận và thống nhất phạm vi đề tài", }]
    },

    { time: "Tuần 6", data: [{ title: "Thiết kế mô hình dữ liệu", link: "https://drive.google.com/drive/folders/1pzGaChdJQeSNItGW5R-LMwW6gZc883OU?usp=drive_link" }] },

    { time: "Tuần 7", data: [{ title: "Tạo tài liệu đề cương", link: "https://docs.google.com/document/d/19ifU8ChgCltK1fg5Qq0mwYH1eCxZsz67wPsQOoFlqiA/edit?usp=sharing" }] },

    {
        time: "Tuần 8", data: [{ title: "Tạo Logical View", link: "https://drive.google.com/file/d/1_EZ-sfhqBt7j_fAkWqRlKe5u0ubT0nhO/view?usp=drive_link" },
        { title: "Tạo Deployment View", link: "https://drive.google.com/file/d/1x4MRqo_N0OcveKhTzsoKtrUYM9epW3yk/view?usp=drive_link" }]
    },

    { time: "Tuần 9", data: [{ title: "Tạo các Process View và Development View", link: "https://drive.google.com/drive/folders/1EQThYnYz79T3vY_klNe0pkLE-XXaAy0y" }] },

    { time: "Tuần 10", data: [{ title: "Quản lý các tác vụ bằng Trello", link: "https://trello.com/w/protee2/home" }] },

    {
        time: "Tuần 11", data: [{ title: "Cập nhật đề cương theo Latex", link: "https://drive.google.com/drive/folders/1SLTU_27CBIpUR4zbP8_WL2XNbfxfNqWx?usp=drive_link" },
        { title: "Thực hiện tìm các tài liệu tham khảo liên quan đề tài", link: "https://drive.google.com/drive/folders/1hLDMGluktfEUlsa5IyKjaDTWHYLKjuoS?usp=drive_link" }]
    },

    {
        time: "Tuần 12", data: [{ title: "Cập nhật file đề cương", link: "https://drive.google.com/file/d/1vSeAkZPKn3SkckC_Gz3eKGpYo-XqY2Mz/view?usp=drive_link" },
        { title: "Tạo Product Backlog", link: "https://drive.google.com/drive/folders/1mSEWoB1WoWWi-_aq_9TCBVxBquJy8vtO?usp=drive_link" }]
    },

    {
        time: "Tuần 13", data: [{ title: "Cập nhật đề cương", link: "https://drive.google.com/file/d/1q3nJIpjvslpz11G2IijMZEe3_miBXrJa/view?usp=drive_link" },
        { title: "Cập nhật Product Backlog", link: "https://drive.google.com/drive/folders/1mSEWoB1WoWWi-_aq_9TCBVxBquJy8vtO?usp=drive_link" }]
    },

    { time: "Tuần 14", data: [{ title: "Hoàn thiện đề cương để nộp cho Khoa", link: "https://drive.google.com/file/d/1N5ivxAuKJHdShpvIMl6nj4N9PJFo0I6q/view?usp=drive_link" }] },

    {
        time: "Tuần 15", data: [{ title: "Khởi tạo trang Release sản phẩm hàng tuần", link: "https://signature-sandy.vercel.app/" },
        { title: "Tìm hiểu và thống nhất lựa chọn các công nghệ sử dụng cho đề tài." }]
    },

    {
        time: "Tuần 16", data: [{ title: "Khởi tạo báo cáo chi tiết sản phẩm", link: "https://www.overleaf.com/read/mgzpvwdzwxns" },
        { title: "Thực hiện các chức năng xác thực, hồ sơ người dùng, kết nối (Mobile)." },
        { title: "Thực hiện các chức năng quản lý khách hàng (Portal)." }]
    },

    {
        time: "Tuần 17", data: [{ title: "Thiết kế logo sản phẩm", link: "https://drive.google.com/file/d/1C51DWxuZjqoXqZt-2RTwgtJv-TUQo9ET/view?usp=drive_link" },
        { title: "Hoàn thành chương 1, chương 5 của báo cáo", link: "https://drive.google.com/file/d/14q3l7njC24-qdSPuKL0Q9DO-kXJBAhZd/view?usp=drive_link" },
        { title: "Cập nhật khảo sát ứng dụng tương tự.", link: "https://drive.google.com/drive/folders/1GW6j-XESpfVDSPele-uaaM61t0db76A_?usp=drive_link" },
        { title: "Thực hiện các chức năng Định vị, Lưu trữ địa điểm (Mobile)." }]
    },

    {
        time: "Tuần 18", data: [{ title: "Hoàn thành tài liệu hướng dẫn cài đặt và sử dụng hệ thống", link: "https://drive.google.com/file/d/1wDWeOg3ZSLjvkL-3Tgg1IR10we42luBv/view?usp=drive_link" },
        { title: "Hoàn thành tài liệu hướng dẫn biên dịch và triển khai hệ thống", link: "https://drive.google.com/file/d/1tSGjpvWy6kJ3yrr0dz8DxfZYTbqLjAnS/view?usp=drive_link" },
        {
            title: "Thực hiện chương 2 báo cáo."
        },
        {
            title: "Thực hiện các chức năng đánh giá địa điểm (Portal)	"
        },
        { title: "Thực hiện giao diện ứng dụng", link: "https://drive.google.com/drive/folders/1RZE_54vK2w85FRleCR7Oicu8CT0xarUP?usp=drive_link" }]
    },

    {
        time: "Tuần 19	", data: [{ title: "Cập nhật chương 1, chương 2 báo cáo" },
        {
            title: "Thực hiện tính năng trò chuyện"
        },
        {
            title: "Thực hiện chương 3 báo cáo"
        },
        { title: "Thực hiện làm poster bảo vệ", link: "https://drive.google.com/file/d/1QFxM9LvSQpsKW4goeUOacsS2aZOdaLiO/view?usp=drive_link" },
        { title: "Cập nhật giao diện ứng dụng", link: "https://drive.google.com/drive/folders/1NFiHe26pVq4PQxbiqWrVzqz-UWvbW0Wk?usp=drive_link" },
        { title: "Thực hiện giao diện portal", link: "https://drive.google.com/drive/folders/1-e_ktHmu1b__0NCTA0a0IRUXHvqVjlvr?usp=drive_link" }]
    },

    {
        time: "Tuần 20	", data: [{ title: "Cập nhật kiến trúc đề tài.", link: "https://docs.google.com/document/d/1vaQkvJmg_zt8xGlEeAHGrMma5uPjbD8H/edit?usp=drive_link&ouid=102652003963482320349&rtpof=true&sd=true" },
        {
            title: "Thực hiện tính năng thêm khu vực không an toàn"
        },
        { title: "Cập nhật Product Backlog", link: "https://drive.google.com/drive/folders/1mSEWoB1WoWWi-_aq_9TCBVxBquJy8vtO?usp=drive_link" },
        {
            title: "Thực hiện tính năng tuỳ chọn xác định bán kính nguy hiểm"
        },
        { title: "Release ứng dụng hoàn thiện lần đầu", link: "https://drive.google.com/file/d/1qBt6xubN3m113dy3MCUHskLSVfbpw42Z/view?usp=drive_link" }]
    },

    {
        time: "Tuần 21	", data: [{ title: "Đặc tả yêu cầu use case", link: "https://docs.google.com/spreadsheets/d/1UC75QTkHaULtPrS0J5xYilNz4cVaEhqwvp-VVZN0HYQ/edit?usp=drive_link" },
        { title: " Thực hiện file hướng dẫn sử dụng ứng dụng", link: "https://docs.google.com/document/d/1fRY2XCYc6C4rFV-EGVAqcwDv_TZ4m1Q-/edit?usp=drive_link&ouid=102652003963482320349&rtpof=true&sd=true" },
        { title: "Cập nhật Product Backlog", link: "https://drive.google.com/drive/folders/1mSEWoB1WoWWi-_aq_9TCBVxBquJy8vtO?usp=drive_link" },
        { title: "Thực hiện chương 4 báo cáo	" },
        { title: "Thực hiện kiểm thử hệ thống", link: "https://docs.google.com/document/d/1Ygadd_Gvp21rzqs9JWTCu_TVL59xaYmx/edit?usp=drive_link&ouid=102652003963482320349&rtpof=true&sd=true" },
        { title: "Cập nhật release ứng dụng.", link: "https://drive.google.com/file/d/1w6_PPylpRBQJWm6slIz10YhmH8JHRrtS/view?usp=drive_link" }]
    },

    {
        time: "Tuần 22	", data: [{ title: "Cập nhật mã nguồn", link: "https://drive.google.com/drive/folders/1L5mpPH7bTSRqK_lbf-Jswtow_4AjvhrY?usp=drive_link" },
        {
            title: "Cập nhật chương 3, hoàn thiện chương 4 báo cáo"
        },
        { title: "Thực hiện liệt kê các bảng thuộc tính cơ sở dữ liệu", link: "https://docs.google.com/document/d/1Se85LcZhTI3BJtwBmSIgkJrJgnCW8w5c/edit?usp=drive_link&ouid=102652003963482320349&rtpof=true&sd=true" },
        { title: "Cập nhật hướng dẫn cài đặt và sử dụng phần mềm", link: "https://drive.google.com/file/d/1L2osKcZiAQML36PUv2muwDI-sgngqgmC/view?usp=drive_link" },
        { title: "Hoàn thiện báo cáo", link: "https://drive.google.com/file/d/1244_otPbDfGKpfq3fpV_PL9L5EHzye65/view?usp=drive_link" },
        { title: "Cập nhật hoàn thiện mã nguồn", link: "https://drive.google.com/file/d/1p11ikCNimpnkcgEaWEuz6hSaedp66q7n/view?usp=drive_link" },
        { title: "Hoàn thiện cuốn nộp cho Khoa", link: "https://drive.google.com/file/d/1ewIzwWqsxzmJDAlycDkHu8R8szf8ZQb5/view?usp=drive_link" }]
    },

    {
        time: "Tuần 23", data: [{ title: "Quay video minh hoạ hướng dẫn cài đặt", link: "https://drive.google.com/drive/folders/1n0wxaOSROKKrVzW7Ss0JoMwM1Q6WK0nf?usp=drive_link" },
        { title: " Quay video demo", link: "https://drive.google.com/drive/folders/1n0wxaOSROKKrVzW7Ss0JoMwM1Q6WK0nf?usp=drive_link" },
        { title: "Cập nhật Poster bảo vệ", link: "https://drive.google.com/file/d/1KqrfaMgW1vY_L8U5OtM4zCiKFY2XWet1/view?usp=drive_link" },
        { title: "Quay video tự bảo vệ", link: "https://drive.google.com/file/d/1vS06l_SRrnVuByyFW_7EwfcYl4bVJ7Fr/view?usp=drive_link" },
        { title: "Thực hiện đánh giá phần mềm", link: "https://docs.google.com/spreadsheets/d/1eWAcdq4M_P5R3z6PrwRQkbYfJ6Qnn2330rUb8hYxJ8I/edit?usp=drive_link" },
        { title: "Thực hiện đánh giá báo cáo", link: "https://docs.google.com/spreadsheets/d/1PTTOdku3GjHnSQbhcxJgU1OaU2pd-Gg1e2kVbfxs9_A/edit?usp=drive_link" },
        { title: "Hoàn thiện CD nộp cho thầy hướng dẫn", link: "https://drive.google.com/drive/folders/1YmCn_JVWLFPpNGLzCLdSyrwivy6omfcY?usp=drive_link" }]
    }
]
export default WeeksData