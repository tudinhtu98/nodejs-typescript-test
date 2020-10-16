"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 8080;
app_1.default.get("/", (req, res) => {
    res.send({
        characters: [
            {
                name: "Nguyễn Văn A",
                job: "Người của công chúng",
            },
            {
                name: "Mac",
                job: "Nhân viên Apple",
            },
            {
                name: "Phượng Vĩ",
                job: "Nhân viên Huawei",
            },
            {
                name: "Obama",
                job: "Former President",
            },
        ],
    });
});
app_1.default.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
//# sourceMappingURL=server.js.map