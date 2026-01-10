export default function sitemap() {
  const baseUrl = "https://alveseikejiriadvs.com.br/";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
