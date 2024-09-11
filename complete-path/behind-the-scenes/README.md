# Behind the Scenes

## Key Topics

- How React **Updates the DOM**
- **Avoiding** Unnecessary Updates
- A Closer Look at **Keys**
- State **Scheduling** & State **Batching**

## Running the Application

To run the application, follow these steps:

```bash
git clone https://github.com/ThomasCode92/react-complete-guide
cd complete-path/behind-the-scenes    # navigate to project folder
npm install                           # install dependencies
npm run dev                           # start development server
```

Open [http://localhost:5173](http://localhost:5173) in a browser to view the application.

### React Dev Tools

The React Developer Tools browser extension provides a powerful interface for inspecting and debugging React component hierarchies, making it an essential tool for developers working with the open-source React JavaScript library. Once added to the browser, there will be two new tabs in Dev Tools: "⚛️ _Components_" and "⚛️ _Profiler_".<br />
The Components tab shows the root React components rendered on the page, along with their subcomponents. Selecting a component in the tree allows for the inspection and editing of its current props and state. The Profiler tab provides performance recording capabilities.<br />

More information can be found in the [Chrome Web Store](https://chromewebstore.google.com/detail/fmkadmapgofadopljbjfkapdkoienihi) or the [Firefox Browser Add-ons](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
