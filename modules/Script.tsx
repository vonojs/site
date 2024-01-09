export default function Script(props: { children: string }) {
  return <script dangerouslySetInnerHTML={{
    __html: props.children
  }} />;
}