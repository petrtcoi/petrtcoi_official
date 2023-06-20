export function highlightKeywords(text: string, keywordArray: string[]) {
    const highlightedText = text.replace(
      new RegExp(`\\b(${keywordArray.join("|")})\\b`, "gi"),
      "<span class='text-red-500'>$&</span>"
    )
    return highlightedText
  }