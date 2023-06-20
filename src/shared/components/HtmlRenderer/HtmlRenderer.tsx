export default function HtmlRender({ htmlString }: { htmlString: string }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />
}
