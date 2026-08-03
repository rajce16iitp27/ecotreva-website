import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
  companyName,
  contactPerson,
  businessEmail,
  phone,
  country,
  productCategory,
  estimatedQuantity,
  requirements,
} = body;

const data = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "raj.ce16iitp@gmail.com",
  
    replyTo: businessEmail,
  
    subject: `🌿 New Quote Request | ${companyName}`,
  
    html: `
      <div style="font-family: Arial, sans-serif; line-height:1.7; max-width:700px;">
        <h2 style="color:#2E7D32;">
          New Quote Request Received
        </h2>
  
        <hr>
  
        <p><strong>Company Name:</strong> ${companyName}</p>
  
        <p><strong>Contact Person:</strong> ${contactPerson}</p>
  
        <p><strong>Business Email:</strong> ${businessEmail}</p>
  
        <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
  
        <p><strong>Country:</strong> ${country}</p>
  
        <p><strong>Product Category:</strong> ${productCategory}</p>
  
        <p><strong>Estimated Quantity:</strong> ${estimatedQuantity}</p>
  
        <hr>
  
        <h3>Requirements</h3>
  
        <p>${requirements}</p>
  
        <hr>
  
        <p style="color:#666;">
          This enquiry was submitted through the Ecotreva website.
        </p>
      </div>
    `,
  });
    console.log("Resend Response:", data);

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 500 }
    );
  }
}