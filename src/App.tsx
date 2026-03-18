import { markdownShortcutPlugin, MDXEditor } from "@mdxeditor/editor";

const App = () => {
  return <MDXEditor markdown="Hello" plugins={[markdownShortcutPlugin()]} />;
};

export default App;
