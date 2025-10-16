import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("API Route received data:", body);

    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    console.log("Forwarding to Google Apps Script...");
    const response = await fetch("https://script.google.com/macros/s/AKfycbw6WC_7f2syE-eGsb7KeNuj3R9qMGqoD1ZRILieB0sycy6CCWTav7xlwiN7TYPGhpQ/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    console.log("Google Apps Script response status:", response.status);

    if (!response.ok) {
      throw new Error(`Google Apps Script responded with status: ${response.status}`);
    }

    const data = await response.text();
    console.log("Google Apps Script response data:", data);

    return new NextResponse(data, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error: any) {
    console.error("Error forwarding to Google Apps Script:", error);
    
    return new NextResponse(
      JSON.stringify({ 
        error: "Failed to process request", 
        details: error.message 
      }),
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}