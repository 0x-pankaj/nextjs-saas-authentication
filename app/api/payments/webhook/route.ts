import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendPaymentSuccessEmail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { userId, status, amount, plan } = await req.json();

    if (status === "COMPLETED") {
      // Update user subscription
      const user = await db.user.update({
        where: { id: userId },
        data: {
          subscription: {
            upsert: {
              create: {
                plan: plan,
                status: "ACTIVE",
                startDate: new Date(),
                endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
              },
              update: {
                plan: plan,
                status: "ACTIVE",
                startDate: new Date(),
                endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
              },
            },
          },
        },
        include: {
          subscription: true,
        },
      });

      // Send success email
      await sendPaymentSuccessEmail(
        user.email,
        user.name || user.email,
        amount,
        plan
      );

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false });
  } catch (error) {
    console.error("Payment webhook error:", error);
    return NextResponse.json(
      { error: "Payment processing failed" },
      { status: 500 }
    );
  }
}