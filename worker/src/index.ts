export interface Env {
  BACKGROUND_REMOVAL_PROVIDER: string;
  BACKGROUND_REMOVAL_API_URL: string;
  BACKGROUND_REMOVAL_API_KEY: string;
  MAX_FILE_SIZE_MB: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // CORS Headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    if (request.method === 'POST' && url.pathname === '/api/remove-background') {
      try {
        const formData = await request.formData();
        const image = formData.get('image') as File;

        if (!image) {
          return new Response('No image provided', { status: 400, headers: corsHeaders });
        }

        const maxMb = parseInt(env.MAX_FILE_SIZE_MB || '10', 10);
        if (image.size > maxMb * 1024 * 1024) {
          return new Response(`File too large. Max ${maxMb}MB`, { status: 400, headers: corsHeaders });
        }

        if (!env.BACKGROUND_REMOVAL_API_KEY) {
          // Demo fallback if no real API key
          await new Promise(r => setTimeout(r, 2000));
          return new Response(image, {
            headers: {
              ...corsHeaders,
              'Content-Type': image.type,
              'X-Demo-Mode': 'true'
            }
          });
        }

        // Send to real provider
        const providerData = new FormData();
        providerData.append('image_file', image); // Example for remove.bg

        const response = await fetch(env.BACKGROUND_REMOVAL_API_URL || 'https://api.remove.bg/v1.0/removebg', {
          method: 'POST',
          headers: {
            'X-Api-Key': env.BACKGROUND_REMOVAL_API_KEY
          },
          body: providerData
        });

        if (!response.ok) {
          throw new Error('Upstream provider failed');
        }

        const processedBlob = await response.blob();
        return new Response(processedBlob, {
          headers: {
            ...corsHeaders,
            'Content-Type': 'image/png'
          }
        });
      } catch (err: any) {
        return new Response(err.message, { status: 500, headers: corsHeaders });
      }
    }

    return new Response('Not Found', { status: 404, headers: corsHeaders });
  }
};
