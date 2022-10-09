const translateTextFromEnToJa = (text: string) => {
  const apiAccessKey = PropertiesService.getScriptProperties().getProperty(
    'DEEPL_API_AUTHENTICATION_KEY',
  );

  if (!(text && apiAccessKey)) return null;

  const response = UrlFetchApp.fetch(
    'https://api-free.deepl.com/v2/translate',
    {
      method: 'post',
      headers: {
        Authorization: `DeepL-Auth-Key ${apiAccessKey}`,
      },
      payload: {
        text,
        target_lang: 'JA',
      },
    },
  );

  return JSON.parse(response.getContentText())?.translations[0]?.text ?? null;
};
