    function downloadFile(url) {
      //Let us assume that file is being dowloaded
      console.log("File is being downloaded");
      setTimeout(() => {
        var a = url.split("com/").pop();
        console.log("File downloaded successfully");
        compressFile(a);
      }, 2000);

    }
    function compressFile(path) {
      //Let us assume that file is being compressed
      console.log("file is being compressed");
      setTimeout(() => {
        console.log("File is compressed");
        var b = path.replace(".mp3", ".zip");
        console.log(b);
        uploadFile(b);
      }, 2000);



    }
    function uploadFile(path) {
      //Let us assume that file is being uploaded
      console.log("File is being uploaded");
      setTimeout(() => {
        console.log("file is uploaded");
      }, 2000);

    }

    downloadFile("https://xyzabc/com/abc.mp3");
