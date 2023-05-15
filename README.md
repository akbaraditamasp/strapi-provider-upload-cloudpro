# Strapi Upload Provider for CloudPRO

This provider will upload to the space using the CloudPRO API.

## Parameters

- **Box Token** : CloudPRO box token

## How to Use

1. Install this package

```bash
npm i strapi-provider-upload-cloudpro
```

2. Create or update config in ./config/plugins.js with content

```javascript
module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        boxToken: env("PRO_BOX_TOKEN"),
      },
    },
  },
  // ...
});
```

3. Create .env and add provide CloudPRO config.

```bash
PRO_BOX_TOKEN=
```
