import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'de.mynethome.nativescriptpdfviewdemo',
  appResourcesPath: 'app/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;
