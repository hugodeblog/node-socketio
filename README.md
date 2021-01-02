# Node.jsでSocket.ioによるリアルタイム双方向通信

Node.jsではSocket.ioが利用できるので、今回はこのSocket.ioを使って双方向通信の実現するサンプル。

## Socket.ioで実装するサンプル

ページに「いいね」ボタンがあり、ボタンをクリックするといいね数が増えるというサンプル

## アプリの動作

以下でサーバーが起動可能

```
$ npm run start

> node-socketio@1.0.0 start
> node ./server.mjs
```

http://localhost:3000

に２つのブラウザタブでページにアクセスし、それぞれでいいねボタンを押したのが、両方のブラウザに反映される。

![動作テスト](https://github.com/hugodeblog/node-socketio/blob/images/iine_test.gif)



