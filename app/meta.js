const title = (title) => <title>{title}</title>
const meta = (name, content) => <meta name={name} content={content} />
const link = (rel, href) => <link rel={rel} href={href} />

export default meta = {
  "/": [
    title("Home"),
    meta("description", "This is the home page"),
  ],
}