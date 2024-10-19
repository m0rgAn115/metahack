// ViewComponent.js
import React from 'react';
import { WebView } from 'react-native-webview';

const MyWebView = () => {
  return (
    <WebView 
      source={{ uri: 'https://may-ia.vercel.app' }} 
      style={{ flex: 1, backgroundColor: 'red' }} 
      mediaPlaybackRequiresUserAction={false} 
      javaScriptEnabled={true}
      allowsInlineMediaPlayback={true}
    />
  );
};

export default MyWebView; // Asegúrate de que sea una exportación por defecto
