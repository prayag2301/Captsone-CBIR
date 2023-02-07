import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";


<script src="https://js.upload.io/react-uploader/v3"></script>
// Get production API keys from Upload.io
const uploader = Uploader({
  apiKey: "free",
  styles: {
    colors: {
      primary: "#377dff",     // Hex codes only.
      active: "#528fff"
    },
    fontSizes: {
      base: 16
    },

  },

  // ---------------------
  // File Upload Behaviour
  // ---------------------
  path: {                      // Optional: can be a string (full file path) or an object like so:
    fileName: "Example.jpg",   // Each supports path variables (e.g. {ORIGINAL_FILE_EXT}). See your
    folderPath: "/uploads"     // API key's config in the Upload Dashboard for all path variables.
  },
  metadata: {},                // Arbitrary JSON object (to save against the file).
  tags: [],                    // Array of strings (to save against the file).

  onValidate: async file => { "Please upload the correct file type" },
  showFinishButton: true,
  showRemoveButton: true
});

// Customize the dropzone UI (see "customization"):
const options = { multi: true }

// Render the file upload dropzone:
export const MyDropzoneComponent = () =>
<div className="box">
  <UploadDropzone uploader={uploader}       // Required.
                  options={options}         // Optional.
                  width="600px"             // Optional.
                  height="375px"            // Optional.
                  onUpdate={files => {      // Optional.
                    if (files.length === 0) {
                      console.log('No files selected.')
                    } else {
                      console.log('Files uploaded:');
                      console.log(files.map(f => f.fileUrl));
                    }
                  }} 
    />
</div>