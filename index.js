<html>
  <head>
    <style>
      #code {
        width: 60%;
        height: 200px;
        font-size: 18px;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid gray;
      }
      #language {
        font-size: 18px;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid gray;
      }
      #output {
        width: 60%;
        height: 200px;
        font-size: 18px;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid gray;
        overflow: auto;
      }
      #error {
        width: 60%;
        height: 200px;
        font-size: 18px;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid gray;
        overflow: auto;
        color: red;
      }
      button {
        font-size: 18px;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid gray;
        background-color: lightgray;
        cursor: pointer;
      }
    </style>
    <script>
      function compileCode() {
        var code = document.getElementById("code").value;
        var language = document.getElementById("language").value;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://api.jdoodle.com/v1/compile", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
            if (result.output) {
              document.getElementById("output").innerHTML = result.output;
            }
            if (result.compile_output) {
              document.getElementById("error").innerHTML = result.compile_output;
            }
          }
        };
        xhr.send(
          JSON.stringify({
            clientId: "bbed22bfabbbd7c0bc14f76c1a5e1c1e",
            clientSecret: "944338ef4db14b95c30a078c823005dcc6cba1a2a4977eee061bc07f41b5c9c1",
            script: code,
            language: language,
            versionIndex: "0",
          })
        );
      }
    </script>
  </head>
  <body>
    <textarea id="code"></textarea>
    <br />
    <select id="language">
      <option value="python">Python</option>
      <option value="c">C</option>
      <option value="c++">C++</option>
      <option value="java">Java</option>
    </select>
    <br />
    <button onclick="compileCode()">Compile Code</button>
    <br />
    <div id="output">Output will be displayed here</div>
    <br />
    <div id="error">Errors will be displayed here</div
</div>

  </body>
</html>
