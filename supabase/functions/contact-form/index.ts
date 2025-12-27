import { createClient } from 'npm:@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const formData: ContactFormData = await req.json();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{ name, email, subject, message }])
      .select()
      .single();

    if (error) {
      throw error;
    }

    const emailBody = `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
      
      ---
      Submitted at: ${new Date().toISOString()}
    `;

    console.log('Email to send to laeba2704@gmail.com:');
    console.log(emailBody);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Your message has been received! I\'ll get back to you soon.',
        data 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to submit contact form' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});