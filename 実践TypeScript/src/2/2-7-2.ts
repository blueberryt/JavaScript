enum Ports {
  USER_SERVICE = "8080",
  REGISTER_SERVICE = "8081",
  MEDIA_SERVICE = "8888"
}

// ことなるブロックで宣言されても enum を追加できる
enum Ports {
  ANOTHER_SERVICE = "12345"
}
