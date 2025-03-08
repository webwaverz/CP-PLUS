import { NextResponse } from "next/server";

const chatbotData: { [key: string]: { response: string; options?: string[] } } = {
  start: {
    response: "Welcome! How can I assist you today?",
    options: ["Services", "Pricing", "Contact"],
  },
  Services: {
    response: "We offer the following services. Select one for more details:",
    options: ["Web Development", "App Development", "UI/UX Design"],
  },
  "Web Development": {
    response: "We create full-stack websites, e-commerce platforms, and custom solutions.",
  },
  "App Development": {
    response: "We build mobile apps using Flutter & React Native for iOS and Android.",
  },
  "UI/UX Design": {
    response: "We provide high-quality UI/UX designs using Figma and Adobe XD.",
  },
  Pricing: {
    response: "Our pricing depends on project requirements. Contact us for details!",
  },
  Contact: {
    response: "You can reach us at support@webwaverz.com.",
  },
};

export async function GET() {
  return NextResponse.json({ response: chatbotData.start.response, options: chatbotData.start.options });
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (chatbotData[message]) {
      const { response, options } = chatbotData[message];
      return NextResponse.json({ response, options: options || [] });
    } else {
      return NextResponse.json({ response: "Sorry, I don't understand.", options: [] });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
