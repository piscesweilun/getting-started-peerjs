# getting-started-peerjs
<h3>測試peerjs的基本功能。</h3>
<h4>1. Install the package globally:</h4>
<p><code>$ npm install peer -g</code></p>
<h4>2. Run the server:</h4>
<p><code>
  $ peerjs --port 9000 --path /myapp</code><br>
  <pre>Started PeerServer on ::, port: 9000, path: /myapp (v. 0.3.2)</pre>
</code></p>
<h4>3. Run receiver.html on browser</h4>
<h4>4. Run sender.html on browser</h4>
<h4>檢查是否收到對方的訊息。</h4>
<hr>
<h3>使用 http server</h3>
<p><code>
  $ node http-server.js</code><p><br>
<pre>Listening on: 8000</pre>
</code></p>
<h4>載入receiver</h4>
<p><code>localhost:8000</code><p>
<h4>載入sender</h4>
<p><code>localhost:8000/sender</code></p>
