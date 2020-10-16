import app from "./app";

const PORT = 8080;

app.get("/", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
