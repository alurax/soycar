"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbAsyncInit?: () => void;
    FB?: any;
  }
}

export function FacebookPosts() {
  useEffect(() => {
    // Load Facebook SDK
    const loadFBSDK = () => {
      (window as any).fbAsyncInit = function () {
        (window as any).FB.init({
          appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
          xfbml: true,
          version: "v18.0",
        });
      };

      // Load the SDK script
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0&appId=693943867019937";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      // Parse XFBML after a delay to ensure SDK is loaded
      setTimeout(() => {
        if ((window as any).FB) {
          (window as any).FB.XFBML.parse();
        }
      }, 1000);
    };

    // Check if FB SDK is already loaded
    if (!(window as any).FB) {
      loadFBSDK();
    } else {
      // If already loaded, just parse
      (window as any).FB.XFBML.parse();
    }
  }, []);

  return (
    <section id="facebook-posts" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-medium text-sm tracking-wider uppercase mb-4 block text-[#dc2626]">
            Social Media
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Latest Updates
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Follow our Facebook page for the latest news, promotions, and travel tips from SoyCar.
          </p>
        </div>

        {/* Facebook Feed Plugin */}
        <div className="max-w-4xl mx-auto">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/soycartransportpalawan"
            data-tabs="timeline,events"
            data-width="100%"
            data-height="600"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          />
        </div>

        {/* Fallback Link */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Can't see the feed? Visit us directly:
          </p>
          <a
            href="https://www.facebook.com/soycartransportpalawan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#1877F2] text-white font-medium hover:bg-[#0a66c2] transition-colors"
          >
            Visit Our Facebook Page
          </a>
        </div>
      </div>
    </section>
  );
}

