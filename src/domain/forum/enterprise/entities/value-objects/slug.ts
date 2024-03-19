export class Slug {
  public value: string
  constructor(value: string) {
    this.value = value
  }

  /**
   * Create a slug from a text
   * Example: "Hello World" -> "hello-world"
   * @param text {string}
   */
  static createFromText(text: string) {
    const slug = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '-')

    return new Slug(slug)
  }
}
