import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";

<script src="https://js.upload.io/react-uploader/v3"></script>
// Initialize once (at the start of your app).
const uploader = Uploader({ apiKey: "free" }); // Replace "free" with your API key.


const uploaderOptions = {
  multi: true,

  // Comment out this line & use 'onUpdate' instead of
  // 'onComplete' to have the dropzone close after upload.
  showFinishButton: true,

  // onUpdate: async function basicUpload(params) {
  //   const baseUrl = "https://api.upload.io";
  //   const path = `/v2/accounts/${params.accountId}/uploads/binary`;
  //   const entries = obj => Object.entries(obj).filter(([, val]) => (val ?? null) !== null);
  //   const query = entries(params.querystring ?? {})
  //     .flatMap(([k, v]) => Array.isArray(v) ? v.map(v2 => [k, v2]) : [[k, v]])
  //     .map(kv => kv.join("=")).join("&");
  //   const response = await fetch(`${baseUrl}${path}${query.length > 0 ? "?" : ""}${query}`, {
  //     method: "POST",
  //     body: params.requestBody,
  //     headers: Object.fromEntries(entries({
  //       "Authorization": `Bearer ${params.apiKey}`,
  //       "X-Upload-Metadata": JSON.stringify(params.metadata)
  //     }))
  //   });
  //   const result = await response.json();
  //   if (Math.floor(response.status / 100) !== 2)
  //     throw new Error(`Upload API Error: ${JSON.stringify(result)}`);
  //   return result;
  // }

  // basicUpload({
  //   requestBody: new Blob( // Or: pass a 'file' object from an input element.
  //     ["Example Data"],
  //     { type: "text/plain" }
  //   ),
  // }).then(
  //   response => console.log(`Success: ${JSON.stringify(response)}`),
  //   error => console.error(error)
  // ),

  styles: {
    colors: {
      primary: "#377dff"

    }
  }
}
const FileUpload = () => (

  <UploadDropzone uploader={uploader}       // Required.
    options={uploaderOptions}         // Optional.
    width="1029px"             // Optional.
    height="375px"      // Optional.
    onUpdate={files => {      // Optional.
      if (files.length === 0) {
        console.log('No files selected.')
      } else {
        console.log('Files uploaded:');
        let a = files.map(f => f.fileUrl).join("\n");
        console.log("{ \n img:", a, '\n}')


        async function basicUpload(params) {
          const baseUrl = "https://api.upload.io";
          const path = `/v2/accounts/${params.accountId}/uploads/binary`;
          const entries = obj => Object.entries(obj).filter(([, val]) => (val ?? null) !== null);
          const query = entries(params.querystring ?? {})
            .flatMap(([k, v]) => Array.isArray(v) ? v.map(v2 => [k, v2]) : [[k, v]])
            .map(kv => kv.join("=")).join("&");
          const response = await fetch(`${baseUrl}${path}${query.length > 0 ? "?" : ""}${query}`, {
            method: "POST",
            body: params.requestBody,
            headers: Object.fromEntries(entries({
              "Authorization": `Bearer ${params.apiKey}`,
              "X-Upload-Metadata": JSON.stringify(params.metadata)
            }))
          });
          const result = await response.json();
          if (Math.floor(response.status / 100) !== 2)
            throw new Error(`Upload API Error: ${JSON.stringify(result)}`);
          return result;
        }

        basicUpload({
          requestBody: new Blob( // Or: pass a 'file' object from an input element.
            [a],
            { type: "text/plain" }
          ),
        }).then(
          response => console.log(`Success: ${JSON.stringify(response)}`),
          error => console.error(error)
        )

      }
    }} />
)

export default FileUpload